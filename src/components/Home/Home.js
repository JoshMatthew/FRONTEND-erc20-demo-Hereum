import React from 'react';
import { Web3Context } from '../../context/Web3Context';
import axios from 'axios'
import Section1 from './Section1';
import Section2 from './Section2';

// Shows the main content of the dApp
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      toolTipShow: false, // The variable used to know if tooltip is on or off
      points: 'none', // Points gathered after playing peewpeew
      isLoading: false,
      estHre: 0 // Estimated HRE
    }

    this.showTooltip = this.showTooltip.bind(this)
    this.hideTooltip = this.hideTooltip.bind(this)
    this.addTokenToWallet = this.addTokenToWallet.bind(this)
    this.getCurrentPoints = this.getCurrentPoints.bind(this)
  }

  showTooltip() {
    this.setState({
      toolTipShow: true
    })
  }

  hideTooltip() {
    this.setState({
      toolTipShow: false
    })
  }

  async getCurrentPoints(acc) { // Request the current available points for this user
    let data = 'none'
    this.setState({ isLoading: true })
    let res = await axios.get(`https://hereumapi.herokuapp.com/peewpeew/points/${acc}/no`)
    if (res.data.point.points !== 0) {
      data = res.data.point.points
    }
    this.setState({ isLoading: false, points: data, estHre: (Math.floor(data / 100)) })
  }

  async addTokenToWallet() { // Ask user to use the current token provided by the dApp
    const provider = window.web3.currentProvider
    provider.sendAsync({
      method: 'metamask_watchAsset',
      params: {
        "type": "ERC20",
        "options": {
          "address": "0xCF5e06f831F9d878779ce285418610B16De89FC6",
          "symbol": "HRE",
          "decimals": 18
        },
      },
      id: Math.round(Math.random() * 100000),
    }, (err, added) => {
      console.log('provider returned', err, added)
    })
  }


  render() {
    return (
      <Web3Context.Consumer>{context => {

        const getConvertedAcc = async () => { // Get the amount of hre from the server that varries from the points
          if (this.state.points !== 'none') { // If there's no points, don't execute
            let hre = 0
            let data = 'none'
            this.setState({ isLoading: true })
            let res = await axios.get(`https://hereumapi.herokuapp.com/peewpeew/points/${context.account}/yes`)
            if (res.data.point.points !== 0) {
              hre = Math.floor(res.data.hre)
              data = res.data.point.points
            }
            this.setState({ isLoading: false, points: 'none', estHre: 0 })
            context.getHre(hre)
          }
        }

        return (
          <div className="flex flex-col p-4 w-1/2 items-center">
            <span>
              <h1 className="network text-5xl text-gray-800 uppercase mb-6">Hereum (HRE)</h1>
            </span>
            <Section1 context={context} addTokenToWallet={this.addTokenToWallet} />
            <Section2
              points={this.state.points}
              isLoading={this.state.isLoading}
              getCurrentPoints={this.getCurrentPoints}
              context={context}
              showTooltip={this.showTooltip}
              hideTooltip={this.hideTooltip}
              getConvertedAcc={getConvertedAcc}
              estHre={this.state.estHre}
              toolTipShow={this.state.toolTipShow}
            />
          </div>
        )
      }}
      </Web3Context.Consumer>
    )
  }
}

export default Home;