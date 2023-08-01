import React from 'react';
import Navbar from '../Navbar/Navbar'
import industryhome from '../../assests/industries/industryhome.png'
import industryhomemob from '../../assests/industries/industryhomemob.png'
import { HiOutlineMinus } from 'react-icons/hi'
import market from '../../assests/industries/market.svg'
import ready from '../../assests/industries/ready.svg'
import effective from '../../assests/industries/effective.svg'
import producticon from '../../assests/industries/producticon.svg'
import product from '../../assests/industries/product and developement.png'
import mobile from '../../assests/industries/mobile.svg'
import ecommerce from '../../assests/industries/ecommerce.svg'
import crm from '../../assests/industries/crm.svg'
import php from '../../assests/industries/icon-php.svg'
import dotnet from '../../assests/industries/icon-dotnet.svg'
import phython from '../../assests/industries/icon-phython.svg'
import js from '../../assests/industries/icon-js.svg'
import android from '../../assests/industries/icon-android.svg'
import apple from '../../assests/industries/icon-apple.svg'
import sales from '../../assests/industries/icon-sales.svg'
import tripple from '../../assests/industries/icon-tripple.svg'
import wing from '../../assests/industries/icon-wing.png'
import adobe from '../../assests/industries/icon-adobe.svg'
import b9 from '../../assests/industries/icon-b9.png'
import shopify from '../../assests/industries/icon-shopify.svg'
import woo from '../../assests/industries/icon-woo.svg'
import experience from '../../assests/industries/experience.svg'
import experiencedesign from '../../assests/industries/experience design.png'
import ui from '../../assests/industries/icon-ui.svg'
import jira from '../../assests/industries/icon-jira.svg'
import figma from '../../assests/industries/icon-figma.svg'
import sketch from '../../assests/industries/icon-sketch.svg'
import smiley from '../../assests/industries/icon-smiley.svg'
import u from '../../assests/industries/icon-u.svg'
import pc from '../../assests/industries/icon-pc.svg'
import message from '../../assests/industries/icon-message.svg'
import bracket from '../../assests/industries/icon-brackets.svg'
import custom from '../../assests/industries/custom.png'
import code from '../../assests/industries/icon-code.svg'
import group from '../../assests/industries/icon-group.svg'
import engineer from '../../assests/industries/engineer.svg'
import engineering from '../../assests/industries/engineering.png'
import clouddownload from '../../assests/industries/icon-clouddownload.svg'
import exam from '../../assests/industries/icon-exam.svg'
import aws from '../../assests/industries/icon-aws.svg'
import cloud from '../../assests/industries/icon-cloud.svg'
import ai from '../../assests/industries/icon-ai.svg'
import analtics from '../../assests/industries/ai&analtics.png'
import artificial from '../../assests/industries/icon-artificial.svg'
import database from '../../assests//industries/icon-database.svg'
import solution from '../../assests/industries/icon-solution.svg'
import plugin from '../../assests/industries/icon-plugin.svg'
import book from '../../assests/industries/icon-book.svg'
import leaf from '../../assests/industries/icon-leaf.svg'
import mysql from '../../assests/industries/icon-mysql.svg'
import productmob from '../../assests/industries/productmob.png'
import Footer from '../Footer/Footer'

