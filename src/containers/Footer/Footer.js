import React from 'react';
import { HiOutlineMinus } from 'react-icons/hi'
import rocket from '../../assests/rocket.png'
import arrow2 from '../../assests/arrow2.svg'
import t2clogo from '../../assests/t2clogo.svg'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import rocketmob from '../../assests/rocketmob.png'
function Footer() {
    return (
        <>
            <div className='footerbgcolor'>
                <div className='container'>
                    <div className='row py-4'>
                        <div className='col-6 col-lg-4 col-md-4'>
                            <p className=''><HiOutlineMinus />Get in Touch</p>
                            <p className='h2 fw-bolder'><span className='font-color'>Take filght</span> with T²C</p>
                            {/* <p className='h2 fw-bolder '><span className='font-color'>Take filght</span> with T²C</p> */}
                            <div className='d-flex d-sm-flex d-md-flex d-lg-none'>
                                <button className='btn btn-dark rounded-5 px-3 '>Talk to us  <img src={arrow2} alt='arrow2' width='12%' /></button>
                            </div>
                        </div>
                        <div className='col-4  d-flex justify-content-center'>
                            <img src={rocket} className=' footerimgposition d-none d-sm-none d-md-none d-lg-flex' alt='rocket' width='200px' />
                            <img src={rocketmob} className=' footerimgposition d-flex d-sm-flex d-md-flex d-lg-none mt-1' alt='rocket' width='145px' />
                        </div>
                        <div className='col-4 d-none d-sm-none d-md-none d-lg-flex align-items-center justify-content-end '>
                            <button className='btn btn-dark rounded-5 px-4 py-2'>Talk to us  <img src={arrow2} alt='arrow2' width='12%' /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container px-3'>
                <div className='row my-lg-5 my-md-5 my-3'>
                    <div className='col-12 col-lg-3 col-md-3'>
                        <div className='row'>
                            <div className='col-5 col-lg-12 col-md-12'>
                                <img src={t2clogo} alt='logo' className='img-fluid col-lg-7 col-md-7' />
                            </div>
                            <div className='col-1 d-block d-sm-block d-md-none d-lg-none'>
                                <div className='vr' style={{ height: '80px' }}></div>
                            </div>
                            <div className='col-6 col-lg-12 col-md-12 mt-lg-3 mt-md-3'>
                                <p className='fw-light'>Nam libero tempore, cum nobis est eligendi optio cumque.</p>
                            </div>

                        </div>
                        <hr className='d-block d-sm-block d-md-none d-lg-none' />
                        <div className='row d-none d-sm-none d-md-flex d-lg-flex'>
                            <div className='col-12 mt-3 '>
                                <p className='mt-4'><a href='' className='text-dark text-decoration-none fw-light'>contact@tsquaredc.com</a></p>
                                <p className='mt-4'><a href='' className='text-dark text-decoration-none fw-light'>Terms and Conditions</a></p>
                                <p className='mt-4'><a href='' className='text-dark text-decoration-none fw-light'>Privacy Policy</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-md-6'>
                        <div className='row'>
                            <p><b>Solutions</b></p>
                            <div className='col-12 col-lg-7 col-md-7'>
                                <p className='fw-light'>Solutions Startup Development Services </p>
                                <p className='fw-light'>MVP Development Services</p>
                                <p className='fw-light'>Web Development</p>
                                <p className='fw-light'>Mobile Development</p>
                                <p className='fw-light'>QA Services</p>
                                <p className='fw-light'>Design Services</p>
                                <p className='fw-light'>Data Engineering</p>
                                <p className='fw-light'>Big Data Development</p>
                            </div>
                            <div className='col-12 col-lg-5 col-md-5'>
                                <p className='fw-light'>Cloud Consulting</p>
                                <p className='fw-light'>Digital Transformation</p>
                                <p className='fw-light'>Technology Consulting</p>
                                <p className='fw-light'>Angular Development</p>
                                <p className='fw-light'>React.js Development</p>
                                <p className='fw-light'>React Native Development </p>
                                <p className='fw-light'>Azure Consulting</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 col-md-3'>
                        <div className='row'>
                            <div className='col-12 pt-4 pt-lg-0 pt-md-0'>
                                <p><b>PROCESS</b> </p>
                                <p className='fw-light'>Idea to Product</p>
                                <p className='fw-light'>Prototype to Engineering</p>
                                <p className='fw-light'>Demand to Delivery</p>
                            </div>
                            <div className='col-12 mt-4'>
                                <p><b>COMPANY</b> </p>
                                <p className='fw-light'>About</p>
                                <p className='fw-light'>Join our team</p>
                                <p className='fw-light'>Contact us</p>
                            </div>
                        </div>

                    </div>

                </div>
                <hr className='d-none d-sm-none d-md-block d-lg-block mt-5' />
            </div>
            <div className='d-block d-sm-block d-md-none d-lg-none'>
                <div>
                    <hr />
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <p className='mt-4'><a href='' className='text-dark text-decoration-none fw-light'>Terms and Conditions</a></p>
                                <p className='mt-4'><a href='' className='text-dark text-decoration-none fw-light'>Privacy Policy</a></p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <p className='mt-4'><a href='' className='text-dark text-decoration-none fw-light'>contact@tsquaredc.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-3'>
                <div className='row'>
                    <div className='col-5 col-lg-6 col-md-6 d-flex align-items-center'>
                        <p className='fw-light'>© {new Date().getFullYear()} T²C Inc.</p>
                    </div>
                    <div className='col-7 col-lg-6 col-md-6 d-flex justify-content-end'>
                        <div className='row '>
                            <div className='col-4 col-lg-3 col-md-3 d-flex my-auto border-radius-10'><BiLogoFacebookSquare size='110px' /></div>
                            <div className='col-4 col-lg-3 col-md-3 d-flex my-auto'> <FaInstagramSquare size='40px' /></div>
                            <div className='col-4 col-lg-3 col-md-3 d-flex my-auto'><BsLinkedin size='38px' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;