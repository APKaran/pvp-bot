import React, {useState} from 'react'
import { TopBand } from '../TopBanner/TopBanner'
import './HomePage.css';
import logo from '../../Assets/Images/sheep-logo.svg';
import wordmark from '../../Assets/Images/trp-wordmark.svg';
import odrtile from '../../Assets/Images/odr-tile.png';
import footerBrand from '../../Assets/Images/footer-brand.png';
import { Link } from 'react-router-dom';
import Bot from '../Bot/Bot';


export default function HomePage() {
    const [toggle, setToggle] = useState(false);
  return (
    <>  
        <div className='global-header-fixed'>
            <Bot/>
            <TopBand/>
            <header className='header-fixed-top'>
                <div className="header-bar">
                    <div className="header-bar-brand-zone">
                        <div className="header-bar-brand-zone-brandmark">
                            <img src={logo}/>
                        </div>
                        <div className="header-bar-brand-zone-wordmark">
                            <img src={wordmark}/>
                        </div>
                    </div>
                    <div className="header-bar-action-zone">
                        <div className="navigation-icon">
                            <div className="icon-wrapper">
                                <a href="#" className="help-icon">
                                    <img className='help-icon-img'/>
                                </a>
                                <a href="#" className="alert-icon">
                                    <img className='alert-icon-img'/>
                                </a>
                                <a href="#" className="profile-icon">
                                    <img className='profile-icon-img'/>
                                </a>
                            </div>
                        </div>
                        <div className="header-bar-action-zone-sign-in">
                            <button className="btn btn-primary btn-lg fw-bold">Logout</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div className="pvp-nav-top">
            <nav>
                <div className="pvp-primary-nav">
                    <ul className="pvp-primary-nav-nav-list">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Plan</li>
                        <li className="nav-item">Participants</li>
                        <li className="nav-item">Reports and Analytics</li>
                        <li className="nav-item">Resources</li>
                    </ul>
                </div>
            </nav>
        </div>
        <main role='main'>
            <div className='home-wrapper-main'>
                <div className="container">
                    <div className="main-header">
                        <h1 className="main-header-greeting">Hello Jones,</h1>
                    </div>
                    <div className="main-body">
                        <div className="main-body-side-nav">
                            <ul className='nav-container'>
                                <li className='nav-item'>
                                    <a  className='nav-link bold' href="#">Quick Links:</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="#plan-activity-card" className='nav-link'>Plan Activity</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="#" className='nav-link'>On-Demanding Reporting</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="#" className='nav-link'>User Setting and Profile</a>
                                </li>
                            </ul>
                        </div>
                        <div className="main-body-content">
                            <div id="plan-activity-card" className="plan-activity-card" onClick={()=> toggle && setToggle(!toggle)}>
                                <h1 className="card-title">Plan Activity</h1>
                                <div className="card-body">
                                    <div className="dropdown-btn">
                                        <button className='btn btn-primary' onClick={()=> setToggle(!toggle)}>
                                            <span>Submit New Project </span>
                                            <i class="caret"></i>
                                        </button>
                                        {toggle && <ul className='card-dropdown'>
                                            <li className='list-item'>
                                                <Link to='/plan-inquiry'>Plan Inquiry</Link>
                                            </li>
                                            <li className='list-item'>
                                                <Link to='/participant-inquiry'>Participant Inquiry</Link>
                                            </li>
                                        </ul>}
                                    </div>
                                    <div className='body-text'>You dont have any open tasks at this time</div>
                                    <div className='card-link'>View open projects</div>
                                </div>
                            </div>
                            <div className="on-demand-reporting">
                                <div className="card-title">On-Demand Reporting</div>
                                <div className="card-body">
                                    <div className='col-1'>
                                        <div className="body-text">
                                        Run, customize, and schedule plan and participant-level reports with our updated reporting tool.
                                        </div>
                                        <button className='btn btn-primary common-btn'>Launch On-Demanding Reporting</button>
                                    </div>
                                    <div className='col-1'>
                                        <img src={odrtile} height='189' width='317'/>
                                    </div>
                                </div>
                            </div>
                            <div className="settings-and-profile">
                                <div className="user-settings">
                                    <div className="">
                                        <h1 className="card-title">User Settings</h1>
                                        <button className="btn btn-primary common-btn">Add New Users</button>
                                        <div className="card-link">View All Users</div>
                                    </div>
                                </div>
                                <div className="user-profile">
                                    <div>
                                        <h1 className="card-title">Profile & Preferences</h1>
                                        <button className="btn btn-primary common-btn">Manage Preferences</button>
                                        <div className="card-link">View Plan Access</div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-page-disclaimer">
                                <p>Please contact your company's <span>Authorized Approver</span> for additional Plan Sponsor Tool or to request access to additional plans.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div className="footer-container">
                <div className="brand">
                    <img src={footerBrand} width='242' height='12' alt="" />
                </div>
                <div className="copyright">
                © 2021 T. Rowe Price. All rights reserved. T. ROWE PRICE, INVEST WITH CONFIDENCE, and the Bighorn Sheep design are, collectively and/or apart, trademarks of T. Rowe Price Group, Inc.
                </div>
            </div>
        </footer>
    </>
  )
}
