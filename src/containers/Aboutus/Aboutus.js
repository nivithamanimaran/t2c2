
import React from 'react';
import Navbar from '../Navbar/Navbar';
import aboutuscover from '../../assests/aboutus/aboutuscover.png'
import doqfy from '../../assests/aboutus/doqfy.png'
import kennovate from '../../assests/aboutus/kennovate.png'
import transo from '../../assests/aboutus/transo.png'
import seminar from '../../assests/aboutus/seminar.png'
import turbo from '../../assests/aboutus/turbo.png'
import square from '../../assests/aboutus/square.svg'
import cfo from '../../assests/aboutus/icon-cfo.svg'
import cmo from '../../assests/aboutus/icon-cmo.svg'
import cso from '../../assests/aboutus/icon-cso.svg'
import cxo from '../../assests/aboutus/icon-cxo.svg'
import image1 from '../../assests/aboutus/image1.png'
import image2 from '../../assests/aboutus/image2.png'
import image3 from '../../assests/aboutus/image3.png'
import image4 from '../../assests/aboutus/image4.png'
import t2clogo from '../../assests/t2clogo.svg'
import { HiOutlineMinus } from 'react-icons/hi'
import arrow2 from '../../assests/aboutus/arrow2.svg'
import Footer from '../Footer/Footer';

