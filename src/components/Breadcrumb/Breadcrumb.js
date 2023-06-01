import React from 'react'
import './Breadcrumb.css';

export default function Breadcrumb(props) {
  return (
    <>
        <div className='breadcrumb-text'>
            <div className='breadcrumb-text-container'>
                <strong>
                    {props.isPlanInquiry ? <span>Plan Inquiry</span>: <span>Participant Inquiry</span>}
                </strong>
                <div>
                    <span className='text-seperator'>/</span>
                    Multiple Plans
                </div>
            </div>
            <div className='help-docs-container'>
                <a href="#">
                    <strong>Need Help?</strong>
                </a>
            </div>
        </div>
    </>
  )
}
