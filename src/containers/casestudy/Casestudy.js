import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import casestudycover from '../../assests/case studies/casestudiescover.png'
import casestudymob from '../../assests/case studies/casestudiesmob.png'
import productsupport from '../../assests/case studies/productsupport.png'
import ken42product from '../../assests/case studies/ken42product.png'
import daqfyproduct from '../../assests/case studies/daqfyproduct.png'
import daqfyproduct2 from '../../assests/case studies/daqfyproduct2.png'
import pichainproduct from '../../assests/case studies/pichainproduct.png'
import { HiOutlineMinus } from 'react-icons/hi'
import {  FiArrowDownRight } from 'react-icons/fi'
import Footer from '../Footer/Footer';
import ken42img from '../../assests/Homepage/ken42img.png';
import doqfyimg from '../../assests/Homepage/doqfyimg.png';
import piChainimg from '../../assests/Homepage/piChainimg.png';

function Casestudy() {
    const [pagechange, setPagechange] = useState(1)

    return (
        <>
            <div style={{ overflowX: 'hidden' }}>
                <Navbar />
                <div className='container-fluid p-0 m-0'>
                    <div className='row'>
                        <div className='col d-flex justify-content-center mt-lg-5 mt-3 pt-lg-5 pt-5 position-absolute'>
                            <p className='h2 text-light mt-lg-5 pt-lg-5 pt-3 mt-3 getintouchline d-none d-sm-none d-md-block d-lg-block'><b>Case Study</b></p>
                            <p className='h2 text-light mt-lg-5 pt-lg-5 pt-3 mt-3 getintouchline d-block d-sm-block d-md-none d-lg-none'><b>Case Study</b></p>
                        </div>
                        <div className='col p-0'>
                            <img src={casestudycover} alt='casestudycover' className='col-12 img-fluid d-none d-sm-none d-lg-block d-md-block' />
                            <img src={casestudymob} alt='casestudymob' className='col-12 img-fluid d-block d-sm-block d-lg-none d-md-none' />
                        </div>
                    </div>
                </div>
                <div className='container mt-lg-5'>
                    <div className='row  '>
                        <div className='col-12 col-md-6 col-lg-6'>
                            <p className='fw-light m-0'><HiOutlineMinus className='minus' /> What's new</p>
                            <p className='h2 text-color3 d-none d-sm-none d-md-block d-lg-block headtext2-color'><b>Case Study</b></p>
                            <p className='h2 text-color3mob d-block d-sm-block d-md-none d-lg-none headtextmob-color'><b>Case Study</b></p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6'>
                            <div className='row'>
                                <div className='col-2 d-none d-sm-none d-md-flex d-lg-flex justify-content-end'>
                                    <div className="vr " style={{ 'color': 'rgba(50, 197, 224, 1)', border: 'solid', height: '40px' }}></div>
                                </div>
                                <div className='col-12 col-md-10 col-lg-10'>
                                    <p className='fw-light'>Bring your idea to life with the guidance of experienced,
                                        from inception to a minimum viable product.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container my-3 my-md-4 my-lg-5'>
                    <div>
                        <div className={pagechange === 1 ? 'row' : 'row d-none'}>
                            <div className='col-12 col-md-6 col-lg-6  d-flex py-2  position-relative'>
                                <img src={doqfyimg} className='m-3 img-fluid position-absolute col-2' alt='ken42img' width='80%' />
                                <img src={productsupport} className='img-fluid' alt='productsupport' />
                                <div className='position-absolute bottom-0 p-4'>
                                    <p className='h2 text-light '>Doqfy Product Support</p>
                                    <p className=' text-light '>Why oracle database runs best</p>

                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6'>
                                <div className='row'>
                                    <div className='col-6 p-2 px-3 position-relative'>
                                        <img src={ken42img} className='card m-3 img-fluid position-absolute col-3' alt='ken42img' />
                                        <img src={ken42product} className='img-fluid' alt='ken42product' />
                                        <p className='h3 position-absolute bottom-0 text-light p-3'>Ken42<br />
                                            Product</p>
                                    </div>
                                    <div className='col-6 p-2 px-3 position-relative'>
                                        <img src={piChainimg} className='card m-3 img-fluid position-absolute col-3' alt='piChainimg' />
                                        <img src={pichainproduct} className='img-fluid' alt='ken42product' />
                                        <p className='h3 position-absolute bottom-0 text-light p-3'>Pi Chain<br />
                                            Product</p>
                                    </div>
                                    <div className='col-6 p-2 px-3 position-relative'>
                                        <img src={doqfyimg} className='card m-3 img-fluid position-absolute col-3' alt='ken42img' />
                                        <img src={daqfyproduct} className='img-fluid' alt='ken42product' />
                                        <p className='h3 position-absolute bottom-0 text-light p-3'>Doqfy<br />
                                            Product</p>
                                    </div>
                                    <div className='col-6 p-2 px-3 position-relative'>
                                        <img src={doqfyimg} className='card m-3 img-fluid position-absolute col-3' alt='ken42img' />
                                        <img src={daqfyproduct2} className='img-fluid' alt='ken42product' />
                                        <p className='h3 position-absolute bottom-0  text-light p-3'>Doqfy<br />
                                            Product</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={pagechange === 2 ? 'row' : 'row d-none'}>
                            <div className='col-12 col-md-6 col-lg-6  d-flex py-2  position-relative'>
                                <img src={doqfyimg} className=' m-3 img-fluid position-absolute col-2' alt='ken42img' />
                                <img src={productsupport} className='img-fluid' alt='productsupport' />
                                <div className='position-absolute bottom-0 p-4'>
                                    <p className='h2 text-light '>Doqfy Product Support</p>
                                    <p className=' text-light '>Why oracle database runs best</p>

                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6'>
                                <div className='row'>
                                    <div className='col-6 p-3 position-relative'>
                                        <img src={ken42img} className='card m-3 img-fluid position-absolute col-3' alt='ken42img' />
                                        <img src={ken42product} className='img-fluid' alt='ken42product' />
                                        <p className='h3 position-absolute bottom-0 text-light p-3'>Ken42<br />
                                            Product</p>
                                    </div>
                                    <div className='col-6 p-3 position-relative'>
                                        <img src={piChainimg} className='card m-3 img-fluid position-absolute col-3' alt='piChainimg' />
                                        <img src={pichainproduct} className='img-fluid' alt='ken42product' />
                                        <p className='h3 position-absolute bottom-0 text-light p-3'>Pi Chain<br />
                                            Product</p>
                                    </div>
                                    <div className='col-6 p-3 position-relative'>
                                        <img src={doqfyimg} className='card m-3 img-fluid position-absolute col-3' alt='ken42img' />
                                        <img src={daqfyproduct} className='img-fluid' alt='ken42product' />
                                        <p className='h3 position-absolute bottom-0 text-light p-3'>Doqfy<br />
                                            Product</p>
                                    </div>
                                    <div className='col-6 p-3 position-relative'>
                                        <img src={doqfyimg} className='card m-3 img-fluid position-absolute col-3' alt='ken42img' />
                                        <img src={daqfyproduct2} className='img-fluid' alt='ken42product' />
                                        <p className='h3 position-absolute bottom-0  text-light p-3'>Doqfy<br />
                                            Product</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={pagechange === 3 ? 'row' : 'row d-none'}>
                            <div className='col-12 col-md-6 col-lg-6  d-flex py-2  position-relative'>
                                <img src={doqfyimg} className=' m-3 img-fluid position-absolute col-2' alt='ken42img' />
                                <img src={productsupport} className='img-fluid' alt='productsupport' />
                                <div className='position-absolute bottom-0 p-4'>
                                    <p className='h2 text-light '>Doqfy Product Support</p>
                                    <p className=' text-light '>Why oracle database runs best</p>

                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6'>
                                <div className='row'>
                                    <div className='col-6 p-3 position-relative'>
                                        <img src={ken42img} className='card m-3 img-fluid position-absolute col-3' alt='ken42img' />
                                        <img src={ken42product} className='img-fluid' alt='ken42product' />
                                        <p className='h3 position-absolute bottom-0 text-light p-3'>Ken42<br />
                                            Product</p>
                                    </div>
                                    <div className='col-6 p-3 position-relative'>
                                        <img src={piChainimg} className='card m-3 img-fluid position-absolute col-3' alt='piChainimg' />
                                        <img src={pichainproduct} className='img-fluid' alt='ken42product' />
                                        <p className='h3 position-absolute bottom-0 text-light p-3'>Pi Chain<br />
                                            Product</p>
                                    </div>
                                    <div className='col-6 p-3 position-relative'>
                                        <img src={doqfyimg} className='card m-3 img-fluid position-absolute col-3' alt='ken42img' />
                                        <img src={daqfyproduct} className='img-fluid' alt='ken42product' />
                                        <p className='h3 position-absolute bottom-0 text-light p-3'>Doqfy<br />
                                            Product</p>
                                    </div>
                                    <div className='col-6 p-3 position-relative'>
                                        <img src={doqfyimg} className='card m-3 img-fluid position-absolute col-3' alt='ken42img' />
                                        <img src={daqfyproduct2} className='img-fluid' alt='ken42product' />
                                        <p className='h3 position-absolute bottom-0  text-light p-3'>Doqfy<br />
                                            Product</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row mt-5 '>
                        <div className='col-12 col-md-8 col-lg-8'>
                            <nav aria-label="Page navigation">
                                <ul className="pagination gap-3 border-0">
                                    <li className="page-item ">
                                        <button className={pagechange === 1 ? "page-link border-0 rounded-5 paginationcoloractive" : "page-link border-0 rounded-5 paginationcolor"} onClick={() => { setPagechange(1) }}>1</button>
                                    </li>
                                    <li className="page-item" aria-current="page">
                                        <button className={pagechange === 2 ? "page-link border-0 rounded-5 paginationcoloractive" : "page-link border-0 rounded-5 paginationcolor"} onClick={() => { setPagechange(2) }}>2</button>
                                    </li>
                                    <li className="page-item" aria-current="page">
                                        <button className={pagechange === 3 ? "page-link border-0 rounded-5 paginationcoloractive" : "page-link border-0 rounded-5 paginationcolor"} onClick={() => { setPagechange(3) }}>3</button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 d-none d-sm-none d-md-block d-lg-block'>
                            <div className='row border border-2 rounded-5 p-2 bg-dark text-light'>
                                <div className='col-10'>
                                    Next Page
                                </div>
                                <div className='col-2'>
                                    <FiArrowDownRight size='30' />
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 d-flex d-sm-flex d-md-none d-lg-none justify-content-center '>
                            <div className='row border border-2 rounded-5 p-2 p-lg-3 bg-dark text-light'>
                                <div className='col-10'>
                                    Next Page
                                </div>
                                <div className='col-2'>
                                    <FiArrowDownRight size='30' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='row'>
                    <div className='col-12 col-lg-7'>
                        <p className='text-light position-absolute d-flex'><b>Doqfy Product Support</b></p>
                        <p className='text-light position-absolute d-flex mt-lg-5'><b>Why oracle database runs best</b></p>
                        <img src={productsupport} className='img-fluid d-flex justify-content-end' alt='productsupport' width='80%' />
                    </div>
                    <div className='col-12 col-lg-5 mt-5 mt-lg-0'>
                        <div className='row'>
                            <div className='col-6'>
                                <p className='text-light position-absolute'>
                                    Ken42 Product
                                </p>
                                <img src={ken42product} className='img-fluid d-flex justify-content-start' alt='ken42product' />
                            </div>
                            <div className='col-6'>
                                <p className='text-light position-absolute'>
                                    Pi Chain Product
                                </p>
                                <img src={pichainproduct} className='img-fluid' alt='pichainproduct' />
                            </div>
                        </div>
                        <div className='row mt-5 mt-lg-4'>
                            <div className='col-6'>
                                <p className='text-light position-absolute'>
                                    Doqfy Product
                                </p>
                                <img src={daqfyproduct} className='img-fluid d-flex justify-content-start' alt='daqfyproduct' />
                            </div>
                            <div className='col-6'>
                                <p className='text-light position-absolute'>
                                    Doqfy Product
                                </p>
                                <img src={daqfyproduct2} className='img-fluid' alt='daqfyproduct2' />
                            </div>
                        </div>
                    </div>
                </div> */}
                    {/* <div className='row'>
                    <div className='col'></div>
                    <div className='col-6 d-flex justify-content-center col-lg-2  mt-5'>
                        <button className='btn btn-dark rounded-5 col-12 '>Next Page <FiArrowDownRight /></button>
                    </div>
                </div> */}
                </div>
                <br />
                <Footer />
            </div>
        </>
    );
}

export default Casestudy;
