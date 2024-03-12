import React from 'react'
import { NavLink } from 'react-router-dom';

const popupMenu = ({navlinks}) => {
  return (
    <div>
        <nav>
            <ul>
                {navlinks?.map((val, i) => (
                    <li><NavLink to={`#`}></NavLink></li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default popupMenu