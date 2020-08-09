import React from 'react';
import Tooltip from 'react-power-tooltip'
import Loader from 'react-loader-spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Web3Context } from '../../context/Web3Context';

// The current account details
class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      showDone: false
    }
  }

  // Shortens the length of the account address
  //  just for viewing. But still the real data is safe
  formatAccount(acc) {
    const formatted = acc.slice(0, 4) + "..." + acc.slice(acc.length - 2)
    return formatted
  }

  // Helper function to show the tooltip
  showTooltip(bool) {
    this.setState({ show: bool, showDone: false })
  }

  // Helper function to show the tooltip when it's copied
  showDone() {
    this.setState({ showDone: true, show: false })
  }

  render() {
    return (
      <Web3Context.Consumer>{context => {
        let acc = ''
        acc = this.formatAccount(context.account)

        return (
          <div className="flex items-center justify-center flex-col w-2/5 h-64">
            <h1 className="network text-6xl text-gray-800 uppercase mb-12">{
              context.network ||
              (
                // Shows a loading animation when network is not ready
                <Loader type="BallTriangle" color="#2a4365" height={85} width={85} />
              )
            }</h1>
            <div className="w-full h-full flex-col">
              <div className="flex px-2 py-4 m-4 text-xl text-center bg-blue-200 rounded">
                <h1 className="flex-1 text-gray-800">
                  <FontAwesomeIcon icon={faUser} className="text-lg mr-2" />
                   Account Id:
                </h1>
                <span className="flex-1 flex items-center justify-center">
                  <h1 className="mr-2 text-gray-800 font-bold">{acc}</h1>
                  <span
                    className="flex items-center"
                    style={{ position: 'relative' }}
                    onMouseOver={() => this.showTooltip(true)}
                    onMouseLeave={() => this.showTooltip(false)}
                    onClick={() => this.showDone(true)}>

                    <svg
                      className="icon-clipboard text-blue-900 hover:text-blue-800 cursor-pointer active:text-blue-100"
                      onClick={() => { navigator.clipboard.writeText(context.account) }}>
                      <use xlinkHref="#icon-clipboard"></use>
                    </svg>

                    <Tooltip
                      show={this.state.show}
                      fontSize="16px"
                      textBoxWidth="auto"
                      fontWeight="default"
                      padding="5px 8px"
                    >
                      <span>Copy!</span>
                    </Tooltip>

                    <Tooltip
                      show={this.state.showDone}
                      fontSize="16px"
                      textBoxWidth="auto"
                      fontWeight="default"
                      padding="5px 8px"
                    >
                      <span>Copied!</span>
                    </Tooltip>
                  </span>
                </span>
              </div>
            </div>
          </div>
        )
      }
      }
      </Web3Context.Consumer >
    )
  }
}

export default Details;
