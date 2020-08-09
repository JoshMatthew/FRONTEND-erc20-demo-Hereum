import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

  render() {
    return (
      <header className="absolute w-full h-auto bg-gray-900	">
        <ul className="flex items-center justify-center h-16 font-semibold">
          <li>
            <NavLink activeClassName="text-blue-200" className="mr-6 text-blue-100 hover:text-blue-200" exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="text-blue-200" className="ml-6 text-blue-100 hover:text-blue-200" to="/details">Details</NavLink>
          </li>
        </ul>
      </header>
    )
  }

}

export default Header