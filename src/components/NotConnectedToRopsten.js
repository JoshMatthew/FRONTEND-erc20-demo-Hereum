import React, { Component } from 'react';
import { Web3Context } from '../context/Web3Context'
import Loader from 'react-loader-spinner'

// Show this component when connected to different network other than Ropsten
class NotConnectedToRopsten extends Component {


  formatNetwork(network) {
    let net = <span className="text-blue-600">{network.toUpperCase() + " network"}</span>
    return net
  }

  render() {

    return (
      <Web3Context.Consumer>{context => {

        let network = ''
        if (context.network) {
          network = context.network
        }

        return (
          <div className="w-screen h-screen bg-blue-100 flex items-center justify-center bgg">
            <>
              {network === '' ? (
                <Loader type="BallTriangle" color="#2a4365" height={85} width={85} />
              ) : (
                  <h1 className="network">
                    You are currently connected on {this.formatNetwork(context.network)}.
                    Please switch to {this.formatNetwork("ropsten")} instead.
                  </h1>
                )}
            </>
          </div>
        )
      }}
      </Web3Context.Consumer>
    )
  }

}

export default NotConnectedToRopsten
