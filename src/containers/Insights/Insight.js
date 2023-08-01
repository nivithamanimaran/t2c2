import React from 'react';
import Navbar from '../Navbar/Navbar';
import insightscover from '../../assests/insights/insightscover.png'
import insightsmob from '../../assests/insights/insightsmob.png'
import { HiOutlineMinus } from 'react-icons/hi'
import { FiArrowDownRight } from 'react-icons/fi'
import { useState } from 'react';
import whatsnew from '../../assests/Homepage/whatsnew.png'
import news from '../../assests/Homepage/news.png'
import security from '../../assests/Homepage/security.png'
import Footer from '../Footer/Footer';

function Insight() {
  const [color, setcolor] = useState(1)
  const [pagechange, setPagechange] = useState(1)


  // const nextpage = () => {
  //   let next = pagechange + 1;
  //   setPagechange(next)
  // }
  return (
    <>
      <div style={{ overflowX: 'hidden' }}>
        <Navbar page={3} />
        <div className='container-fluid p-0'>
          <div className='row'>
            <div className='col d-flex justify-content-center mt-lg-5 mt-3 pt-lg-5 pt-5 position-absolute'>
              <p className='h2 text-light mt-lg-5 pt-lg-5 pt-3 mt-3 getintouchline d-none d-sm-none d-md-block d-lg-block'><b>Insights</b></p>
              <p className='h2 text-light mt-lg-5 pt-lg-5 pt-3 mt-3 getintouchline d-block d-sm-block d-md-none d-lg-none'><b>Insights</b></p>
            </div>
            <div className='col p-0'>
              <img src={insightscover} alt='insightscover' className='col-12 img-fluid d-none d-sm-none d-lg-block d-md-block' />
              <img src={insightsmob} alt='insightsmob' className='col-12 img-fluid d-block d-sm-block d-lg-none d-md-none' />
            </div>
          </div>
        </div>
        <div className='container my-5 '>
          <p className='mt-lg-4'>
            <HiOutlineMinus className='minus' />What’s New
          </p>
          <div className='row'>
            <div className='col-12 col-lg-6 '>
              <p className='h2 text-color4 d-none d-sm-none d-md-block d-lg-block'><b>Our Insights</b></p>
              <p className='h2 text-color d-block d-sm-block d-md-none d-lg-none'><b>Our Insights</b></p>
            </div>
            <div className='col-12  col-lg-6  mt-5 mt-lg-0'>
              <div className='row d-flex justify-content-end'>
                <div className='col'>
                  <ul className="nav nav-tabs mb-3 d-flex justify-content-lg-end border-0" id="ex1" role="tablist">
                    <li className="nav-item border-bottom border-1 border-dark" role="presentation">
                      <a
                        className={color === 1 ? "nav-link active tabs tabtext" : "nav-link text-dark  border-0 tabtext"}
                        id="ex1-tab-1"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-1"
                        role="tab"
                        aria-controls="ex1-tabs-1"
                        aria-selected="true"
                        onClick={() => { setcolor(1); setPagechange(1) }}
                      >Whats New</a>
                    </li>
                    <li className="nav-item border-bottom border-1 border-dark" role="presentation">
                      <a
                        className={color === 2 ? "nav-link active  tabs tabtext" : "nav-link  text-dark border-0 tabtext"}
                        id="ex1-tab-2"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        aria-controls="ex1-tabs-2"
                        aria-selected="false"
                        onClick={() => { setcolor(2); setPagechange(1) }}
                      >Security</a>
                    </li>
                    <li className="nav-item border-bottom border-1 border-dark" role="presentation">
                      <a
                        className={color === 3 ? "nav-link active tabs tabtext" : "nav-link text-dark border-0 tabtext"}
                        id="ex1-tab-3"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-3"
                        role="tab"
                        aria-controls="ex1-tabs-3"
                        aria-selected="false"
                        onClick={() => { setcolor(3); setPagechange(1) }}
                      >News</a>
                    </li>
                    <li className="nav-item border-bottom border-1 border-dark" role="presentation">
                      <a
                        className={color === 4 ? "nav-link active tabs tabtext" : "nav-link text-dark border-0 tabtext"}
                        id="ex1-tab-4"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-4"
                        role="tab"
                        aria-controls="ex1-tabs-4"
                        aria-selected="false"
                        onClick={() => { setcolor(4); setPagechange(1) }}
                      >Technology</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content mt-lg-5" id="ex1-content">
            <div
              class="tab-pane fade show active"
              id="ex1-tabs-1"
              role="tabpanel"
              aria-labelledby="ex1-tab-1"
            >
              {/*tab content1 */}
              <div>

                 {/*page1 whats new */}
                <div className={pagechange === 1 ? 'row' : 'row d-none'} >
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={whatsnew} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4  p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={whatsnew} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                </div>

                 {/*page2 whats new */}
                <div className={pagechange === 2 ? 'row' : 'row d-none'} >
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={whatsnew} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={whatsnew} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                </div>

                 {/*page3 whats new */}
                <div className={pagechange === 3 ? 'row' : 'row d-none'} >
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={whatsnew} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={whatsnew} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                </div>
              </div>
              <div className='row mt-5 '>
                <div className='col-12 col-md-8 col-lg-8'>
                  <nav aria-label="Page navigation">
                    <ul className="pagination gap-3 border-0">
                      <li className="page-item ">
                        <button className={pagechange === 1 ? "page-link border-0 rounded-5 paginationcoloractive pagenumber" : "page-link border-0 rounded-5 paginationcolor pagenumber"} onClick={() => { setPagechange(1) }}>1</button>
                      </li>
                      <li className="page-item" aria-current="page">
                        <button className={pagechange === 2 ? "page-link border-0 rounded-5 paginationcoloractive pagenumber" : "page-link border-0 rounded-5 paginationcolor pagenumber"} onClick={() => { setPagechange(2) }}>2</button>
                      </li>
                      <li className="page-item" aria-current="page">
                        <button className={pagechange === 3 ? "page-link border-0 rounded-5 paginationcoloractive pagenumber" : "page-link border-0 rounded-5 paginationcolor pagenumber"} onClick={() => { setPagechange(3) }}>3</button>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='col-12 col-md-4 col-lg-3 d-none d-sm-none d-md-block d-lg-block'>
                  <div className='row border border-2 rounded-5 p-2  bg-dark text-light'>
                    <div className='col-10'>
                      Next Page
                    </div>
                    <div className='col-2'>
                      <FiArrowDownRight size='30' />
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-4 d-flex d-sm-flex d-md-none d-lg-none justify-content-center '>
                  <div className='row border border-2 rounded-5 px-3 py-1 p-lg-3 bg-dark text-light'>
                    <div className='col-10'>
                      Next Page
                    </div>
                    <div className='col-2'>
                      <FiArrowDownRight size='30' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*tab content2 */}
            <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
              <div>
                {/*page1 security */}
                <div className={pagechange === 1 ? 'row' : 'row d-none'} >
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4  p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                </div>
                 {/*page2 security */}
                <div className={pagechange === 2 ? 'row' : 'row d-none'} >
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={news} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                </div>
              </div>
              <div className='row mt-5 '>
                <div className='col-6 col-md-8 col-lg-8'>
                  <nav aria-label="Page navigation">
                    <ul className="pagination gap-3 border-0">
                      <li className="page-item ">
                        <button className={pagechange === 1 ? "page-link border-0 rounded-5 paginationcoloractive pagenumber" : "page-link border-0 rounded-5 paginationcolor pagenumber"} onClick={() => { setPagechange(1) }}>1</button>
                      </li>
                      <li className="page-item" aria-current="page">
                        <button className={pagechange === 2 ? "page-link border-0 rounded-5 paginationcoloractive pagenumber" : "page-link border-0 rounded-5 paginationcolor pagenumber"} onClick={() => { setPagechange(2) }}>2</button>
                      </li>
                      <li className="page-item" aria-current="page">
                        <button className={pagechange === 3 ? "page-link border-0 rounded-5 paginationcoloractive pagenumber" : "page-link border-0 rounded-5 paginationcolor pagenumber"} onClick={() => { setPagechange(3) }}>3</button>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='col-12 col-md-4 col-lg-3 d-none d-sm-none d-md-block d-lg-block'>
                  <div className='row border border-2 rounded-5 p-2  bg-dark text-light'>
                    <div className='col-10'>
                      Next Page
                    </div>
                    <div className='col-2'>
                      <FiArrowDownRight size='30' />
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-4 d-flex d-sm-flex d-md-none d-lg-none justify-content-center '>
                  <div className='row border border-2 rounded-5 px-3 py-1 p-lg-3 bg-dark text-light'>
                    <div className='col-10'>
                      Next Page
                    </div>
                    <div className='col-2'>
                      <FiArrowDownRight size='30' />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/*tab content3 */}
            <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
              <div>
                 {/*page1 news */}
                <div className={pagechange === 1 ? 'row' : 'row d-none'} >
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4  p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                </div>

                 {/*page2 security */}
                <div className={pagechange === 2 ? 'row' : 'row d-none'} >
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <img src={security} className='img-fluid' alt='whatsnew' />
                    <p className='slidecolor mt-3'><i>Whats New</i></p>
                    <p className='h4'>
                      Why oracle database runs best on oracle linux
                    </p>
                  </div>
                </div>
              </div>
              <div className='row mt-5 '>
                <div className='col-6 col-md-8 col-lg-8'>
                  <nav aria-label="Page navigation">
                    <ul className="pagination gap-3 border-0">
                      <li className="page-item ">
                        <button className={pagechange === 1 ? "page-link border-0 rounded-5 paginationcoloractive pagenumber" : "page-link border-0 rounded-5 paginationcolor pagenumber"} onClick={() => { setPagechange(1) }}>1</button>
                      </li>
                      <li className="page-item" aria-current="page">
                        <button className={pagechange === 2 ? "page-link border-0 rounded-5 paginationcoloractive pagenumber" : "page-link border-0 rounded-5 paginationcolor pagenumber"} onClick={() => { setPagechange(2) }}>2</button>
                      </li>
                      <li className="page-item" aria-current="page">
                        <button className={pagechange === 3 ? "page-link border-0 rounded-5 paginationcoloractive pagenumber" : "page-link border-0 rounded-5 paginationcolor pagenumber"} onClick={() => { setPagechange(3) }}>3</button>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='col-12 col-md-4 col-lg-3 d-none d-sm-none d-md-block d-lg-block'>
                  <div className='row border border-2 rounded-5 p-2  bg-dark text-light'>
                    <div className='col-10'>
                      Next Page
                    </div>
                    <div className='col-2'>
                      <FiArrowDownRight size='30' />
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-4 d-flex d-sm-flex d-md-none d-lg-none justify-content-center '>
                  <div className='row border border-2 rounded-5 px-3 py-1 p-lg-3 bg-dark text-light'>
                    <div className='col-10'>
                      Next Page
                    </div>
                    <div className='col-2'>
                      <FiArrowDownRight size='30' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <Footer />
      </div>
    </>
  );
}

export default Insight;
