import React, { useState } from 'react';
import t2clogo from '../../assests/t2clogo.svg'
import arrow from '../../assests/arrow.svg'

function BookDemo() {
    const [values, setvalue] = useState({
        name: null,
        email: '',
        phonenumber: '',
        organization: ''
    })
    const inputvalues = (e) => {
        const { name, value } = e.target;
        console.log(name);
        setvalue({ ...values, [name]: value })
    }
    return (
        <>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <section>
                            <div className="modal fade" id="Modal" tabindex="-1" role="dialog" data-bs-keyboard="false" data-bs-target="#staticBackdrop">
                                <div className="modal-dialog modal-md" >

                                    <div className="modal-content ">
                                        <div className='row'>
                                        </div>
                                        <div className='container p-5 bg-modal'>
                                            <div className='row'>
                                                <div className='col-9 col-lg-10'>
                                                    <img src={t2clogo} className='img-fluid' alt='t2clogo'/>
                                                </div>
                                                <div className='col-3 col-lg-2'>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                            </div>
                                                
                                            <section>
                                                <form action="">
                                                    <div className='row'>
                                                        <div className='col-12 mt-5'>
                                                            <div className="form-group">
                                                                <input type='text' placeholder='Home' name='name' className="form-control border-0" id='input1' required />
                                                                <div className='inputborder' ></div>
                                                            </div>
                                                        </div>
                                                        <div className='col-12 mt-5'>
                                                            <div className="form-group"> <input type='email' name='email' placeholder='Expertise' className="form-control border-0 " id='input1' required />
                                                                <div className='inputborder'></div>
                                                            </div>
                                                        </div>
                                                        <div className='col-12 mt-5'>
                                                            <div className="form-group"><input type='number' name='number' placeholder='Insight' className="form-control border-0 " id='input1' required />
                                                                <div className='inputborder' ></div>
                                                            </div>
                                                        </div>
                                                        <div className='col-12 mt-5'>
                                                            <div className="form-group"><input type='text' name='organization' placeholder='About Us' className="form-control border-0 input" id='input1' required />
                                                                <div className='inputborder' ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row mt-5'>
                                                        <div className='col-12 d-flex justify-content-center'>
                                                            <button className='btn  rounded-5 fw-bold  bg-dark text-light' type='submit'>Get in Touch <img src={arrow} className='img-fluid' alt='arrow' width='12%'/></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div >
                </div >
            </div >
        </>
    )
}

export default BookDemo