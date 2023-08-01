import React from 'react';
import contactuscover from '../../assests/contactus/contactuscover.png'
import expert from '../../assests/contactus/expert.png'
import map from '../../assests/contactus/map.png'
import Navbar from '../Navbar/Navbar';
import contactusmob from '../../assests/contactus/contactusmob.png'
import Footer from '../Footer/Footer';
import mapmob from '../../assests/contactus/mapmob.png'
import arrow from '../../assests/arrow.svg'

function Contactus() {
    return (
        <>
            <Navbar />
            <div className='container-fluid m-0 p-0'>
                <div className='row'>
                    <div className='col d-flex justify-content-center mt-lg-5 mt-3 pt-lg-5 pt-5 position-absolute'>
                        <p className='h2 text-light mt-lg-5 pt-lg-5 pt-3 mt-3 getintouchline d-none d-sm-none d-md-block d-lg-block'><b>Get in Touch</b></p>
                        <p className='h2 text-light mt-lg-5 pt-lg-5 pt-2 mt-2 getintouchline d-block d-sm-block d-md-none d-lg-none'><b>Get in Touch</b></p>
                    </div>
                </div>
                <img src={contactuscover} className='img-fluid col-12 d-none d-sm-none d-md-block d-lg-block' alt='contactuscover' />
                <img src={contactusmob} className='img-fluid col-12 d-block d-sm-block d-md-none d-lg-none' alt='contactuscover' />
            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-12 col-lg-6 p-lg-5 p-md-4 p-3'>
                        <p className='h2 ourproductexperttext'>
                            Talk to Our Product Expert
                        </p>
                        <p className='fs-6 mt-lg-3'>
                            Understand, guide, implement. That’s what our IT experts do best, and they’re standing by to create your tailor-made solution!
                        </p>
                        <img src={expert} className='img-fluid mt-lg-3' alt='expert' />
                        <p className='fs-6 mt-lg-5 mt-3'>
                            That’s what our IT experts do best, and they’re standing by to create your tailor-made solution! Understand, guide, implement. That’s what our IT experts do best, and they’re standing by to create your tailor-made solution!
                        </p>
                    </div>
                    <div className='col-12 col-lg-6 p-lg-5 p-md-4 p-3'>
                        <form>
                            <input type='text' placeholder='Full Name' className="form-control inputcolor border-0 rounded-0 mt-3 mt-lg-0" />
                            <input type='email' placeholder='Email Address' className="form-control inputcolor border-0 rounded-0  mt-lg-4 mt-3" />   
                            <input  type='number' placeholder='Phone Number' className="form-control inputcolor border-0 rounded-0  mt-lg-4 mt-3" />
                            <textarea type='text' placeholder='How we can help you?' className='form-control border-0 rounded-0 textareacolor mt-lg-4 mt-3' rows='5'/>
                        <button type='submit' className='btn btn-dark rounded-5 mt-lg-4 mt-4 px-lg-3 px-5'>Submit <img src={arrow}  className='img-fluid' alt='arrow' width='13%'/></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='container-fluid p-0 mt-5'>
                <img src={map} className='img-fluid d-none d-sm-none d-md-block d-lg-block col-12' alt='map'/>
                <img src={mapmob} className='img-fluid d-block d-sm-block d-md-none d-lg-none' alt='mapmob'/>
            </div>
            <div className='container-fluid p-0'>
                <Footer/>
            </div>
        </>
    );
}

export default Contactus;