function Aboutus() {
  return (
    <>
      <Navbar page={3} />
      <div className='container-fluid p-0'>
        <div className='row'>
          <div className='col-4 position-absolute p-5 mt-lg-5  d-none d-sm-none d-md-block  d-lg-block headalign'>
            <p className='h4 text-light mt-lg-3 pt-lg-3 pt-3 mt-3 textcolor2'><b>About Us</b></p>
          </div>
          <div className='col-8 p-5 mt-lg-5 mt-3 pt-lg-5 pt-5 position-absolute  d-none d-sm-none d-md-block d-lg-block paraalign'>
            <p className='fs-6 text-light mt-lg-5 pt-lg-5 pt-3 mt-3 p-5'>Technology drives our core operations. T²C, our Technology Centre of Excellence, integrates business strategy, design thinking and engineering to enable technology disruptors. Our pursuit of growth entails recruiting over 50 brilliant young minds across varied sectors from time to time.</p>
          </div>
        </div>
        <img src={aboutuscover} className='img-fluid p-0 m-0' alt='aboutuscover' width='100%' />
      </div>
      <div className='container d-block d-sm-block d-md-none d-lg-none mt-3'>
        <div className='row'>
          <div className='col'>
            <p className='h2 text-colormob2'><b>About Us</b></p>
            <p className='fs-6'>Bring your idea to life with the guidance of experienced, from inception to a minimum viable product. </p>
          </div>
        </div>
        <hr />
      </div>
      <div className='container mt-lg-5 mt-3'>
        <div className='conatiner d-block d-sm-block d-md-block d-lg-none'>
          <p className='fs-6 navmenucolor '>What we do</p>
          <p className='h2 '><b>Your Chief Technology Organization</b></p>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-7 mt-lg-5'>
            <img src={image1} className='img-fluid' alt='image1' />
          </div>
          <div className='col-12 col-lg-5 mt-lg-5'>
            <p className='fs-6 navmenucolor d-none d-sm-none d-md-none d-lg-block'>What we do</p>
            <p className='h2 d-none d-sm-none d-md-none d-lg-block'><b>Your Chief Technology Organization</b></p>
            <div className='row'>
              <div className='col'>
                <p className='textOverlap d-none d-sm-none d-md-none d-lg-block col-5'>
                  <b>Get Unmatched Strategy and Execution  Support with T²C</b> <br />
                  T²C is your acting CTO that empowers you with a confluence of resources, associations and mentorship. We define effective digital strategies to equip you for the long run.
                </p>
                <p className='d-block d-sm-block d-md-block d-lg-none para-color p-3'>
                  Get Unmatched Strategy and Execution  Support with T²C
                  T²C is your acting CTO that empowers you with a confluence of resources, associations and mentorship. We define effective digital strategies to equip you for the long run.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-lg-5 mt-3'>
        <div className='row'>
          <div className='col-12 col-lg-5 mt-lg-5'>
            <p className='fs-6 navmenucolor'>What we do</p>
            <p className='h2 '><b>Moulding the leaders of tomorrow</b></p>
            <div className='container'>
              <div className='col'>
                <p className='textOverlaptwo d-none d-sm-none d-md-none d-lg-block col-5'><b
                >The T²C tribe is build on the foundations of game intelligence.</b><br />
                  We coordinate one-on-one mentoring by matching individuals with complementary cognitive profiles to facilitate equity of resources and create individuals with critical acumen.
                </p>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-7 mt-lg-5'>
            <img src={image2} className='img-fluid' alt='image2' />
          </div>
        </div>
        <div className='container para-color'>
          <p className='fs-6 d-block d-sm-block d-md-block d-lg-none '>The T²C tribe is build on the foundations of game intelligence.
            We coordinate one-on-one mentoring by matching individuals with complementary cognitive profiles to facilitate equity of resources and create individuals with critical acumen.
          </p>
        </div>
      </div>
      <div className='container mt-lg-5 d-none d-sm-none d-md-block d-lg-block'>
        <p className='pt-lg-5 d-flex justify-content-center'><HiOutlineMinus className='minus mt-1' />What we do<HiOutlineMinus className='minus mt-1' /></p>
        <p className='h2 d-flex justify-content-center'><b className='text-color5'>Clients We serve</b></p>
      </div>
      <div className='container mt-lg-5 d-block d-sm-block d-md-none d-lg-none'>
        <p className='pt-lg-5'><HiOutlineMinus className='minus' />What we do<HiOutlineMinus className='minus' /></p>
        <p className='h2'><b className='text-colormob'>Clients We serve</b></p>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <img src={image3} className='img-fluid' alt='image3' />
          </div>
          <div className='col-12 col-lg-6 mt-3 px-lg-5'>
            <div className='col d-none d-sm-none d-md-flex d-lg-flex justify-content-end'>
              <img src={square} className='img-fluid' alt='square' />
            </div>
            <p className='h3  ml-lg-5'><b>Startups</b></p>
            <p className='fs-6 ml-lg-5'>We are passionate about startups and believe in getting the fundamentals right. Our team has the necessary skill set to <br />create a prototype and develop an MVP aiding your launch  <br />faster and effectively.</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <hr />
      </div>
      <div className='container mt-lg-5'>
        <div className='row pt-lg-5 '>
          <div className='col-12 col-lg-6 d-block d-sm-block d-md-none d-lg-none mt-5'>
            <img src={image4} className='img-fluid' alt='image3' />
          </div>
          <div className='col-12 col-lg-6 '>
            <div className='col d-none d-sm-none d-md-block d-lg-block'>
              <img src={square} className='img-fluid' alt='square' />
            </div>
            <p className='h3 mt-3 mx-lg-5 px-lg-5'><b>SMEs</b></p>
            <p className='fs-6 ms-lg-5 ps-lg-5'>The landscape of small and medium businesses has been transformed by mobile devices and cloud services. We offer tailored software solutions and leverage the latest technology to help businesses stay ahead of the curve.</p>

          </div>
          <div className='col-12 col-lg-6 d-none d-sm-none d-md-block d-lg-block'>
            <img src={image4} className='img-fluid' alt='image3' />
          </div>
        </div>
      </div>
      <div className='container'>
        <hr />
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col mx-lg-5'>
            <p className='fs-6'><HiOutlineMinus />Teams trust us to innovate and co-build</p>
          </div>
        </div>
        <div className='container'>
          <div className='row gap-5 d-none d-sm-flex d-md-block d-lg-flex'>
            <div className='col '>
              <img src={kennovate} className='img-fluid' alt='kennovate' />
            </div>
            <div className='col '>
              <img src={transo} className='img-fluid' alt='transo' />
            </div>
            <div className='col '>
              <img src={seminar} className='img-fluid' alt='seminar' />
            </div>
            <div className='col '>
              <img src={turbo} className='img-fluid' alt='turbo' />
            </div>
            <div className='col '>
              <img src={doqfy} className='img-fluid' alt='doqfy' />
            </div>
          </div>
          <div className='row d-flex d-flex d-sm-flex d-md-none d-lg-none'>
            <div className='col-3 '>
              <img src={kennovate} className='img-fluid' alt='kennovate' />
            </div>
            <div className='col-3 '>
              <img src={transo} className='img-fluid' alt='transo' />
            </div>
            <div className='col-3 '>
              <img src={seminar} className='img-fluid' alt='seminar' />
            </div>
            <div className='col-3 '>
              <img src={turbo} className='img-fluid' alt='turbo' />
            </div>
            <div className='col-3 '>
              <img src={doqfy} className='img-fluid' alt='doqfy' />
            </div>
          </div>
        </div>
      </div>
      <div className='box-color'>
        <div className='container py-lg-5 py-3'>
          <div className='row py-lg-5'>
            <div className='col-12 col-lg-6'>
              <p className='fs-6 text-light'><HiOutlineMinus className='minus' />Giving Push to your Growth</p>
              <p className='h2 text-light d-none d-sm-none d-md-block d-lg-block'><span className='textcolor'>Supercharged</span> Ecosystem</p>
              <p className='h2 text-light d-block d-sm-block d-md-none d-lg-none textcolor3mob'>Supercharged Ecosystem</p>
            </div>
            <div className='col-12 col-lg-6 '>
              <div className='row'>
                <div className='col-3 d-none d-sm-none d-md-none d-lg-flex justify-content-end'>
                  <div className="vr " style={{ 'color': 'rgba(50, 197, 224, 1)', border: 'solid' }}></div>
                </div>
                <div className='col-12 col-lg-9'>
                  <p className='text-light fw-light'>Now that you’ve found your CTO, fill in your other requirements through our extended ecosystem</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center my-lg-5'>
            <div className='col-12 col-lg-8'>
              <div class="card w-100 rounded-0">
                <div class="card-body">
                  <div className='row'>
                    <div className='col-12 col-lg-3'>
                      <img src={t2clogo} className='img-fluid d-none d-sm-none d-md-block d-lg-block' alt='logo' width='70%' />
                      <img src={t2clogo} className='img-fluid d-block d-sm-block d-md-none d-lg-none' alt='logo' width='30%' />
                      <hr className='d-block d-sm-block d-md-none d-lg-none' />
                    </div>
                    <div className='col-12 col-lg-8'>
                      <div className='row'>
                        <div className='col-1 d-none d-sm-none d-md-flex d-lg-flex justify-content-end max'>
                          <div className='vr '></div>
                        </div>
                        <div className='col-11'>
                          <p class="card-text">Start Big with the right technology consulting, development, security and scale to meet your product, business and stakeholder needs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row my-lg-5 p-3 pb-lg-5'>
            <div className='col-12 mt-5 col-lg-3 d-flex'>
              <div class="card w-100 cardtopborder rounded-0">
                <div class="card-body">
                  <div className='row'>
                    <div className='col-5'>
                      <h3 class="card-title"><b>Alt Dash</b></h3>
                    </div>
                    <div className='col-7 d-flex justify-content-end'>
                      <img src={cmo} className='img-fluid' alt='cmo' width='50%' />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-10'>
                      <p class="card-text">Marketing Center <br />of Excellence</p>
                    </div>
                    <div className='col-2 d-flex align-items-end'>
                      <img src={arrow2} alt='arrow' className='img-fluid ' />
                    </div>
                  </div>
                  <div className='col d-flex justify-content-end'>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 mt-5 col-lg-3 d-flex'>
              <div class="card w-100 cardtopborder rounded-0">
                <div class="card-body">
                  <div className='row'>
                    <div className='col-5'>
                      <h3 class="card-title"><b>Turbo Start</b></h3>
                    </div>
                    <div className='col-7 d-flex justify-content-end'>
                      <img src={cso} className='img-fluid' alt='cso' width='50%' />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-10'>
                      <p class="card-text">Sales Center <br />Of Excellence</p>
                    </div>
                    <div className='col-2 d-flex align-items-end'>
                      <img src={arrow2} alt='arrow' className='img-fluid ' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 mt-5  col-lg-3 d-flex'>
              <div class="card w-100 cardtopborder rounded-0">
                <div class="card-body">
                  <div className='row'>
                    <div className='col-5'>
                      <h4 class="card-title"><b>Design Labs</b></h4>
                    </div>
                    <div className='col-7 d-flex justify-content-end'>
                      <img src={cxo} className='img-fluid' alt='cxo' width='50%' />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-10'>
                      <p class="card-text">Design & Ux Center<br /> Of Excellence</p>
                    </div>
                    <div className='col-2 d-flex align-items-end'>
                      <img src={arrow2} alt='arrow' className='img-fluid ' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 mt-5 col-lg-3 d-flex'>
              <div class="card w-100 cardtopborder rounded-0">
                <div class="card-body">
                  <div className='row'>
                    <div className='col-6'>
                      <h5 class="card-title"><b>Strategy Qore</b></h5>
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                      <img src={cfo} className='img-fluid' alt='cfo' width='50%' />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-10'>
                      <p class="card-text">Investment Banking<br /> Center of Excellence</p>
                    </div>
                    <div className='col-2 d-flex align-items-end'>
                      <img src={arrow2} alt='arrow' className='img-fluid ' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  );
}

export default Aboutus;