function Expertise() {
    return (
        <>
            <Navbar page={2} />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col d-flex justify-content-center mt-lg-5 mt-3 pt-lg-5 pt-5 position-absolute'>
                        <p className='h2 text-light mt-lg-5 pt-lg-5 pt-3 mt-3 text-color d-none d-sm-none d-md-block d-lg-block text-expertise'><b>Expertise</b></p>
                        <p className='h2 text-light mt-lg-5 pt-lg-5 pt-3 mt-3 text-colormob d-block d-sm-block d-md-none d-lg-none'><b>Expertise</b></p>
                    </div>
                    <div className='col p-0'>
                        <img src={industryhome} alt='industryhome' className='col-12 img-fluid d-none d-sm-none d-lg-block d-md-block' />
                        <img src={industryhomemob} alt='industryhome' className='col-12 img-fluid d-block d-sm-block d-lg-none d-md-none' />
                    </div>
                </div>
            </div>
            <div className='bgcolor pb-lg-5 mb-lg-5'>
                <div className='container pb-lg-5'>
                    <div className='row py-5'>
                        <div className='col-12 col-lg-6'>
                            <p className=' text-light fw-light m-0'><HiOutlineMinus />How we help you</p>
                            <p className='h1 text-light textcolor  d-none d-sm-none d-md-block d-lg-block'><b>Offerings</b></p>
                            <p className='h1 text-light textcolormob d-block d-sm-block d-md-none d-lg-none'><b>Offerings</b></p>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='row'>
                                <div className='col-3 d-none d-sm-none d-md-none d-lg-flex justify-content-end'>
                                    <div className="vr " style={{ 'color': 'rgba(50, 197, 224, 1)', border: 'solid' }}></div>
                                </div>
                                <div className='col-12 col-lg-9'>
                                    <p className='text-light fw-light m-0'>Bring your idea to life with the guidance of experienced,
                                        from inception to a minimum viable product.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row d-none d-sm-none d-md-none d-lg-flex justify-content-center p-lg-5 p-md-5'>
                        <div className='col-12 position-absolute'>
                            <div className='row d-flex justify-content-center gap-5'>
                                {/* <div className='col-3 '>
                                    <div className="card mt-5 mt-lg-0 border border-2 rounded-0">
                                        <div className="card-body cardcolor p-4 ">
                                            <div className='row'>
                                                <div className='col-8'>
                                                    <p className=''><b>Speed to Market</b></p>
                                                </div>
                                                <div className='col-4'>
                                                    <img src={market} className='img-fluid' alt='market' width='400px' />
                                                </div>
                                            </div>
                                            <p className="card-text fw-light">We coordinate one-on-one mentoring by matching individuals with complementary cognitive profiles to facilitate equity of resources and create individuals with critical acumen.</p>
                                        </div>
                                    </div>
                                </div> */}
                                <div className='col-3'>
                                    <div className="card mt-5 mt-lg-0 border border-1 rounded-0 Offeringscard">
                                        <div className="card-body cardcolor p-4">
                                            <div className='row'>
                                                <div className='col-8'>
                                                    <p className='h6 mt-lg-2'><b>Speed to Market</b></p>
                                                </div>
                                                <div className='col-4 '>
                                                    <img src={market} className='img-fluid' alt='market' width='400px' />
                                                </div>
                                            </div>
                                            <p className="card-text fw-light">We coordinate one-on-one mentoring by matching individuals with complementary cognitive profiles to facilitate equity of resources and create individuals with critical acumen.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className="card mt-5 mt-lg-0 border border-1 rounded-0 Offeringscard">
                                        <div className="card-body cardcolor p-4">
                                            <div className='row'>
                                                <div className='col-8'>
                                                    <p className='h6 mt-lg-2'><b>Future Ready</b></p>
                                                </div>
                                                <div className='col-4 '>
                                                    <img src={ready} className='img-fluid' alt='market' width='400px' />
                                                </div>
                                            </div>
                                            <p className="card-text fw-light">We coordinate one-on-one mentoring by matching individuals with complementary cognitive profiles to facilitate equity of resources and create individuals with critical acumen.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className="card mt-5 mt-lg-0 border border-1 rounded-0 Offeringscard" >
                                        <div className="card-body cardcolor p-4">
                                            <div className='row'>
                                                <div className='col-8'>
                                                    <p className='h6 mt-lg-2'><b>Cost Effective</b></p>
                                                </div>
                                                <div className='col-4 '>
                                                    <img src={effective} className='img-fluid' alt='market' width='400px' />
                                                </div>
                                            </div>
                                            <p className="card-text fw-light">We coordinate one-on-one mentoring by matching individuals with complementary cognitive profiles to facilitate equity of resources and create individuals with critical acumen.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row d-flex d-sm-flex d-md-flex d-lg-none justify-content-center pb-5'>
                        <div className='col-10'>
                            <div className='row d-flex justify-content-center gap-5'>
                                <div className='col-12 '>
                                    <div className="card mt-5 mt-lg-0 border border-2 rounded-0">
                                        <div className="card-body cardcolor p-4 ">
                                            <div className='row'>
                                                <div className='col-8'>
                                                    <p className='mt-lg-3'><b>Speed to Market</b></p>
                                                </div>
                                                <div className='col-4'>
                                                    <img src={market} className='img-fluid' alt='market' width='400px' />
                                                </div>
                                            </div>
                                            <p className="card-text fw-light">We coordinate one-on-one mentoring by matching individuals with complementary cognitive profiles to facilitate equity of resources and create individuals with critical acumen.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className="card mt-5 mt-lg-0 border border-2 rounded-0">
                                        <div className="card-body cardcolor p-4">
                                            <div className='row'>
                                                <div className='col-8'>
                                                    <p className='h6 mt-lg-3 '><b>Future Ready</b></p>
                                                </div>
                                                <div className='col-4 '>
                                                    <img src={ready} className='img-fluid' alt='market' width='400px' />
                                                </div>
                                            </div>
                                            <p className="card-text fw-light mb-5">We coordinate one-on-one mentoring by matching individuals with complementary cognitive profiles to facilitate equity of resources and create individuals with critical acumen.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className="card mt-5 mt-lg-0 border border-2 rounded-0" >
                                        <div className="card-body cardcolor p-4">
                                            <div className='row'>
                                                <div className='col-8'>
                                                    <p className='h6 mt-lg-3'><b>Cost Effective</b></p>
                                                </div>
                                                <div className='col-4 '>
                                                    <img src={effective} className='img-fluid' alt='market' width='400px' />
                                                </div>
                                            </div>
                                            <p className="card-text fw-light">We coordinate one-on-one mentoring by matching individuals with complementary cognitive profiles to facilitate equity of resources and create individuals with critical acumen.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <br />
            <br />

            <div className='container mt-lg-5  pt-lg-5'>
                <div className='row mt-lg-5 pt-lg-5'>
                    <hr className='d-none d-sm-none d-md-block d-lg-block' />
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 col-lg-5'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-2 col-md-2 col-lg-2'>
                                <img src={producticon} className='img-fluid d-none d-sm-none d-md-block d-lg-block' alt='producticon' width='50%' />
                                <img src={producticon} className='img-fluid d-block d-sm-block d-md-none d-lg-none' alt='producticon' width='80%' />
                            </div>
                            <div className='col-10 col-md-10 col-lg-10 d-flex align-items-center'>
                                <p className='h4'>Product & App Development</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-7 col-lg-7'>
                        <p className='mt-lg-0 mt-3'>
                            Your one-stop destination for innovative web and mobile app development services, designed to elevate your online presence and drive growth. Our team of experienced developers and creative designers collaborate with you.
                        </p>
                        <hr className='mt-lg-5 d-none d-sm-none d-md-block d-lg-block' />
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row py-lg-5 py-md-5'>
                    <div className='col-12  col-lg-5 py-lg-5 py-md-5 '>
                        <img src={product} className='img-fluid d-none d-sm-none d-md-block d-lg-block' alt='product and developement' />
                        <img src={productmob} className='img-fluid d-block d-sm-block d-md-none d-lg-none' alt='product and developement'/>
                    </div>
                    <div className='col-12  col-lg-7 px-lg-5 px-md-5 py-lg-0 py-md-0 py-5'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-6 px-lg-5 px-md-5'>
                                <img src={mobile} className='img-fluid  icon-size' alt='mobile' width='20%' />
                                <br />
                                <br />
                                <p className='h5'>Product Development - Mobile & Web</p>
                                <br />
                                <p className=''>Your one-stop destination for innovative web and mobile app</p>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 px-lg-5 px-md-5 py-lg-0 py-md-0 py-5'>
                                <img src={ecommerce} className='img-fluid icon-size' alt='ecommerce' width='20%' />
                                <br />
                                <br />
                                <p className='h5'>Ecommerce Development</p>
                                <br />
                                <p className=''>A user-centric approach is at the heart of every interaction design and experience we create. Our process starts with consumer research and ends with serving customer delight.</p>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 px-lg-5 px-md-5'>
                                <img src={crm} className='img-fluid icon-size' alt='ecommerce' width='20%' />
                                <br />
                                <br />
                                <p className='h5'>CRM Development</p>
                                <p className=''>Focused on crafting tailor-made CRM systems that foster strong</p>
                            </div>
                        </div>
                        <div className='row py-lg-3 py-md-3 py-5'>
                            <div className='col-2 col-lg-1'>
                                <img src={php} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1'>
                                <img src={dotnet} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1'>
                                <img src={phython} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1'>
                                <img src={js} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1'>
                                <img src={android} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1'>
                                <img src={apple} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1 d-none d-sm-none d-md-block d-lg-block'>
                                <img src={sales} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1 d-none d-sm-none d-md-block d-lg-block'>
                                <img src={tripple} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1 d-none d-sm-none d-md-block d-lg-block'>
                                <img src={wing} alt='' className='img-fluid' />
                            </div>
                        </div>
                        <div className='row '>
                            <div className='col-2 col-lg-1'>
                                <img src={adobe} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1'>
                                <img src={b9} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1'>
                                <img src={shopify} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1'>
                                <img src={woo} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1 d-block d-sm-block d-md-none d-lg-none'>
                                <img src={tripple} alt='' className='img-fluid ' />
                            </div>
                            <div className='col-2 col-lg-1 d-block d-sm-block d-md-none d-lg-none'>
                                <img src={wing} alt='' className='img-fluid' />
                            </div>
                            <div className='col-2 col-lg-1 d-block d-sm-block d-md-none d-lg-none'>
                                <img src={sales} alt='' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <hr className='mt-lg-5' />
            </div>
            <div className='container mt-5'>
                <div className='row px-lg-3'>
                    <div className='col-2 col-lg-1'>
                        <img src={experience} className='img-fluid d-none d-sm-none d-md-block d-lg-block' alt='producticon' width='50%' />
                        <img src={experience} className='img-fluid d-block d-sm-block d-md-none d-lg-none' alt='producticon' width='80%' />
                    </div>
                    <div className='col-10 col-lg-6 d-flex align-items-center'>
                        <p className='h4'>Experience Design & Modernization</p>
                    </div>
                </div>
            </div >
            <div className='container mt-5'>
                <div className='row '>
                    <div className='col-12 col-lg-6'>
                        <p className='fs-6'>
                            We provide comprehensive resources, expert insights, and practical guidance to help you navigate the ever-evolving world of DevOps and cloud computing.
                        </p>
                        <hr className='mt-lg-5 d-none d-sm-none d-md-block d-lg-block' />
                        <div className='col-12 col-lg-6 p-lg-5 d-block d-sm-block d-md-block d-lg-none'>
                            <img src={experiencedesign} className='img-fluid' alt='product and developement' />
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-6'>
                                <br />
                                <img src={ui} className='img-fluid icon-size' alt='ecommerce' width='20%' />
                                <br />
                                <br />
                                <p className='h4'>UI / UX</p>
                                <br />
                                <p className='fs-6'>A user-centric approach is at the heart of every interaction design and experience we create. </p>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6'>
                                <br />
                                <img src={jira} className='img-fluid icon-size' alt='ecommerce' width='20%' />
                                <br />
                                <br />
                                <p className='h4'>Application Modernization</p>
                                <p className='fs-6'>Revitalize your digital assets and ensure their relevance in today's </p>
                            </div>
                            <div className='col-12 mt-lg-5 mt-3'>
                                <div className='row'>
                                    <div className='col-2 col-lg-1'>
                                        <img src={figma} alt='' className='img-fluid' />
                                    </div>
                                    <div className='col-2 col-lg-1'>
                                        <img src={sketch} alt='' className='img-fluid' />
                                    </div>
                                    <div className='col-2 col-lg-1'>
                                        <img src={smiley} alt='' className='img-fluid' />
                                    </div>
                                    <div className='col-2 col-lg-1'>
                                        <img src={u} alt='' className='img-fluid' />
                                    </div>
                                    <div className='col-2 col-lg-1'>
                                        <img src={pc} alt='' className='img-fluid' />
                                    </div>
                                    <div className='col-2 col-lg-1'>
                                        <img src={message} alt='' className='img-fluid' />
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6  d-none d-sm-none d-md-none d-lg-block'>
                        <img src={experiencedesign} className='img-fluid' alt='product and developement' />
                    </div>
                </div>
            </div>
            <div className='container'>
                <hr className='mt-lg-5 ' />
            </div>
            <div className='container mt-5'>
                <div className='row px-lg-3'>
                    <div className='col-2 col-lg-1'>
                        <img src={bracket} className='img-fluid d-none d-sm-none d-md-block d-lg-block' alt='producticon' width='50%' />
                        <img src={bracket} className='img-fluid d-block d-sm-block d-md-none d-lg-none' alt='producticon' width='80%' />
                    </div>
                    <div className='col-10 col-lg-4'>
                        <p className='h4'>Custom Development</p>
                    </div>

                </div>
            </div >
            <div className='container mt-5'>
                <div className='row pe-lg-5'>
                    <div className='col-12 col-lg-5 px-5'>
                        <img src={custom} className='img-fluid' alt='product and developement' />
                    </div>
                    <div className='col-12 col-lg-7'>
                        <div className='row'>
                            <div className='col-12 col-lg-12 pt-5 pt-lg-0'>
                                <p className='fs-6'>
                                    We provide comprehensive resources, expert insights, and practical guidance to help you navigate the ever-evolving world of DevOps and cloud computing. Discover best practices, optimize your workflows, and supercharge.
                                </p>
                                <hr className='mt-lg-4 d-none d-sm-none d-md-block d-lg-block' />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-6'>
                                <img src={code} className='img-fluid icon-size' alt='mobile' width='20%' />
                                <br />
                                <br />
                                <p className='h4'>Custom Software Development</p>
                                <br />
                                <p className='fs-6'>Our team of seasoned developers, creative designers, and business</p>
                            </div>
                            <br />
                            <div className='col-12 col-md-6 col-lg-6'>
                                <img src={group} className='img-fluid icon-size' alt='ecommerce' width='20%' />
                                <br />
                                <br />
                                <p className='h4'>Dedicated Development Team</p>
                                <br />
                                <p className='fs-6'>Elevating your business with a customized tech powerhouse</p>
                            </div>
                            {/* <div className='col-12 col-md-6 col-lg-6'>
                                <img src={crm} className='img-fluid' alt='ecommerce' />
                                <br />
                                <br />
                                <p className='h4'><b>CRM Development</b></p>
                                <p className='fs-6'>Focused on crafting tailor-made CRM systems that foster strong</p>
                            </div> */}
                            <hr className=' d-none d-sm-none d-md-block d-lg-block' />

                            <div className='row'>
                                <div className='col'>
                                    <ul>
                                        <div className='row'>
                                            <li className='col-6 col-lg-4 col-md-4'><i>Digital Experience Platform</i></li>
                                            <li className='col-6 col-lg-4 col-md-4'><i>Experience Design</i></li>
                                            <li className='col-6 col-lg-4 col-md-4'><i>Offshore Development</i></li>
                                            <li className='col-6 col-lg-4 col-md-4'><i>Augment Existing Capacity</i></li>
                                            <li className='col-6 col-lg-4 col-md-4'><i>Product Development</i></li>
                                            <li className='col-6 col-lg-4 col-md-4'><i>Mobile App Consulting</i></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <hr className='mt-lg-5' />
            </div>
            <div className='container my-lg-5'>
                <div className='row'>
                    <div className='col-2 col-lg-1'>
                        <img src={engineer} className='img-fluid d-none d-sm-none d-md-block d-lg-block' alt='engineering and testing' width='50%' />
                        <img src={engineer} className='img-fluid d-block d-sm-block d-md-none d-lg-none' alt='engineering and testing' width='80%' />
                    </div>
                    <div className='col-10 col-lg-11'>
                        <p className='h4'>Engineering & Testing</p>
                    </div>
                </div>
                <div className='row mt-lg-2 py-lg-5'>
                    <div className='col-12 col-lg-7'>
                        <div className='row'>
                            <div className='col'>
                                <p className=''>We provide comprehensive resources, expert insights, and practical guidance to help you navigate the ever-evolving world of DevOps and cloud computing. Discover best practices, optimize your workflows, and supercharge.
                                </p>
                                <hr className='mt-lg-5 d-none d-sm-none d-md-block d-lg-block' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 d-block d-sm-block d-md-block d-lg-none'>
                                <img src={engineering} className='img-fluid ' alt='experience design' />
                            </div>
                        </div>
                        <div className='row mt-lg-5 mt-5'>
                            <div className='col-12 col-md-12 col-lg-6'>
                                <img src={clouddownload} className='img-fluid icon-size' alt='ui' width='20%' />
                                <br /> <br />
                                <p className='h4'>Dev Ops & Cloud</p>
                                <br />
                                <p className='fs-6'>
                                    A user-centric approach is at the heart of every interaction design and experience we create.
                                </p>
                            </div>
                            <div className='col-12 col-md-12 col-lg-6'>
                                <img src={exam} className='img-fluid icon-size' alt='jira' width='20%' />
                                <br /> <br />
                                <p className='h4'>Software QA & Testing</p>
                                <br />

                                <p className='fs-6'>your one-stop destination for innovative web and mobile app </p>
                            </div>
                        </div>
                        <div className='row mt-lg-5'>
                            <div className='col-2 col-lg-1'><img src={aws} className='img-fluid' alt='aws' /></div>
                            <div className='col-2 col-lg-1'><img src={cloud} className='img-fluid' alt='cloud' /></div>
                            <div className='col-2 col-lg-1'><img src={pc} className='img-fluid' alt='pc' /></div>
                        </div>
                    </div>
                    <div className='col-5 d-none d-sm-none d-md-none d-lg-block'>
                        <img src={engineering} className='img-fluid ' alt='experience design' />
                    </div>
                </div>
            </div>
            <div className='container'>
                <hr className='' />
            </div>
            <div className='container my-lg-5'>
                <div className='row'>
                    <div className='col-2 col-lg-1'>
                        <img src={ai} className='img-fluid d-none d-sm-none d-md-block d-lg-block' alt='experience' width='60%' />
                        <img src={ai} className='img-fluid d-block d-sm-block d-md-none d-lg-none' alt='experience' width='90%' />
                    </div>
                    <div className='col-10 col-lg-11'>
                        <p className='h4'>AI & Analytics</p>
                    </div>
                </div>
                <div className='row mt-lg-5'>

                    <div className='col-12 col-lg-5'>
                        <img src={analtics} className='img-fluid mt-lg-3' alt='custom developement' />
                    </div>
                    <div className='col-12 col-lg-7 px-lg-5 mt-3'>
                        <div className='row'>
                            <div className='col'>
                                <p className='fs-6'>We provide comprehensive resources, expert insights, and practical guidance to help you navigate the ever-evolving world of DevOps and cloud computing. Discover best practices, optimize your workflows, and supercharge.
                                </p>
                                <hr className='mt-lg-4 d-none d-sm-none d-md-block d-lg-block' />
                            </div>
                        </div>
                        <div className='row mt-lg-3'>
                            <div className='col-12 col-md-12 col-lg-6'>
                                <img src={artificial} className='img-fluid icon-size' alt='code' width='20%' />
                                <br /><br />
                                <p className='h4'>Advanced AI</p>
                                <p className='fs-6'>
                                    A user-centric approach is at the heart of every interaction design and experience we create.
                                </p>
                            </div>
                            <div className='col-12 col-md-12 col-lg-6'>
                                <img src={database} className='img-fluid mt-lg-3 icon-size' alt='group' width='20%' />
                                <br />
                                <p className='h4 mt-lg-2 mt-2'>Database Dev & Analytics</p>

                                <p className='fs-6'>your one-stop destination for innovative web and mobile app</p>
                            </div>
                        </div>
                        <div className='row mt-lg-5'>
                            <div className='col-2 col-lg-1'><img src={solution} className='img-fluid' alt='aws' /></div>
                            <div className='col-2 col-lg-1'><img src={plugin} className='img-fluid' alt='cloud' /></div>
                            <div className='col-2 col-lg-1'><img src={book} className='img-fluid' alt='pc' /></div>
                            <div className='col-2 col-lg-1'><img src={leaf} className='img-fluid' alt='pc' /></div>
                            <div className='col-2 col-lg-1'><img src={mysql} className='img-fluid' alt='pc' /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mb-lg-5'>
                <div className='row my-lg-5'>
                    <div className='col-12 mb-lg-5'>
                        <ul>
                            <div className='row'>
                                <li className='col-6 col-lg-2'><i>Data Science</i></li>
                                <li className='col-6 col-lg-2'><i>Text analytics </i></li>
                                <li className='col-6 col-lg-2'><i>Computer Vision</i></li>
                                <li className='col-6 col-lg-2'><i>Predictive analysis</i></li>
                                <div className='col-6 col-lg-2 d-none d-sm-none d-md-none d-lg-block'>
                                    <li className=' '><i>Digital Transformation </i></li>
                                </div>

                            </div>
                            <div className='row'>
                               
                                <li className='col-6 col-lg-3'><i>Recommendation Engines</i></li>
                                <div className='col-6 col-lg-2 d-block d-sm-block d-md-block d-lg-none'>
                                    <li className=' '><i>Digital Transformation </i></li>
                                </div>
                                <li className='col-6 col-lg-2'><i>Customer analytics</i></li>
                                <li className='col-6 col-lg-3'><i>Offshore development services</i></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-lg-5'>
                <Footer />
            </div>

        </>
    );
}

export default Expertise;