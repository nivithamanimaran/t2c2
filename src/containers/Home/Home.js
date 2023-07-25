import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import homecover1 from '../../assests/Homepage/homecover1.png'
import arrow3 from '../../assests/Homepage/arrow3.svg'
import { HiOutlineMinus } from 'react-icons/hi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import case1 from '../../assests/Homepage/case1.svg'
import case2 from '../../assests/Homepage/case2.svg'
import k42logo from '../../assests/Homepage/k42logo.svg'
import doqfy from '../../assests/Homepage/daqfy.svg'
import pichain from '../../assests/Homepage/pichainlogo.svg'
import idea from '../../assests/Homepage/idea.svg'
import ellipse from '../../assests/Homepage/ellipse.svg'
import mvp from '../../assests/Homepage/mvp.svg'
import success from '../../assests/Homepage/success.png'
import map from '../../assests/Homepage/map.png'
import whatsnew from '../../assests/Homepage/whatsnew.png'
import news from '../../assests/Homepage/news.png'
import security from '../../assests/Homepage/security.png'
import future from '../../assests/Homepage/future.png'
import arrow2 from '../../assests/arrow2.svg'
import { FiArrowDownLeft, FiArrowDownRight, FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import u2 from '../../assests/Homepage/u2.png';
import ken42img from '../../assests/Homepage/ken42img.png';
import doqfyimg from '../../assests/Homepage/doqfyimg.png';
import piChainimg from '../../assests/Homepage/piChainimg.png';
import ourprocess1 from '../../assests/Homepage/ourprocess1.svg'
import ourprocess2 from '../../assests/Homepage/ourprocess2.svg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import homecovermob from '../../assests/Homepage/homecovermob.png'



function Home() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');
  const[color,setcolor]= useState(1)

  const array = [
    { id: 1, img: u2, text: 'We offer innovative web and mobile app development services to boost your online presence and drive growth. Our experienced team creates custom solutions tailored to your business needs, delivering seamless user experiences for lasting success.' },
    { id: 2, img: u2, text: 'We offer innovative web and mobile app development services to boost your online presence and drive growth. Our experienced team creates custom solutions tailored to your business needs, delivering seamless user experiences for lasting success.' },
    { id: 3, img: u2, text: 'We offer innovative web and mobile app development services to boost your online presence and drive growth. Our experienced team creates custom solutions tailored to your business needs, delivering seamless user experiences for lasting success.' },
    { id: 4, img: u2, text: 'We offer innovative web and mobile app development services to boost your online presence and drive growth. Our experienced team creates custom solutions tailored to your business needs, delivering seamless user experiences for lasting success.' },
    { id: 5, img: u2, text: 'We offer innovative web and mobile app development services to boost your online presence and drive growth. Our experienced team creates custom solutions tailored to your business needs, delivering seamless user experiences for lasting success.' },
    { id: 6, img: u2, text: 'We offer innovative web and mobile app development services to boost your online presence and drive growth. Our experienced team creates custom solutions tailored to your business needs, delivering seamless user experiences for lasting success.' },
    { id: 7, img: u2, text: 'We offer innovative web and mobile app development services to boost your online presence and drive growth. Our experienced team creates custom solutions tailored to your business needs, delivering seamless user experiences for lasting success.' },
    { id: 8, img: u2, text: 'We offer innovative web and mobile app development services to boost your online presence and drive growth. Our experienced team creates custom solutions tailored to your business needs, delivering seamless user experiences for lasting success.' },
    { id: 9, img: u2, text: 'We offer innovative web and mobile app development services to boost your online presence and drive growth. Our experienced team creates custom solutions tailored to your business needs, delivering seamless user experiences for lasting success.' },
    { id: 10, img: u2, text: 'We offer innovative web and mobile app development services to boost your online presence and drive growth. Our experienced team creates custom solutions tailored to your business needs, delivering seamless user experiences for lasting success.' },
    { id: 11, img: u2, text: 'We offer innovative web and mobile app development services to boost your online presence and drive growth. Our experienced team creates custom solutions tailored to your business needs, delivering seamless user experiences for lasting success.' },
  ]

  const options = {
    items: 3,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
  };
  return (
    <>
      <Navbar page={1} />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col p-0'>
            <div id="carouselExampleCaptions" className="carousel slide pb-5 p-md-0 p-lg-0" >
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className='active carouselbuttoncolor' aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='carouselbuttoncolor' aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='carouselbuttoncolor' aria-label="Slide 3"></button>
              </div>
              {/*layer 1*/}
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className='container'>
                    <div className='row position-absolute bottom-50 d-none d-sm-none d-md-block d-lg-block'>
                      <div className='col'>
                        <p className='h1 text-dark fw-bold'>Start Big from <br /><span className='homeheadcolor'>Day One.</span>
                        </p>
                        <button className='btn btn-dark rounded-5'>Learn More<FiArrowUpRight size='30' /></button>
                      </div>
                    </div>
                  </div>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col d-none d-sm-none d-md-block d-lg-block'>
                        <img src={homecover1} alt='homecoverimg' className='img-fluid col-12' />
                      </div>
                      <div className='col d-block d-sm-block d-md-none d-lg-none'>
                        <img src={homecovermob} alt='homecoverimg' className='img-fluid col-12' />
                      </div>
                    </div>
                    <div className='row  bottom-50 d-block d-sm-block d-md-none d-lg-none d-flex text-center'>
                      <div className='col'>
                        <p className='h1 text-dark fw-bold'>Start Big from <br /><span className='homeheadcolor'>Day One.</span>
                        </p>
                        <button className='btn btn-dark rounded-5'>Learn More<FiArrowUpRight size='30' /></button>
                      </div>
                    </div>
                  </div>
                </div>

                {/*layer 2*/}
                <div class="carousel-item ">
                  <div className='container'>
                    <div className='row position-absolute bottom-50 d-none d-sm-none d-md-block d-lg-block'>
                      <div className='col'>
                        <p className='h1 text-dark fw-bold'>Start Big from <br /><span className='homeheadcolor'>Day One.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col d-none d-sm-none d-md-block d-lg-block'>
                        <img src={homecover1} alt='homecoverimg' className='img-fluid col-12' />
                      </div>
                      <div className='col d-block d-sm-block d-md-none d-lg-none'>
                        <img src={homecovermob} alt='homecoverimg' className='img-fluid col-12' />
                      </div>
                    </div>
                  </div>
                  <div className='row  bottom-50 d-block d-sm-block d-md-none d-lg-none d-flex text-center'>
                    <div className='col'>
                      <p className='h1 text-dark fw-bold'>Start Big from <br /><span className='homeheadcolor'>Day One.</span>
                      </p>
                      <button className='btn btn-dark rounded-5'>Learn More<FiArrowUpRight size='30' /></button>
                    </div>
                  </div>
                </div>

                {/*layer 3*/}
                <div class="carousel-item ">
                  <div className='container'>
                    <div className='row position-absolute bottom-50 d-none d-sm-none d-md-block d-lg-block'>
                      <div className='col d-none d-sm-none d-md-block d-lg-block'>
                        <p className='h1 text-dark fw-bold'>Start Big from <br /><span className='homeheadcolor'>Day One.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col d-none d-sm-none d-md-block d-lg-block'>
                        <img src={homecover1} alt='homecoverimg' className='img-fluid col-12' />
                      </div>
                      <div className='col d-block d-sm-block d-md-none d-lg-none'>
                        <img src={homecovermob} alt='homecoverimg' className='img-fluid col-12' />
                      </div>
                    </div>
                  </div>
                  <div className='row  bottom-50 d-block d-sm-block d-md-none d-lg-none d-flex text-center'>
                    <div className='col'>
                      <p className='h1 text-dark fw-bold'>Start Big from <br /><span className='homeheadcolor'>Day One.</span>
                      </p>
                      <button className='btn btn-dark rounded-5'>Learn More<FiArrowUpRight size='30' /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/*Our Process*/}
      <div className='bgcolor mt-5 pb-lg-5'>
        <div className='container pb-lg-5'>
          <div className='row py-5'>
            <div className='col-12 col-md-6 col-lg-6'>
              <p className=' text-light fw-light'><HiOutlineMinus />How we Work</p>
              <p className='h2 text-light textcolor d-none d-sm-none d-md-block d-lg-block'><b>Our Process</b></p>
              <p className='h2 text-light textcolormob d-block d-sm-block d-md-none d-lg-none'><b>Our Process</b></p>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className='row'>
                <div className='col-2 d-none d-sm-none d-md-flex d-lg-flex justify-content-end'>
                  <div className="vr " style={{ 'color': 'rgba(50, 197, 224, 1)', border: 'solid' }}></div>
                </div>
                <div className='col-12 col-md-10 col-lg-10'>
                  <p className='text-light fw-light'>Bring your idea to life with the guidance of experienced,
                    from inception to a minimum viable product. </p>
                </div>
              </div>
            </div>
          </div>

          {/*cards overlap block*/}
          <div className='row d-none d-sm-none d-md-none d-lg-flex justify-content-center p-lg-5 p-md-5'>
            <div className='col-12 position-absolute'>
              <div className='row d-flex justify-content-center gap-4'>
                <div className='col-3 '>
                  <img src={ourprocess2} className='img-fluid position-absolute positioncard d-none d-sm-none d-md-none d-lg-block' alt='ourprocess' />
                  <div className="card mt-5 mt-lg-0 rounded-circle  p-4">
                    <div className='row d-flex justify-content-center'>
                      <div className='col-6'>
                        <div className='card p-3 rounded-circle roundedcard1'>
                          <img src={idea} className='img-fluid d-flex mx-auto' alt='market' />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col p-3'>
                        <p className='mt-lg-3 text-center'><b>Idea to product</b></p>
                        <p className="card-text fw-light text-center">Bring your idea to life with guidance of experienced, of experienced</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-3 '>
                  <img src={ourprocess1} className='img-fluid position-absolute positioncardcenter d-none d-sm-none d-md-none d-lg-block' alt='ourprocess' />
                  <div className="card mt-5 mt-lg-0  rounded-circle p-4 ">
                    <div className='row d-flex justify-content-center'>
                      <div className='col-6'>
                        <div className='card p-3 rounded-circle roundedcard1'>
                          <img src={mvp} className='img-fluid d-flex mx-auto' alt='market' />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col p-3'>
                        <p className='mt-lg-3 text-center'><b>Future Ready</b></p>
                        <p className="card-text fw-light text-center">Bring your idea to life with guidance of experienced,
                          of experienced</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-3 '>
                  <img src={ourprocess2} className='img-fluid position-absolute positioncard2 d-none d-sm-none d-md-none d-lg-block' alt='ourprocess' />
                  <div className="card mt-5 mt-lg-0 rounded-circle p-4 ">
                    <div className='row d-flex justify-content-center'>
                      <div className='col-6'>
                        <div className='card p-3 rounded-circle roundedcard1'>
                          <img src={mvp} className='img-fluid d-flex mx-auto' alt='market' />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col p-3'>
                        <p className='mt-lg-3 text-center'><b>Demand to Delivery</b></p>
                        <p className="card-text fw-light text-center">Bring your idea to life with guidance of experienced, of experienced</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex d-sm-flex d-md-flex d-lg-none justify-content-center p-lg-5 p-md-5'>
            <div className='col-12 mb-5'>
              <div className='row d-flex justify-content-center gap-4'>
                <div className='col-10 col-lg-3'>
                  <div className="card mt-5 mt-lg-0 rounded-circle p-5">
                    <div className='row d-flex justify-content-center'>
                      <div className='col-6'>
                        <div className='card p-2 rounded-circle roundedcard1'>
                          <img src={idea} className='img-fluid d-flex mx-auto' alt='market' />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col p-3'>
                        <p className='mt-lg-3 text-center'><b>Idea to product</b></p>
                        <p className="card-text fw-light text-center">Bring your idea to life with guidance of experienced, of experienced</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-10 col-lg-3 '>
                  <div className="card mt-5 mt-lg-0  p-5 rounded-circle">
                    <div className='row d-flex justify-content-center'>
                      <div className='col-6'>
                        <div className='card p-2 rounded-circle roundedcard1'>
                          <img src={mvp} className='img-fluid d-flex mx-auto' alt='market' />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col p-3'>
                        <p className='mt-lg-3 text-center'><b>Future Ready</b></p>
                        <p className="card-text fw-light text-center">Bring your idea to life with guidance of experienced,
                          of experienced</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-10 col-lg-3'>
                  <div className="card mt-5 mt-lg-0  p-5 rounded-circle">
                    <div className='row d-flex justify-content-center'>
                      <div className='col-6'>
                        <div className='card p-2 rounded-circle roundedcard1'>
                          <img src={mvp} className='img-fluid d-flex mx-auto' alt='market' />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col p-3'>
                        <p className='mt-lg-3 text-center'><b>Demand to Delivery</b></p>
                        <p className="card-text fw-light text-center">Bring your idea to life with guidance of experienced, of experienced</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Expertise*/}
      <div className='container mt-lg-5 pt-lg-5'>
        <div className='row py-5 mt-lg-5'>
          <div className='col-12 col-md-6 col-lg-6'>
            <p className='fw-light mt-lg-5'><HiOutlineMinus />What we do</p>
            <p className='h2 text-color d-none d-sm-none d-md-block d-lg-block'><b>Expertise</b></p>
            <p className='h2 text-colormob d-block d-sm-block d-md-none d-lg-none'><b>Expertise</b></p>
          </div>
          <div className='col-12 col-md-6 col-lg-6'>
            <div className='row'>
              <div className='col-2 d-none d-sm-none d-md-flex d-lg-flex justify-content-end'>
                <div className="vr mt-lg-5" style={{ 'color': 'rgba(50, 197, 224, 1)', border: 'solid' }}></div>
              </div>
              <div className='col-12 col-md-10 col-lg-10'>
                <p className='fw-light mt-lg-5'>Bring your idea to life with the guidance of experienced,
                  from inception to a minimum viable product. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container '>
        <div className='row d-block d-sm-block d-md-block d-lg-none'>
          <div className='col-12'>
            <div className='card rounded-0 border-0' style={{ backgroundColor: '#EDFCFF', boxShadow: '2px 2px 10px -6px black' }}>
              <ul className="nav nav-tabs ">
                <li className="nav-item  dropdown col-12 d-flex">
                  <a className="nav-link col-10 text-dark " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{text == '' ? 'Select' : text}</a>
                  <RiArrowDropDownLine data-bs-toggle="dropdown" href="#" size='40px' className='col-2' />
                  <ul className="dropdown-menu col-12">
                    <li><a className="dropdown-item " data-bs-toggle="tab" href="#tab1" onClick={() => { setNumber(1); setText('Product Development') }}>Product Development</a></li>
                    <li><a className="dropdown-item " data-bs-toggle="tab" href="#tab2" onClick={() => { setNumber(2); setText('Devops & Cloud') }}>Devops & Cloud</a></li>
                    <li><a className="dropdown-item " data-bs-toggle="tab" href="#tab3" onClick={() => { setNumber(3); setText('UI / UX') }}>UI / UX</a></li>
                    <li><a className="dropdown-item " data-bs-toggle="tab" href="#tab4" onClick={() => { setNumber(4); setText('Ecommerce Development') }}>Ecommerce Development</a></li>
                    <li><a className="dropdown-item " data-bs-toggle="tab" href="#tab5" onClick={() => { setNumber(5); setText('CRM Development') }}>CRM Development</a></li>
                    <li><a className="dropdown-item " data-bs-toggle="tab" href="#tab6" onClick={() => { setNumber(6); setText('Custom Software Dev') }}>Custom Software Dev</a></li>
                    <li><a className="dropdown-item " data-bs-toggle="tab" href="#tab7" onClick={() => { setNumber(7); setText('Software QA & Testing') }}>Software QA & Testing</a></li>
                    <li><a className="dropdown-item " data-bs-toggle="tab" href="#tab8" onClick={() => { setNumber(8); setText('Database Dev & Analytics') }}>Database Dev & Analytics</a></li>
                    <li><a className="dropdown-item " data-bs-toggle="tab" href="#tab9" onClick={() => { setNumber(9); setText('Dedicated Dev Team') }}>Dedicated Dev Team</a></li>
                    <li><a className="dropdown-item " data-bs-toggle="tab" href="#tab10" onClick={() => { setNumber(10); setText('App Modernization') }}>App Modernization</a></li>
                    <li><a className="dropdown-item " data-bs-toggle="tab" href="#tab11" onClick={() => { setNumber(11); setText('Advanced AI') }}>Advanced AI</a></li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className='row '>
          <div className='col-4 p-0 d-none d-sm-none d-md-none d-lg-block'>
            <div className={number === 1 ? 'px-lg-5 px-md-4 py-lg-3 py-md-2 buttonbackgroundradiusleft' : 'px-lg-5 px-md-4 py-lg-3 py-md-2'}>
              <div className={number === 1 ? 'row border border-0 rounded-5 p-3 buttonColor' : 'row border border-2 rounded-5 p-3 buttonColorhover'} onClick={() => { setNumber(1) }}>
                <div className='col-10'>
                  Product Development
                </div>
                <div className='col-2'>
                  {number === 1 ? <FiArrowRight size='30' /> : <FiArrowDownRight size='30' />}
                </div>
              </div>
            </div>
            <div className={number === 2 ? 'px-lg-5 px-md-4 py-lg-3 py-md-2 buttonbackgroundradiusleft' : 'px-lg-5 px-md-4 py-lg-3 py-md-2'}>
              <div className={number === 2 ? 'row border border-0 rounded-5 p-3 buttonColor' : 'row border border-2 rounded-5 p-3 buttonColorhover'} onClick={() => { setNumber(2) }}>
                <div className='col-10'>
                  Devops & Cloud
                </div>
                <div className='col-2'>
                  {number === 2 ? <FiArrowRight size='30' /> : <FiArrowDownRight size='30' />}
                </div>
              </div>
            </div>
            <div className={number === 3 ? 'px-lg-5 px-md-4 py-lg-3 py-md-2 buttonbackgroundradiusleft' : 'px-lg-5 px-md-4 py-lg-3 py-md-2'}>
              <div className={number === 3 ? 'row border border-0 rounded-5 p-3 buttonColor' : 'row border border-2 rounded-5 p-3 buttonColorhover'} onClick={() => { setNumber(3) }}>
                <div className='col-10'>
                  UI / UX
                </div>
                <div className='col-2'>
                  {number === 3 ? <FiArrowRight size='30' /> : <FiArrowDownRight size='30' />}
                </div>
              </div>
            </div>
            <div className={number === 4 ? 'px-lg-5 px-md-4 py-lg-3 py-md-2 buttonbackgroundradiusleft' : 'px-lg-5 px-md-4 py-lg-3 py-md-2'}>
              <div className={number === 4 ? 'row border border-0 rounded-5 p-3 buttonColor' : 'row border border-2 rounded-5 p-3 buttonColorhover'} onClick={() => { setNumber(4) }}>
                <div className='col-10'>
                  Ecommerce Development
                </div>
                <div className='col-2'>
                  {number === 4 ? <FiArrowRight size='30' /> : <FiArrowDownRight size='30' />}
                </div>
              </div>
            </div>
            <div className={number === 5 ? 'px-lg-5 px-md-4 py-lg-3 py-md-2 buttonbackgroundradiusleft' : 'px-lg-5 px-md-4 py-lg-3 py-md-2'}>
              <div className={number === 5 ? 'row border border-0 rounded-5 p-3 buttonColor' : 'row border border-2 rounded-5 p-3 buttonColorhover'} onClick={() => { setNumber(5) }}>
                <div className='col-10'>
                  CRM Development
                </div>
                <div className='col-2'>
                  {number === 5 ? <FiArrowRight size='30' /> : <FiArrowDownRight size='30' />}
                </div>
              </div>
            </div>
            <div className={number === 6 ? 'px-lg-5 px-md-4 py-lg-3 py-md-2 buttonbackgroundradiusleft' : 'px-lg-5 px-md-4 py-lg-3 py-md-2'}>
              <div className={number === 6 ? 'row border border-0 rounded-5 p-3 buttonColor' : 'row border border-2 rounded-5 p-3 buttonColorhover'} onClick={() => { setNumber(6) }}>
                <div className='col-10'>
                  Custom Software Dev
                </div>
                <div className='col-2'>
                  {number === 6 ? <FiArrowRight size='30' /> : <FiArrowDownRight size='30' />}
                </div>
              </div>
            </div>
          </div>
          <div className={!number == 0 ? 'col-11 col-md-12 col-lg-4 p-2 p-md-3 p-lg-5 m-2 m-lg-0 contentbackground' : 'col-4'}>
            {array.map((e) => {
              const { id, img, text } = e;
              if (number === id) {
                return (
                  <div className='row' key={id}>
                    <div className='col'>
                      <img src={img} alt='u2' className='img-fluid col-12' />
                      <br /><br />
                      <p className=''>{text}</p>
                    </div>
                  </div>
                )

              }
            })}
          </div>
          <div className='col-4 p-0 d-none d-sm-none d-md-none d-lg-block'>
            <div className={number === 7 ? 'px-lg-5 px-md-4 py-lg-3 py-md-2 buttonbackgroundradiusright' : 'px-lg-5 px-md-4 py-lg-3 py-md-2'}>
              <div className={number === 7 ? 'row border border-0 rounded-5 p-3 buttonColor' : 'row border border-2 rounded-5 p-3 buttonColorhover'} onClick={() => { setNumber(7) }}>
                <div className='col-2'>
                  {number === 7 ? <FiArrowLeft size='30' /> : <FiArrowDownLeft size='30' />}
                </div>
                <div className='col-10'>
                  Software QA & Testing
                </div>
              </div>
            </div>
            <div className={number === 8 ? 'px-lg-5 px-md-4 py-lg-3 py-md-2 buttonbackgroundradiusright' : 'px-lg-5 px-md-4 py-lg-3 py-md-2'}>
              <div className={number === 8 ? 'row border border-0 rounded-5 p-3 buttonColor' : 'row border border-2 rounded-5 p-3 buttonColorhover'} onClick={() => { setNumber(8) }}>
                <div className='col-2'>
                  {number === 8 ? <FiArrowLeft size='30' /> : <FiArrowDownLeft size='30' />}
                </div>
                <div className='col-10'>
                  Database Dev & Analytics
                </div>
              </div>
            </div>
            <div className={number === 9 ? 'px-lg-5 px-md-4 py-lg-3 py-md-2 buttonbackgroundradiusright' : 'px-lg-5 px-md-4 py-lg-3 py-md-2'}>
              <div className={number === 9 ? 'row border border-0 rounded-5 p-3 buttonColor' : 'row border border-2 rounded-5 p-3 buttonColorhover'} onClick={() => { setNumber(9) }}>
                <div className='col-2'>
                  {number === 9 ? <FiArrowLeft size='30' /> : <FiArrowDownLeft size='30' />}
                </div>
                <div className='col-10'>
                  Dedicated Dev Team
                </div>
              </div>
            </div>
            <div className={number === 10 ? 'px-lg-5 px-md-4 py-lg-3 py-md-2 buttonbackgroundradiusright' : 'px-lg-5 px-md-4 py-lg-3 py-md-2'}>
              <div className={number === 10 ? 'row border border-0 rounded-5 p-3 buttonColor' : 'row border border-2 rounded-5 p-3 buttonColorhover'} onClick={() => { setNumber(10) }}>
                <div className='col-2'>
                  {number === 10 ? <FiArrowLeft size='30' /> : <FiArrowDownLeft size='30' />}
                </div>
                <div className='col-10'>
                  App Modernization
                </div>
              </div>
            </div>
            <div className={number === 11 ? 'px-lg-5 px-md-4 py-lg-3 py-md-2 buttonbackgroundradiusright' : 'px-lg-5 px-md-4 py-lg-3 py-md-2'}>
              <div className={number === 11 ? 'row border border-0 rounded-5 p-3 buttonColor' : 'row border border-2 rounded-5 p-3 buttonColorhover'} onClick={() => { setNumber(11) }}>
                <div className='col-2'>
                  {number === 11 ? <FiArrowLeft size='30' /> : <FiArrowDownLeft size='30' />}
                </div>
                <div className='col-10'>
                  Advanced AI
                </div>
              </div>
            </div>
            <div className='px-lg-5 px-md-4 py-lg-3 py-md-2 '>
              <div className='row border border-2 rounded-5 p-3 bg-dark text-light'>
                <div className='col-10'>
                  Know More
                </div>
                <div className='col-2'>
                  <FiArrowDownRight size='30' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
