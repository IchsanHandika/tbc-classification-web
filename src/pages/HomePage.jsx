import React, { useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faStethoscope, faLungsVirus } from "@fortawesome/free-solid-svg-icons"
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

import NavbarMain from '../components/NavbarMain'
import lungImage from '../assets/img/lung-img.png'
import UGMLogo from '../assets/img/clients/UGM.png'
import KMTETILogo from '../assets/img/clients/KMTETI.png'
import DTETILogo from '../assets/img/clients/DTETI.png'
import Team from '../assets/img/team/unknown.jpg'
import Normal1 from '../assets/img/dataset/normal-1.jpeg'
import Normal2 from '../assets/img/dataset/normal-2.jpeg'
import Normal3 from '../assets/img/dataset/normal-3.jpeg'
import Normal4 from '../assets/img/dataset/normal-4.jpeg'
import Normal5 from '../assets/img/dataset/normal-5.jpeg'
import Tbc1 from '../assets/img/dataset/tbc-1.jpg'
import Tbc2 from '../assets/img/dataset/tbc-2.jpg'
import Tbc3 from '../assets/img/dataset/tbc-3.jpg'
import Tbc4 from '../assets/img/dataset/tbc-4.jpg'

function HomePage() {
  const gridRef = useRef(null);

  useEffect(() => {
    const iso = new Isotope(gridRef.current, {
      itemSelector: ".portfolio-item",
      layoutMode: "masonry",
    });

    const filters = document.querySelectorAll(".portfolio-filters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        filters.forEach((f) => f.classList.remove("filter-active"));
        filter.classList.add("filter-active");

        const filterValue = filter.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
      });
    });

    // Cleanup event listeners on component unmount
    return () => iso.destroy();
  }, []);

  // Chart setting
  const otherSetting = {
    height: 300,
    width: 500,
    yAxis: [{ label: 'case per year' }],
    sx: {
      [`& .${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translateX(-43px)',
      },
    },
  };

    return (
      <>
        <NavbarMain />
        
        <main className="main">

          {/* <!-- Hero Section --> */}
          <section id="home" className="hero section">

            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>Tuberculosis Classification</h1>
                  <p>Do you have tuberculosis? Let's detect it</p>
                  <div className="d-flex">
                    <a href="/classification" className="btn-get-started">Get Started</a>
                    <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center"></a>
                  </div>
                </div>
                <div className="d-flex col-lg-6 order-1 order-lg-2 hero-img justify-content-end">
                  <img src= {lungImage} className="img-fluid animated" alt=""/>
                </div>
              </div>
            </div>

          </section>{/*<!-- /Hero Section --> */}

          {/* <!-- Clients Section --> */}
          <section id="clients" className="clients section light-background">

            <div className="container" data-aos="fade-up">

              <div className="row gy-4 justify-content-md-center">

                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <img src= {UGMLogo} className="img-fluid" alt=""/>
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <img src= {DTETILogo} className="img-fluid" alt=""/>
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <img src= {KMTETILogo} className="img-fluid" alt=""/>
                </div>

              </div>

            </div>

          </section>
          {/* <!-- /Clients Section --> */}

          {/* <!-- About Section --> */}
          <section id="about" className="about section">

            {/* <!-- Section Title --> */}
            <div className="container section-title" data-aos="fade-up">
              <h2>About</h2>
              <p>This website was built to fulfill the assignment of the Biomedical Engineering Special Topics-1 course.</p>
            </div>
            {/* <!-- End Section Title --> */}

            <div className="container">

              <div className="row gy-5">

                <div className="content col-xl-6 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
                  <h3>What is Tuberculosis?</h3>
                  <p>
                  Most typically affecting the lungs, tuberculosis (TB) is an infectious disease caused by bacteria. When TB patients cough, sneeze, or spit, it spreads via the air. It is possible to prevent and cure tuberculosis. It is believed that approximately 25% of the world's population has contracted tuberculosis. Five to ten percent of TB patients will eventually have symptoms and acquire TB illness. It cannot be spread by infected people who are otherwise healthy. Antibiotics are typically used to treat tuberculosis (TB), which can be lethal if left untreated.
                  </p>
                  <a href="#" className="about-btn align-self-center align-self-xl-start"><span>About us</span> <i className="bi bi-chevron-right"></i></a>
                </div>

                <div className="col-xl-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="row">
                    <h5 className="text-center"><strong>Reported cases of tuberculosis in South-East Asia vs Indonesia</strong></h5>
                    <LineChart
                      xAxis={[{ 
                        label: "year",
                        data: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
                        valueFormatter: (data) => data.toString() 
                      }]}
                      series={[
                        {
                          data: [331703, 364761, 442172, 568865, 559847, 384025, 432577, 708658],
                          color: "#3498DB",
                          label: "Indonesia"
                        },
                        {
                          data: [2570000, 2720000, 2690000, 3100000, 3380000, 2560000, 2970000, 3550000],
                          color: "#02B2AF",
                          label: "South-East Asia"
                        }
                      ]}
                      {...otherSetting}
                    />
                    <p className="text-center">
                      (source: WHO)
                    </p>
                  </div>
                </div>

                <div className="content col-xl-6 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
                  <h3>How to Prevent Tuberculosis?</h3>
                  <p>
                  Tuberculosis (TB) is a contagious disease primarily affecting the lungs, caused by Mycobacterium tuberculosis bacteria. It spreads through the air when an infected person coughs, sneezes, or spits. To prevent TB, it is essential to maintain good hygiene, avoid close contact with infected individuals, and improve living conditions to minimize overcrowding. Vaccination with the Bacillus Calmette-Guérin (BCG) vaccine can provide protection, particularly in children. Early diagnosis and prompt treatment of active TB cases are crucial to breaking the chain of transmission.
                  </p>
                </div>

                <div className="content col-xl-6 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
                  <h3>AI for Tuberculosis Diagnosis?</h3>
                  <p>
                  Artificial Intelligence (AI) is revolutionizing the diagnosis of tuberculosis by improving speed and accuracy. Advanced AI algorithms can analyze chest X-rays to detect TB at earlier stages, even in resource-limited settings. These technologies enhance the ability of healthcare providers to identify high-risk cases and ensure timely intervention. Integrating AI into TB control programs can significantly reduce diagnostic delays, optimize treatment outcomes, and contribute to the global effort to eradicate tuberculosis.
                  </p>
                </div>

              </div>

            </div>

          </section>
          {/* <!-- /About Section --> */}

          {/* <!-- Features Section --> */}
          <section id="features" className="features section">

              {/* <!-- Section Title --> */}
              <div className="container section-title" data-aos="fade-up">
                <h2>Features</h2>
                <p>What this website can do?</p>
              </div>
              {/* <!-- End Section Title --> */}

              <div className="container">

                <div className="row gy-4">

                  <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="features-item">
                      <FontAwesomeIcon icon={faEye} style={{color: '#ffbb2c'}} className="fa-2x me-2"/>
                      <h3><a href="/classification" className="stretched-link">TBC Classification</a></h3>
                    </div>
                  </div>{/*<!-- End Feature Item --> */}

                  <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="features-item">
                      <FontAwesomeIcon icon={faLungsVirus} style={{color: '#5578ff'}} className="fa-2x me-2"/>
                      <h3><a href="" className="stretched-link">TBC Segmentation</a></h3>
                    </div>
                  </div>{/*<!-- End Feature Item --> */}

                  <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="features-item">
                      <FontAwesomeIcon icon={faStethoscope} style={{color: '#e80368'}} className="fa-2x me-2"/>
                      <h3><a href="" className="stretched-link">TBC Detection</a></h3>
                    </div>
                  </div>{/*<!-- End Feature Item --> */}

                  <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
                    <div className="features-item">
                      <i className="bi bi-nut" style={{color: '#e361ff'}}></i>
                      <h3><a href="https://chatgpt.com/" className="stretched-link">Chat GPT</a></h3>
                    </div>
                  </div>{/*<!-- End Feature Item --> */}

                </div>

              </div>

          </section>
          {/* <!-- /Features Section --> */}

          {/* <!-- Dataset Section --> */}
          <section id="portfolio" className="portfolio section">

            {/* <!-- Section Title --> */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Datasets</h2>
              <p>Some examples of X-ray images diagnosed as tuberculosis</p>
            </div>
            {/* <!-- End Section Title --> */}

            <div className="container">

              <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-tbc">TBC</li>
                  <li data-filter=".filter-normal">Non-TBC</li>
                </ul>
                {/* <!-- End Portfolio Filters --> */}

                <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200" ref={gridRef}>

                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-normal">
                    <div className="portfolio-content h-100">
                      <img src={Normal1} className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>Normal</h4>
                        <p>Example of a normal image</p>
                        <a href="" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="https://www.kaggle.com/datasets/chirantanacharyya/normal-tuberculosis-covid" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-tbc">
                    <div className="portfolio-content h-100">
                      <img src={Tbc1} className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>TBC</h4>
                        <p>Example of tuberculosis image</p>
                        <a href="" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="https://www.kaggle.com/datasets/chirantanacharyya/normal-tuberculosis-covid" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>{/*<!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-tbc">
                    <div className="portfolio-content h-100">
                      <img src={Tbc2} className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>TBC</h4>
                        <p>Example of tuberculosis image</p>
                        <a href="" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="https://www.kaggle.com/datasets/chirantanacharyya/normal-tuberculosis-covid" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>{/*<!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-normal">
                    <div className="portfolio-content h-100">
                      <img src={Normal2} className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>Normal</h4>
                        <p>Example of a normal image</p>
                        <a href="" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="https://www.kaggle.com/datasets/chirantanacharyya/normal-tuberculosis-covid" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>{/*<!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-normal">
                    <div className="portfolio-content h-100">
                      <img src={Normal3} className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>Normal</h4>
                        <p>Example of a normal image</p>
                        <a href="" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="https://www.kaggle.com/datasets/chirantanacharyya/normal-tuberculosis-covid" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>{/*<!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-tbc">
                    <div className="portfolio-content h-100">
                      <img src={Tbc3} className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>TBC</h4>
                        <p>Example of tuberculosis image</p>
                        <a href="" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="https://www.kaggle.com/datasets/chirantanacharyya/normal-tuberculosis-covid" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>{/*<!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-normal">
                    <div className="portfolio-content h-100">
                      <img src={Normal4} className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>Normal</h4>
                        <p>Example of a normal image</p>
                        <a href="" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="https://www.kaggle.com/datasets/chirantanacharyya/normal-tuberculosis-covid" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>{/*<!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-tbc">
                    <div className="portfolio-content h-100">
                      <img src={Tbc4} className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>TBC</h4>
                        <p>Example of tuberculosis image</p>
                        <a href="" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="https://www.kaggle.com/datasets/chirantanacharyya/normal-tuberculosis-covid" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>{/*<!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-normal">
                    <div className="portfolio-content h-100">
                      <img src={Normal5} className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>Normal</h4>
                        <p>Example of a normal image</p>
                        <a href= '' title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="https://www.kaggle.com/datasets/chirantanacharyya/normal-tuberculosis-covid" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>{/*<!-- End Portfolio Item --> */}

                </div>
                {/* <!-- End Dataset Container --> */}

              </div>

            </div>

          </section>
          {/* <!-- /Dataset Section --> */}

          {/* <!-- Team Section --> */}
          <section id="team" className="team section">

            {/* <!-- Section Title --> */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Team</h2>
              <p>Team members of Group-3 TKTB-1</p>
            </div>
            {/* !-- End Section Title --> */}

            <div className="container">

              <div className="row gy-4 justify-content-md-center">

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                  <div className="team-member">
                    <div className="member-img">
                      <img src= {Team} className="img-fluid" alt=""/>
                      <div className="social">
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Ichsan Dwinanda H</h4>
                      <span>Mahasiswa TKTB-1</span>
                    </div>
                  </div>
                </div>{/*{/*<!-- End Team Member --> */}

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                  <div className="team-member">
                    <div className="member-img">
                      <img src= {Team} className="img-fluid" alt=""/>
                      <div className="social">
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Faiz Ihza Permana</h4>
                      <span>Mahasiswa TKTB-1</span>
                    </div>
                  </div>
                </div>{/*<!-- End Team Member --> */}

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                  <div className="team-member">
                    <div className="member-img">
                      <img src= {Team} className="img-fluid" alt=""/>
                      <div className="social">
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Atthaullah Reyhan P</h4>
                      <span>Mahasiswa TKTB-1</span>
                    </div>
                  </div>
                </div>{/*<!-- End Team Member --> */}

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                  <div className="team-member">
                    <div className="member-img">
                      <img src= {Team} className="img-fluid" alt=""/>
                      <div className="social">
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Galantandra Jabbarul A</h4>
                      <span>Mahasiswa TKTB-1</span>
                    </div>
                  </div>
                </div>{/*<!-- End Team Member --> */}

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                  <div className="team-member">
                    <div className="member-img">
                      <img src= {Team} className="img-fluid" alt=""/>
                      <div className="social">
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Sefvia Lie</h4>
                      <span>Mahasiswa TKTB-1</span>
                    </div>
                  </div>
                </div>{/*<!-- End Team Member --> */}

              </div>

            </div>

          </section>
          {/* <!-- /Team Section --> */}

          {/* <!-- Contact Section --> */}
          <section id="contact" className="contact section">

            {/* <!-- Section Title --> */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Contact</h2>
              <p>Contact us with any criticism, feedback, and suggestions!</p>
            </div>
            {/* <!-- End Section Title --> */}

            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">

              <div className="row gy-4">

                <div className="col-lg-5">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Address</h3>
                      <p>Wisma Inabah 3, Pogung Lor, DIY.</p>
                    </div>
                  </div>{/* <!-- End Info Item --> */}

                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call Us</h3>
                      <p>+62 821 3531 1720</p>
                    </div>
                  </div>{/* <!-- End Info Item --> */}

                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email Us</h3>
                      <p>ichsan.dwinanda.handika@mail.ugm.ac.id</p>
                    </div>
                  </div>{/* <!-- End Info Item --> */}

                </div>

                <div className="col-lg-7">
                  <form className="php-email-form" data-aos="fade-up" data-aos-delay="500">
                    <div className="row gy-4">

                      <div className="col-md-6">
                        <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
                      </div>

                      <div className="col-md-6 ">
                        <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
                      </div>

                      <div className="col-md-12">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
                      </div>

                      <div className="col-md-12">
                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                      </div>

                      <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>

                        <button type="submit">Send Message</button>
                      </div>

                    </div>
                  </form>
                </div>
                {/* !-- End Contact Form --> */}

              </div>

            </div>

          </section>

        </main>
      </>
    )
  }
  
  export default HomePage