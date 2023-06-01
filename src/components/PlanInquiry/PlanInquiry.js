import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import PlanInquiryNav from '../PlanInqiryNav/PlanInquiryNav'
import './PlanInquiry.css';
import PlanInquiryForm from '../PlanInquiryForm/PlanInquiryForm';
import PlanInquiryFooter from '../PlanInquiryFooter/PlanInquiryFooter';
import Bot from '../Bot/Bot';

export default function PlanInquiry(props) {
  return (
    <div>
        <PlanInquiryNav/>
        <div className='plan-inquiry-container'>
            <div className='container'>
            <Breadcrumb isPlanInquiry={props.isPlanInquiry}/>
            <div className='form-container'>
                <div className="form-header rounded-top p-4 border-bottom">
                    <h1 className='fs-2 mt-none mb-2 text-start ps-2 fw-light'>New Project Form</h1>
                    <p className='text-start ps-2 w-75'>To submit a new project, enter the essential information below and click Submit. Information marked with an asterisk(*) is required.</p>
                </div>
                <PlanInquiryForm isPlanInquiry={props.isPlanInquiry}/>
                <PlanInquiryFooter/>
            </div>
            </div>
        </div>
        <Bot/>
    </div>
  )
}
