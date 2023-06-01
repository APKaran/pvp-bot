import React from 'react'
import paperclip from '../../Assets/Images/paperclip.svg'
export default function PlanInquiryFooter() {
  return (
    <>
        <div className="form-footer p-3">
            <div className="form-actions pb-2 d-flex justify-content-between">
                <button className="btn btn-primary">Submit</button>
                <button className="attachment-btn btn btn-link text-decoration-none">
                    <img src={paperclip} alt="" />
                    Add attachments
                </button>
            </div>
            <div className="required-info p-3 text-start">
                <span>Required Info</span>
                <span className="required">Reason for Inquiry</span>
                <span className="required">Priority</span>
                <span className="required">Details</span>
            </div>
        </div>
    </>
  )
}
