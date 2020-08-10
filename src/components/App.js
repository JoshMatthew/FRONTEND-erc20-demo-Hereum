import React from 'react';
import '../css/tailwind.output.css'
import Web3ContextProvider, { Web3Context } from '../context/Web3Context';
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Header from './Header';
import Home from './Home/Home';
import Details from './Details/Details';
import NotConnectedToRopsten from './NotConnectedToRopsten'
import NoMetamaskInstalled from './NoMetamaskInstalled';

class App extends React.Component {
  render() {
    return (
      <Web3ContextProvider>
        <Web3Context.Consumer>{context => {
          return (
            <>
              {context.hasMetamask ? (
                <BrowserRouter>
                  {context.network === 'ropsten' ? (
                    <>
                      <Header />
                      <div className="w-screen h-screen bg-blue-100 flex items-center justify-center bgg">
                        <Route exact path="/" component={Home} />
                        <Route path="/details" component={Details} />
                      </div>
                    </>
                  ) : (<NotConnectedToRopsten />)}
                </BrowserRouter>
              ) : (
                  <NoMetamaskInstalled />
                )}
            </>
          )
        }}
        </Web3Context.Consumer>
      </Web3ContextProvider>
    )
  }
}

export default App;
