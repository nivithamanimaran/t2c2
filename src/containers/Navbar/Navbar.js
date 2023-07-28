import React, { useState, useEffect } from 'react';
import t2clogo from '../../assests/t2clogo.svg'
import arrow from '../../assests/arrow.svg'
import { HiOutlineMinus } from 'react-icons/hi'
import Contactus from '../Contactus/Contactus';
import { useNavigate } from "react-router-dom";

function Navbar(props) {
    const [line, setline] = useState();
    console.log(line);
    useEffect(() => {

        setline(props.page)
    }, [])
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container pt-lg-3 ">
                    <a className="navbar-brand" href="/">
                        <img src={t2clogo} className='img-fluid d-none d-sm-none d-md-block d-lg-block' alt='Kennovatelogo' href='../Home' width='130px' />
                        <img src={t2clogo} className='img-fluid d-block d-sm-block d-md-none d-lg-none' alt='Kennovatelogo' href='../Home' width='80px' />
                    </a>
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto gap-lg-5">
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link text-dark " href='/' aria-current="page" id='navitem'>{line === 1 ? <p className='navmenucolor navbar-font m-0'><HiOutlineMinus /> Home</p> : <p className='navbar-font m-0'>Home</p>}</a>
                            </li>
                            <hr className='d-block d-sm-block d-md-none d-lg-none' />
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link text-dark" href='../Expertise' aria-current="page" id='navitem'>{line === 2 ? <p className='navmenucolor navbar-font m-0'><HiOutlineMinus /> Expertise</p> : <p className='navbar-font m-0'>Expertise</p>}</a>
                            </li>
                            <hr className='d-block d-sm-block d-md-none d-lg-none' />
                            {/* <li className="nav-item">
                                <a className="nav-link text-dark" href='/' aria-current="page" id='navitem'>{line===3?<p className='navmenucolor'><HiOutlineMinus/> Services</p>:<p>Services</p>}</a>
                            </li> */}
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link text-dark" href='../Aboutus' aria-current="page" id='navitem'>{line === 3 ? <p className='navmenucolor navbar-font m-0'><HiOutlineMinus /> About Us</p> : <p className='navbar-font m-0'>About Us</p>}</a>
                            </li>
                            <hr className='d-block d-sm-block d-md-none d-lg-none' />
                            <li className="nav-item d-flex align-items-center ">
                                <button className='btn btn-dark rounded-5 border border-0 text-light d-none d-sm-none d-md-block d-lg-block' onClick={()=>{ navigate("../Contactus");}}>Get in Touch <img src={arrow} alt='arrow' width='10%' /></button>
                                <button className='btn btn-dark rounded-5 border border-0 text-light col-12 d-block d-sm-block d-md-none d-lg-none' onClick={()=>{ navigate("../Contactus");}}>Get in Touch <img src={arrow} alt='arrow' width='5%' /></button>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            <div >
                <hr className='m-0' />
            </div>
        </>
    );
}

export default Navbar;
