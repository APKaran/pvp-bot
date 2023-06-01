import React,{useState} from "react";
import Form from 'react-bootstrap/Form';

export default function PlanInquiryForm(props) {
    const [checked, setChecked] = useState(true);
  return (
    <>
      <div className='form-body border-bottom'>
            <div className="mb-4">
            <div className='text-start pb-2'><span className='align-top text-danger'>*</span >Plan</div>
            <Form.Select aria-label="Default select example" className='form-select-sm w-25'>
                <option>COSTCO 401(K)(MASKED) RETIREMENT PLAN (104389)</option>
                <option value="1">COSTCO 401(K) RETIREMENT(106250) (106250)</option>
                <option value="2">COSTCO PUERTO RICO (105301) RETIREMENT PLAN (105301)</option>
            </Form.Select>
            </div>
            <div className="mb-4">
            <div className='text-start pb-2'><span className='align-top'>*</span >Type</div>
            <Form.Select aria-label="Default select example" className='form-select-sm w-25' disabled>
                <option>{props.isPlanInquiry ? 'Plan Inquiry' : 'Participant Inquiry'}</option>
            </Form.Select>
            </div>

            <div className="mb-4">
            <div className='text-start pb-2'><span className='align-top text-danger'>*</span >Client Contact</div>
            <Form.Select aria-label="Default select example" className='form-select-sm w-25'>
                <option>volodtest1 test</option>
            </Form.Select>
            </div>

            <Form.Group className="mb-4" controlId="">
            <div className='text-start pb-2'><span className='align-top text-danger'>*</span >Client Contact Email</div>
                <Form.Control className='form-control-sm w-25' type="email" placeholder="volodtest1@testemail.com" value="volodtest1@testemail.com"/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="">
            <div className='text-start pb-2'><span className='align-top text-danger'>*</span >Client Contact Phone Number</div>
                <Form.Control className='form-control-sm w-25' type="number" placeholder="111547478555444" value="111547478555444"/>
            </Form.Group>

            <div className="mb-4">
            <div className='text-start pb-2'><span className='align-top text-danger'>*</span >Reason for Inquiry</div>
            <Form.Select aria-label="Default select example" className='form-select-sm w-25'>
                <option>--None--</option>
                <option value="1">Administrative Procedure Approval</option>
                <option value="2">Audit</option>
                <option value="3">Benchmarking</option>
                <option value="2">Benificiaries</option>
                <option value="2">Contributions</option>
                <option value="2">Disclosures</option>
                <option value="7">Distributions</option>
                <option value="8">Fee Changes</option>
            </Form.Select>
            </div>

            <div className="mb-4">
            <div className='text-start pb-2'><span className='align-top text-danger'>*</span >Priority</div>
            <Form.Select aria-label="Default select example" className='form-select-sm w-25'>
                <option>--None--</option>
                <option value="1">1-Critical</option>
                <option value="2">2-High</option>
                <option value="3">3-Moderate</option>
                <option value="2">4-Low</option>
            </Form.Select>
            </div>
            <Form.Group className="mb-4" controlId="">
                <div className='text-start pb-2'><span className='align-top text-danger'>*</span >Details</div>
                <Form.Control className='form-control-sm w-50' as="textarea" rows={3} />
            </Form.Group>
            { !props.isPlanInquiry && <>
               <Form.Group className="mb-4" controlId="">
                <div className='text-start pb-2'><span className='align-top text-danger'>*</span >First Name</div>
                <Form.Control className='form-control-sm w-25' type="text" />
               </Form.Group>

               <Form.Group className="mb-4" controlId="">
                <div className='text-start pb-2'><span className='align-top text-danger'>*</span >Last Name</div>
                <Form.Control className='form-control-sm w-25' type="text" />
               </Form.Group>

               <Form.Group className="mb-4" controlId="">
                <div className="mb-4">
                <Form.Check
                    className="active"
                    inline
                    label="Employee ID"
                    name="group1"
                    type='radio'
                    id={`inline-radio-1`}
                    defaultChecked
                    onChange={(e) => {setChecked(!checked)}}
                />
                <Form.Check
                    inline
                    label="Last 4 Digits of SSN"
                    name="group1"
                    type='radio'
                    id={`inline-radio-2`}
                    onChange={(e) => {setChecked(!checked)}}
                />
                </div>
                <div className='text-start pb-2'><span className='align-top text-danger'>*</span >{checked ? 'Employee ID':'Last 4 Digits of SSN'}</div>
                <Form.Control className='form-control-sm w-25' type="text" />
               </Form.Group>
               <button className="btn btn-primary mb-4">
                   Add Participant
               </button>
               <Form.Group className="mb-4" controlId="">
                <div className='text-start pb-2'><span className='align-top text-danger'>*</span >Participant(s) Information</div>
                <Form.Control className='form-control-sm w-50' as="textarea" rows={3} disabled/>
               </Form.Group>
               </> 
            }
        </div>
    </>
  );
}