<br/>
      {/*Explore Our Projects block*/}
      < div className='container mt-lg-5' >
        <div className='row py-5 mb-5'>
          <div className='col-12 col-md-6 col-lg-6'>
            <p className='fw-light'><HiOutlineMinus />Explore Our Projects</p>
            <p className='h2 text-color3 d-none d-sm-none d-md-block d-lg-block'><b>Case Studies</b></p>
            <p className='h2 text-color3mob d-block d-sm-block d-md-none d-lg-none'><b>Case Studies</b></p>
          </div>
          <div className='col-12 col-md-6 col-lg-6'>
            <div className='row'>
              <div className='col-2 d-none d-sm-none d-md-flex d-lg-flex justify-content-end'>
                <div className="vr " style={{ 'color': 'rgba(50, 197, 224, 1)', border: 'solid' }}></div>
              </div>
              <div className='col-12 col-md-10 col-lg-10'>
                <p className='fw-light'>Explore how services and solutions delivered by our team help businesses grow and succeed. </p>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/*cards block*/}
      < div className='container pt-5' >
        <div className='row pt-5 d-none d-sm-none d-md-none d-lg-block'>
          <div className='col'>
            <div className='row'>
              <div className='col-12 col-lg-4 col-md-4'>
                <div className='card cardhover'>
                  <img src={case1} alt='case1' className='img-fliud col-12 position-absolute lapimgposition' />
                  <div className='row px-4 pt-5 mt-5 '>
                    <div className='col border-1 border-end border-dark'>
                      <p><b>$30K</b></p>
                      <p>MVP cost</p>
                    </div>
                    <div className='col border-1 border-end border-dark'>
                      <p><b>5 people</b></p>
                      <p>to MVP</p>
                    </div>
                    <div className='col'>
                      <p><b>8 weeks</b></p>
                      <p>product team</p>
                    </div>
                  </div>
                  <div className='row px-4 py-4'>
                    <div className='col '>
                      <p>A product for businesses to digitize legal
                        documentation, automate processes</p>
                    </div>
                  </div>
                  <div className='row px-4 pb-3'>
                    <div className='col'>
                      <img src={ken42img} alt='ken42img' className='img-fluid col-2 d-flex mx-auto' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4 col-md-4'>
                <div className='card cardhover'>
                  <img src={case1} alt='case1' className='img-fliud col-12 position-absolute lapimgposition' />
                  <div className='row px-4 pt-5 mt-5 '>
                    <div className='col border-1 border-end border-dark'>
                      <p><b>$30K</b></p>
                      <p>MVP cost</p>
                    </div>
                    <div className='col border-1 border-end border-dark'>
                      <p><b>5 people</b></p>
                      <p>to MVP</p>
                    </div>
                    <div className='col'>
                      <p><b>8 weeks</b></p>
                      <p>product team</p>
                    </div>
                  </div>
                  <div className='row px-4 py-4'>
                    <div className='col '>
                      <p>A product for businesses to digitize legal
                        documentation, automate processes</p>
                    </div>
                  </div>
                  <div className='row px-4 pb-3'>
                    <div className='col'>
                      <img src={doqfyimg} alt='doqfyimg' className='img-fluid col-5 d-flex mx-auto' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4 col-md-4'>
                <div className='card cardhover'>
                  <div className='row'>
                    <div className='col'>
                      <img src={case1} alt='case1' className='img-fliud col-12 position-absolute lapimgposition' />
                    </div>
                  </div>
                  <div className='row px-4 pt-5 mt-5 '>
                    <div className='col border-1 border-end border-dark'>
                      <p><b>$30K</b></p>
                      <p>MVP cost</p>
                    </div>
                    <div className='col border-1 border-end border-dark'>
                      <p><b>5 people</b></p>
                      <p>to MVP</p>
                    </div>
                    <div className='col'>
                      <p><b>8 weeks</b></p>
                      <p>product team</p>
                    </div>
                  </div>
                  <div className='row px-4 py-4'>
                    <div className='col '>
                      <p>A product for businesses to digitize legal
                        documentation, automate processes</p>
                    </div>
                  </div>
                  <div className='row px-4 pb-3'>
                    <div className='col'>
                      <img src={piChainimg} alt='piChainimg' className='img-fluid col-4 d-flex mx-auto' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row d-none d-sm-none d-md-block d-lg-none'>
          <div className='col'>
            <OwlCarousel className='owl-theme' loop margin={1} items={2}  >
              <div class='item p-2'>
                <div className='row pt-5 mt-5'>
                  <div className='col-12 col-lg-4 col-md-12 pt-5'>
                    <div className='card cardhover pt-5'>
                      <img src={case1} alt='case1' className='img-fliud col-12 position-absolute lapimgposition' />
                      <div className='row px-4 pt-5 mt-5 '>
                        <div className='col border-1 border-end border-dark'>
                          <p><b>$30K</b></p>
                          <p>MVP cost</p>
                        </div>
                        <div className='col border-1 border-end border-dark'>
                          <p><b>5 people</b></p>
                          <p>to MVP</p>
                        </div>
                        <div className='col'>
                          <p><b>8 weeks</b></p>
                          <p>product team</p>
                        </div>
                      </div>
                      <div className='row px-4 py-4'>
                        <div className='col '>
                          <p>A product for businesses to digitize legal
                            documentation, automate processes</p>
                        </div>
                      </div>
                      <div className='row px-4 pb-3'>
                        <div className='col-3 d-flex mx-auto'>
                          <img src={ken42img} alt='ken42img' className='img-fluid col-2 d-flex mx-auto' width='20%' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='item p-2'>
                <div className='row pt-5 mt-5'>
                  <div className='col-12 col-lg-4 col-md-12 pt-5'>
                    <div className='card cardhover pt-5'>
                      <img src={case1} alt='case1' className='img-fliud col-12 position-absolute lapimgposition' />
                      <div className='row px-4 pt-5 mt-5 '>
                        <div className='col border-1 border-end border-dark'>
                          <p><b>$30K</b></p>
                          <p>MVP cost</p>
                        </div>
                        <div className='col border-1 border-end border-dark'>
                          <p><b>5 people</b></p>
                          <p>to MVP</p>
                        </div>
                        <div className='col'>
                          <p><b>8 weeks</b></p>
                          <p>product team</p>
                        </div>
                      </div>
                      <div className='row px-4 py-4'>
                        <div className='col '>
                          <p>A product for businesses to digitize legal
                            documentation, automate processes</p>
                        </div>
                      </div>
                      <div className='row px-4 pb-3'>
                        <div className='col-6 d-flex mx-auto'>
                          <img src={doqfyimg} alt='ken42img' className='img-fluid col-2 d-flex mx-auto' width='20%' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='item p-2'>
                <div className='row pt-5 mt-5'>
                  <div className='col-12 col-lg-4 col-md-12 pt-5'>
                    <div className='card cardhover pt-5'>
                      <img src={case1} alt='case1' className='img-fliud col-12 position-absolute lapimgposition' />
                      <div className='row px-4 pt-5 mt-5 '>
                        <div className='col border-1 border-end border-dark'>
                          <p><b>$30K</b></p>
                          <p>MVP cost</p>
                        </div>
                        <div className='col border-1 border-end border-dark'>
                          <p><b>5 people</b></p>
                          <p>to MVP</p>
                        </div>
                        <div className='col'>
                          <p><b>8 weeks</b></p>
                          <p>product team</p>
                        </div>
                      </div>
                      <div className='row px-4 py-4'>
                        <div className='col '>
                          <p>A product for businesses to digitize legal
                            documentation, automate processes</p>
                        </div>
                      </div>
                      <div className='row px-4 pb-3'>
                        <div className='col-6 d-flex mx-auto'>
                          <img src={piChainimg} alt='ken42img' className='img-fluid col-2 d-flex mx-auto' width='20%' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </OwlCarousel>;
          </div>
        </div>
        <div className='row d-block d-sm-block d-md-none d-lg-none'>
          <div className='col'>
            <OwlCarousel className='owl-theme' loop margin={1} items={1}  >
              <div class='item p-2'>
                <div className='row pt-5 mt-5'>
                  <div className='col-12 col-lg-4 col-md-12 pt-5'>
                    <div className='card cardhover pt-5'>
                      <img src={case1} alt='case1' className='img-fliud col-12 position-absolute lapimgposition' />
                      <div className='row px-4 pt-5 mt-5 '>
                        <div className='col border-1 border-end border-dark'>
                          <p><b>$30K</b></p>
                          <p>MVP cost</p>
                        </div>
                        <div className='col border-1 border-end border-dark'>
                          <p><b>5 people</b></p>
                          <p>to MVP</p>
                        </div>
                        <div className='col'>
                          <p><b>8 weeks</b></p>
                          <p>product team</p>
                        </div>
                      </div>
                      <div className='row px-4 py-4'>
                        <div className='col '>
                          <p>A product for businesses to digitize legal
                            documentation, automate processes</p>
                        </div>
                      </div>
                      <div className='row px-4 pb-3'>
                        <div className='col-3 d-flex mx-auto'>
                          <img src={ken42img} alt='ken42img' className='img-fluid col-2 d-flex mx-auto' width='20%' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='item p-2'>
                <div className='row pt-5 mt-5'>
                  <div className='col-12 col-lg-4 col-md-12 pt-5'>
                    <div className='card cardhover pt-5'>
                      <img src={case1} alt='case1' className='img-fliud col-12 position-absolute lapimgposition' />
                      <div className='row px-4 pt-5 mt-5 '>
                        <div className='col border-1 border-end border-dark'>
                          <p><b>$30K</b></p>
                          <p>MVP cost</p>
                        </div>
                        <div className='col border-1 border-end border-dark'>
                          <p><b>5 people</b></p>
                          <p>to MVP</p>
                        </div>
                        <div className='col'>
                          <p><b>8 weeks</b></p>
                          <p>product team</p>
                        </div>
                      </div>
                      <div className='row px-4 py-4'>
                        <div className='col '>
                          <p>A product for businesses to digitize legal
                            documentation, automate processes</p>
                        </div>
                      </div>
                      <div className='row px-4 pb-3'>
                        <div className='col-6 d-flex mx-auto'>
                          <img src={doqfyimg} alt='ken42img' className='img-fluid col-2 d-flex mx-auto' width='20%' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='item p-2'>
                <div className='row pt-5 mt-5'>
                  <div className='col-12 col-lg-4 col-md-12 pt-5'>
                    <div className='card cardhover pt-5'>
                      <img src={case1} alt='case1' className='img-fliud col-12 position-absolute lapimgposition' />
                      <div className='row px-4 pt-5 mt-5 '>
                        <div className='col border-1 border-end border-dark'>
                          <p><b>$30K</b></p>
                          <p>MVP cost</p>
                        </div>
                        <div className='col border-1 border-end border-dark'>
                          <p><b>5 people</b></p>
                          <p>to MVP</p>
                        </div>
                        <div className='col'>
                          <p><b>8 weeks</b></p>
                          <p>product team</p>
                        </div>
                      </div>
                      <div className='row px-4 py-4'>
                        <div className='col '>
                          <p>A product for businesses to digitize legal
                            documentation, automate processes</p>
                        </div>
                      </div>
                      <div className='row px-4 pb-3'>
                        <div className='col-6 d-flex mx-auto'>
                          <img src={piChainimg} alt='ken42img' className='img-fluid col-2 d-flex mx-auto' width='20%' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </OwlCarousel>;
          </div>
        </div>
      </div >


      {/*Real World Success block*/}
      < div className='container-fluid bgcolor mt-lg-5' >
        <div className='container mt-lg-5'>
          <div className='row py-5'>
            <div className='col-12 col-md-6 col-lg-6 mt-lg-5'>
              <p className=' text-light fw-light'><HiOutlineMinus />Giving Push to your Growth</p>
              <p className='h2 text-light '><b><span className='textcolor'>Real World</span> Success</b></p>

              {/*cards*/}
              <div className='row mt-lg-5 mt-3'>
                <div className='col-6 col-lg-4'>
                  <div class="card w-100 card-color opacity-25">
                    <div class="card-body">
                      <h5 class="card-title"><b>25+</b></h5>
                      <p class="card-text">Products Delivered</p>
                    </div>
                  </div>
                </div>
                <div className='col-6 col-lg-4'>
                  <div class="card w-100 card-color opacity-25">
                    <div class="card-body ">
                      <h5 class="card-title "><b>40+</b></h5>
                      <p class="card-text">Wizards at <br/>Work</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-lg-5 mt-5'>
                <div className='col-6 col-lg-4'>
                  <div class="card w-100 card-color opacity-25">
                    <div class="card-body ">
                      <h5 class="card-title "><b>30+</b></h5>
                      <p class="card-text">Technologies Deployed</p>
                    </div>
                  </div>
                </div>
                <div className='col-6 col-lg-4'>
                  <div class="card w-100 card-color opacity-25">
                    <div class="card-body ">
                      <h5 class="card-title "><b>4+</b></h5>
                      <p class="card-text">Countries & Growing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*paragraph*/}
            <div className='col-12 col-md-6 col-lg-6 mt-lg-5'>
              <div className='row'>
                <div className='col-2 d-none d-sm-none d-md-flex d-lg-flex justify-content-end'>
                  <div className="vr " style={{ 'color': 'rgba(50, 197, 224, 1)', border: 'solid' }}></div>
                </div>
                <div className='col-12 col-md-10 col-lg-10'>
                  <p className='text-light fw-light'>Bring your idea to life with the guidance of experienced,
                    from inception to a minimum viable product. </p>
                </div>
                <img src={success} className='img-fluid d-none d-sm-none d-md-block d-md-block' alt='success' />
              </div>
            </div>
          </div>
          <img src={map} className='img-fluid' alt='map' width='50%' />
        </div>
      </div >
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 mt-5'>
            <p className=' fw-light'><HiOutlineMinus />What’s New</p>
            <p className='h2 text-color4 d-none d-sm-none d-md-block d-lg-block'><b>Our Insights</b></p>
            <p className='h2 text-color d-block d-sm-block d-md-none d-lg-none'><b>Our Insights</b></p>
          </div>

          {/*tab pannel */}
          <div className='col-12 col-lg-6  mt-5'>
            <ul className="nav nav-tabs mb-3 d-flex justify-content-lg-end mt-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className={color===1?"nav-link active tabs":"nav-link   border-0"}
                  id="ex1-tab-1"
                  data-bs-toggle="tab"
                  href="#ex1-tabs-1"
                  role="tab"
                  aria-controls="ex1-tabs-1"
                  aria-selected="true"
                  onClick={()=>{setcolor(1)}}
                >Whats New</a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={color===2?"nav-link active  tabs":"nav-link   border-0"}
                  id="ex1-tab-2"
                  data-bs-toggle="tab"
                  href="#ex1-tabs-2"
                  role="tab"
                  aria-controls="ex1-tabs-2"
                  aria-selected="false"
                  onClick={()=>{setcolor(2)}}
                >Security</a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={color===3?"nav-link active tabs":"nav-link border-0"}
                  id="ex1-tab-3"
                  data-bs-toggle="tab"
                  href="#ex1-tabs-3"
                  role="tab"
                  aria-controls="ex1-tabs-3"
                  aria-selected="false"
                  onClick={()=>{setcolor(3)}}
                >News</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content mt-5" id="ex1-content">
          <div
            class="tab-pane fade show active"
            id="ex1-tabs-1"
            role="tabpanel"
            aria-labelledby="ex1-tab-1"
          >
            {/*tab content1 */}
            <div className='row'>
              <div className='col-12 col-lg-4 mt-5 mt-lg-0'>
                <img src={whatsnew} className='img-fluid' alt='whatsnew' />
                <p className='slidecolor mt-3'>Whats New</p>
                <p className='h4'>
                  Why oracle database runs best on oracle linux
                </p>
              </div>
              <div className='col-12 col-lg-4  mt-5 mt-lg-0'>
                <img src={whatsnew} className='img-fluid' alt='whatsnew' />
                <p className='slidecolor mt-3'>Whats New</p>
                <p className='h4'>
                  Why oracle database runs best on oracle linux
                </p>
              </div>
              <div className='col-12 col-lg-4 mt-5 mt-lg-0'>
                <img src={whatsnew} className='img-fluid' alt='whatsnew' />
                <p className='slidecolor mt-3'>Whats New</p>
                <p className='h4'>
                  Why oracle database runs best on oracle linux
                </p>
              </div>
            </div>
          </div>
          {/*tab content2 */}
          <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
            <div className='row'>
              <div className='col-12 col-lg-4'>
                <img src={news} className='img-fluid' alt='whatsnew' />
                <p className='slidecolor mt-3'>News</p>
                <p className='h4'>Why oracle database runs best on oracle linux
                </p>
              </div>
              <div className='col-12 col-lg-4'>
                <img src={news} className='img-fluid' alt='whatsnew' />
                <p className='slidecolor mt-3'>News</p>
                <p className='h4'>Why oracle database runs best on oracle linux
                </p>
              </div>
              <div className='col-12 col-lg-4'>
                <img src={news} className='img-fluid' alt='whatsnew' />
                <p className='slidecolor mt-3'>News</p>
                <p className='h4'>Why oracle database runs best on oracle linux
                </p>
              </div>
            </div>
          </div>

          {/*tab content3 */}
          <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
            <div className='row'>
              <div className='col-12 col-lg-4'>
                <img src={security} className='img-fluid' alt='whatsnew' />
                <p className='slidecolor mt-3'>Security</p>
                <p className='h4'>Why oracle database runs best on oracle linux
                </p>
              </div>
              <div className='col-12 col-lg-4'>
                <img src={security} className='img-fluid' alt='whatsnew' />
                <p className='slidecolor mt-3'>Security</p>
                <p className='h4'>Why oracle database runs best on oracle linux
                </p>
              </div>
              <div className='col-12 col-lg-4'>
                <img src={security} className='img-fluid' alt='whatsnew' />
                <p className='slidecolor mt-3'>Security</p>
                <p className='h4'>Why oracle database runs best on oracle linux
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Want to build the future with us? paragraph */}
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-lg-6 mt-lg-5'>
            <img src={future} className='img-fluid' alt='future' />
          </div>
          <div className='col-12 col-lg-6  mt-5'>
            <p><HiOutlineMinus />Join T²C and make an impact!</p>
            <p className='h3'>
              Want to build the future with us?
            </p>
            <br />
            <p><b>This is an opportunity for students who are eager to dominate the tech world.</b><br />
              If you are looking forward to expanding upon your skill sets, T²C is the place for you to thrive. Whether you are a coding whiz, a web developer or just starting out, we've got you covered. Get trained by experts and work on live projects right from Day 1 - gearing you to build the next-generation of products! Join hands with a tech-savvy clan who’s as passionate as you are!</p>
            <br />
            <button className='btn btn-dark rounded-5 px-3 '>Join us  <img src={arrow2} alt='arrow2' width='12%' /></button>
          </div>
        </div>
      </div>

      {/*footer */}
      <div className='container-fluid mt-lg-5 mt-3 pt-lg-5'>
        <div className='row'>
          <div className='col p-0'>
            <Footer />

          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
