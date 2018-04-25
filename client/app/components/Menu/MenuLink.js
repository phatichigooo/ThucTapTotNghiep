import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'





const MenuLink = ({label , to , activeOnlyWhenExact}) => {
  return (
    <Route path = {to} exact ={activeOnlyWhenExact} children = {({match}) =>{
      var active = match ? 'active' : '';
      return (
          
        <li className = {active}>
            <Link to={to} >
                  {label}
            </Link>
        </li>
      )
    }} 
    />
  )
}

export default MenuLink
