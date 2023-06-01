import React from 'react'
import './TopBanner.css';
import flag from '../../Assets/Images/icon-flag-usa.png';
import trpLogo from '../../Assets/Images/logo-trp-wordmark.png';
import trustyLogo from '../../Assets/Images/trusty-logo.svg';




export default function TopBanner() {
  return (
    <>
    <TopBand/>
    <div className="wrapper-site-bar">
        <div className="container">
            <div class="brand-wordmark-trp">
                <img src={trpLogo}/>
            </div>

            <a target="_blank" href="http://www.troweprice.com/">
                <div className="brand-square-trusty">
                    <img src={trustyLogo} height="45" width="45"/>
                </div>
            </a>
            <ul class="site-bar-nav">
                <li >
                    <a id="externalLogIn" className='login' title="Log In">Log In</a>
                </li>
            </ul>
        </div>
    </div>
    </>
    
  )
}
export function TopBand(props) {
    return(
    <div className={props.fixed ? 'wrapper-bar fixed' : 'wrapper-bar'}>
        <div className='container'>
        <div class="country pull-left">
                <img src={flag} className="flag"/> United States
            </div>
        </div>
        <div class="dropdown">
            <a class="pull-left btn-txt dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Recordkeeping Sponsor/Consultant <span class="caret"></span> </a>
        </div>
    </div>
    )
}
