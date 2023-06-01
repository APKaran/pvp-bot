import React from 'react'
import './PlanInquiryNav.css';
import trpLogo from '../../Assets/Images/logo-trp-wordmark.png';
import { Link } from 'react-router-dom';


export default function PlanInquiryNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-inverse">
        <div className='navbar-header'>
            <Link to='/' className="navbar-brand navbar-brand-logo" >
                <img src={trpLogo}/>
            </Link>
        </div>
        <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav ms-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#">View Requests</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#">View Tasks</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#">Submit Request</a>
            </li>
            </ul>
        </div>
    </nav>
  )
}
