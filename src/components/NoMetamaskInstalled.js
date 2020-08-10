import React, { Component } from 'react';
import { Web3Context } from '../context/Web3Context';
import { NavLink } from 'react-router-dom';

class NoMetamaskInstalled extends Component {
  render() {
    return (
      <Web3Context.Consumer>{context => {

        return (
          <div className="w-screen h-screen bg-blue-100 flex items-center justify-center bgg">
            <h1 className="network">
              You don't have metamask installed, you can install it <a className="text-blue-700" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">here</a>.
          </h1>
          </div>
        )
      }}
      </Web3Context.Consumer>
    )
  }
}

export default NoMetamaskInstalled;
