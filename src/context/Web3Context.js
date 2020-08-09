import React, { createContext } from 'react';
import getWeb3 from '../scripts/getWeb3';
import axios from 'axios'

export const Web3Context = createContext()

class Web3ContextProvider extends React.Component {

  constructor() {
    super()
    this.state = {
      account: '',
      network: '',
      tokenBalance: '',
      MyTokenContract: ''
    }
  }

  componentDidMount() { // Initialize metamask and other stuff when component mounts
    this.initializeWeb3()
  }

  async initializeWeb3() { // Initializes the current account, network and gets the contract from the backend
    const web3 = await getWeb3() // Requests for metamask connection
    const accounts = await web3.eth.getAccounts()
    const network = await web3.eth.net.getNetworkType()

    if (network === 'ropsten') {

      const response = await axios.get("https://hereumapi.herokuapp.com/token/contract")
      const TokenContract = response.data.hereumContract
      const networkId = await web3.eth.net.getId()

      const MyTokenContract = await new web3.eth.Contract(
        TokenContract.abi,
        TokenContract.networks[networkId].address
      )

      this.setState({ MyTokenContract })
    }

    this.setState({
      account: accounts[0],
      network
    })

    // Events when network change
    window.ethereum.on('chainChanged', async () => {
      const network = await web3.eth.net.getNetworkType()
      this.setState({ network })
    })

  }

  getHre = async (amount) => { // executes the erc20 contract's method to get us tokens
    const { MyTokenContract, account } = this.state

    await MyTokenContract.methods.getToken(amount).send({ from: account })
  }

  render() {
    return (
      <Web3Context.Provider value={{ ...this.state, getHre: this.getHre }} >
        {this.props.children}
      </ Web3Context.Provider>
    )
  }

}

export default Web3ContextProvider