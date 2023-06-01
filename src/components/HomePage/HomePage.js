import React from 'react'
import { TopBand } from '../TopBanner/TopBanner'
import './HomePage.css';
import logo from '../../Assets/Images/sheep-logo.svg';
import wordmark from '../../Assets/Images/trp-wordmark.svg';


export default function HomePage() {
  return (
    <>
        <TopBand fixed/>
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
        <div className="pvp-nav-top">
            <nav>
                <div className="pvp-primary-nav">
                    <ul className="pvp-primary-nav-nav-list">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Home</li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
  )
}
