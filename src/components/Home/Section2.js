import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import Tooltip from 'react-power-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

// Section on the lower part of the Main Component
class Section2 extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const {
      points,
      isLoading,
      getCurrentPoints,
      context,
      showTooltip,
      hideTooltip,
      getConvertedAcc,
      hre,
      toolTipShow } = this.props

    return (
      <>
        <div className="m-4 flex flex-col items-center justify-ceter">
          <h1>Peewpeew Points</h1>
          <span>
            <h1 className="network text-3xl">
              {isLoading ? (
                <Loader type="BallTriangle" color="#2a4365" height={45} width={45} />
              ) : (points)}
            </h1>
          </span>
          <span className="mt-4 flex items-center">
            <FontAwesomeIcon
              className="refresh cursor-pointer text-gray-700 hover:text-gray-900"
              icon={faSyncAlt}
              onClick={() => { getCurrentPoints(context.account) }}
            />
          </span>
        </div>
        <div className="flex items-center justify-ceter">
          <span
            style={{ position: "relative" }}
            onMouseOver={() => { showTooltip() }}
            onMouseLeave={() => { hideTooltip() }}>
            <button
              className="m-4 bg-teal-900 hover:bg-teal-800 text-gray-100 font-semibold hover:text-white py-2 px-4 border border-teal-900 hover:border-teal-800 rounded"
              onClick={() => { getConvertedAcc() }}
            >Convert Points to HRE
            </button>

            <Tooltip
              show={toolTipShow}
              fontSize="16px"
              textBoxWidth="auto"
              fontWeight="default"
              padding="5px 8px"
            >
              <span>{Math.floor(hre)} hre</span>
            </Tooltip>
          </span>
        </div>
      </>
    );
  }
}

export default Section2;
