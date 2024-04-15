import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar1 from '../components/Navbar';

export default function LeavePage() {
  return (
    <div className="w-screen h-screen text-white">
        <Form>
            <div>
                <Navbar1 />
            </div>
            <div className="bg-slate-100 rounded-lg p-8 m-10 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50">
                <div>
                    <span className='text-white text-3xl font-bold'>Leave Application Form</span>
                </div>
                

                    <div className='grid grid-cols-2'>
                        <div className='text-white mt-5 mr-2'>
                        
                            <Form.Group className="mb-3" controlId="startDate">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="date" placeholder="Select Leave Start Date" />
                                {/* <Form.Text className='text-white'>
                                We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="leaveReasons">
                                <Form.Label>Reason(s) for Leave</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter the reason(s) for the leave" style={{height: "120px"}}/>
                            </Form.Group>

                        </div>

                        <div className='text-white mt-5 ml-2'>
                            
                                <Form.Group className="mb-3" controlId="endDate">
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control type="date" placeholder="Select Leave End Date" />
                                    
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="leaveAddress">
                                    <Form.Label>Leave Address</Form.Label>
                                    <Form.Control as="textarea" placeholder="Enter the address of leave location" style={{height: "120px"}}/>
                                </Form.Group>
                            
                        </div>
                    
                        
                </div>
                
                <Form.Group className="mb-3" controlId="contactNo">
                    <Form.Label>On-leave Contact No.</Form.Label>
                    <Form.Control type="number" placeholder="Enter Contact No." />
                </Form.Group>
                
                <div>
                    <Button variant="primary" type="">Submit</Button>
                    <Button variant="danger" type="" className='ml-2'>Reset</Button>
                </div>
            </div>
        </Form>
    </div>
  )
}
