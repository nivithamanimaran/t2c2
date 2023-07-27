import React from 'react';
import contactuscover from '../../assests/contactus/contactuscover.png'
import expert from '../../assests/contactus/expert.png'
import map from '../../assests/contactus/map.png'
import Navbar from '../Navbar/Navbar';
import contactusmob from '../../assests/contactus/contactusmob.png'

function Contactus() {
    return (
        <>
            <Navbar />
            <div className='container-fluid m-0 p-0'>
                <div className='row'>
                    <div className='col-10 position-absolute p-5 mt-lg-5  d-none d-sm-none d-md-block  d-lg-block headalign2'>
                        <p className='h4 text-light mt-lg-3 pt-lg-3 pt-3 mt-3 '><b>Get in Touch</b></p>
                    </div>
                </div>
                <img src={contactuscover} className='img-fluid d-none d-sm-none d-md-block d-lg-block' alt='contactuscover' />
                <img src={contactusmob} className='img-fluid d-block d-sm-block d-md-none d-lg-none' alt='contactuscover' />
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12 col-lg-6 mt-lg-5 pt-lg-5'>
                        <h2>
                            Talk to Our Product Expert
                        </h2>
                        <p className='fs-6 mt-lg-3'>
                            Understand, guide, implement. That’s what our IT experts do best, and they’re standing by to create your tailor-made solution!
                        </p>
                        <img src={expert} className='img-fluid mt-lg-3' alt='expert' />
                        <p className='fs-6 mt-lg-5'>
                            That’s what our IT experts do best, and they’re standing by to create your tailor-made solution!Understand, guide, implement. That’s what our IT experts do best, and they’re standing by to create your tailor-made<br/> solution!
                        </p>
                    </div>
                    <div className='col-12 col-lg-6 mt-lg-5 pt-lg-5'>
                        <form>
                            <input placeholder='Full Name' className="form-control inputcolor h-100 d-inline-block"/>
                            <input placeholder='Email Address' className="form-control inputcolor h-100 mt-lg-5"/>   
                            <input placeholder='Phone Number' className="form-control inputcolor h-100 mt-lg-5"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contactus;
