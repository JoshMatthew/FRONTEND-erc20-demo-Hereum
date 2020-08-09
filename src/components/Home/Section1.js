import React, { Component } from 'react';


// Section on the upper part of the Main Component
class Section1 extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { addTokenToWallet, context } = this.props

    return (
      <>
        <div className="flex items-center justify-ceter ">
          <button
            className="netwrok m-4 bg-transparent hover:bg-blue-500 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded"
            onClick={addTokenToWallet}>
            My HRE(s)
          </button>
          <button
            className="m-4 bg-transparent hover:bg-blue-500 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded"
            onClick={() => { context.getHre(10) }}>
            Add 10 HREs
          </button>
        </div>
        <span>
          <h1 className="network text-gray-900">Or</h1>
        </span>
        <div className="flex items-center justify-ceter">
          <button
            className="m-4 bg-gray-900 hover:bg-gray-800 text-gray-100 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-gray-800 rounded"
            onClick={() => {
              window.open(`https://joshmatthew.github.io/PeewPeew/?acc=${context.account}`, "_blank")
            }}>
            Play PeewPeew to gain HREs
          </button>
        </div>
      </>
    );
  }
}

export default Section1;
