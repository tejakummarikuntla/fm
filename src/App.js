import React from 'react';
// import './App.css';
import bgExploit from "./img/Podcast/Exploiting_v2.png"

class App extends React.Component{
  render(){
    return (
      <div className="App">

              <header className="header-area">
                <div className="classy-nav-container breakpoint-off">
                  <div className="container">
                        <nav className="classy-navbar justify-content-between" id="conferNav">

                            <a className="nav-brand" href="./index.html"><img src="./img/core-img/site-logo.png" alt="" height="100" width="200"/></a>
                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span></span><span></span><span></span></span>
                            </div>

                            <div className="classy-menu">
                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                </div>
                                <div className="classynav">
                                    <ul id="nav">
                                        <li className="active"><a href="index.html">Home</a></li>
                                        <li><a href="https://tejakummarikuntla.github.io/blog/" target="_blank">Blog</a></li>
                                        <li><a href="podcast.html" target="_blank">Podcast</a></li>
                                        <li><a href="https://tejakummarikuntla.github.io/notes/" target="_blank">Notes</a></li>
                                    </ul>

                                    <a href="#contact" className="btn confer-btn mt-3 mt-lg-0 ml-3 ml-lg-5">Ping<i className="zmdi zmdi-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </nav>
                  </div>
                </div>
              </header>
              
              <section className="about-us-countdown-area section-padding-100-0" id="about">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-12 col-md-6">
                          <div className="about-content-text mb-80">
                              <h6 className="wow fadeInUp" data-wow-delay="300ms">   </h6>
                              <h3 className="wow fadeInUp" data-wow-delay="300ms">Exploiting with Teja Kummarikuntla</h3>
                              <p className="wow fadeInUp" data-wow-delay="300ms">Spending time towards technologies fascinates me to learn and deconstruct the things deeper. Of course, technology shifts so swiftly. But, my curiosity in Programming and Math stays connected with me. Being part of multiple open communities helped me personally towards leading without a title. This Podcast is all about sharing potential and purposeful exploits by various people in different situations in life, technology, business etc.</p>
      
      
                              <h6 className="wow fadeInUp" data-wow-delay="300ms"> Listen on  </h6>
                              <ul className='c-subscribe-list'>
                                  <li className='c-subscribe-list__item'>
                                    <a href='#' className='c-subscribe-list__link' target='_blank' rel='noopener'>
                                      <img className='c-subscribe-list__icon' src='assets/icons/applebc64.svg?v=de82c9dabb' alt='Apple Podcasts'/>
                                      <span className='c-subscribe-list__name'>Apple Podcasts</span>
                                    </a>
                                  </li>
                                
                                  <li className='c-subscribe-list__item'>
                                    <a href='#' className='c-subscribe-list__link' target='_blank' rel='noopener'>
                                      <img className='c-subscribe-list__icon' src='assets/icons/overcastbc64.svg?v=de82c9dabb' alt='Overcast'/>
                                      <span className='c-subscribe-list__name'>Overcast</span>
                                    </a>
                                  </li>
                                
                                  <li className='c-subscribe-list__item'>
                                    <a href='https://sptfy.com/tejakummarikuntla' className='c-subscribe-list__link' target='_blank' rel='noopener'>
                                      <img className='c-subscribe-list__icon' src='assets/icons/spotifybc64.svg?v=de82c9dabb' alt='Spotify'/>
                                      <span className='c-subscribe-list__name'>Spotify</span>
                                    </a>
                                  </li>
                                
                                  <li className='c-subscribe-list__item u-hidden'>
                                    <a href='#' className='c-subscribe-list__link' target='_blank' rel='noopener'>
                                      <img className='c-subscribe-list__icon' src='assets/icons/pocketcastsbc64.svg?v=de82c9dabb' alt='Pocket Casts'/>
                                      <span className='c-subscribe-list__name'>Pocket Casts</span>
                                    </a>
                                  </li>
                                
                                  <li className='c-subscribe-list__item u-hidden'>
                                    <a href='#' className='c-subscribe-list__link' target='_blank' rel='noopener'>
                                      <img className='c-subscribe-list__icon' src='assets/icons/castrobc64.svg?v=de82c9dabb' alt='Castro'/>
                                      <span className='c-subscribe-list__name'>Castro</span>
                                    </a>
                                  </li>
                                
                                  <li className='c-subscribe-list__item u-hidden'>
                                    <a href='#' className='c-subscribe-list__link' target='_blank' rel='noopener'>
                                      <img className='c-subscribe-list__icon' src='assets/icons/breakerbc64.svg?v=de82c9dabb' alt='Breaker'/>
                                      <span className='c-subscribe-list__name'>Breaker</span>
                                    </a>
                                  </li>
                                
                                  <li className='c-subscribe-list__item'>
                                    <a href='#' className='c-subscribe-list__link' target='_blank' rel='noopener'>
                                      <img className='c-subscribe-list__icon' src='assets/icons/googlepodcastsbc64.svg?v=de82c9dabb' alt='Google Podcasts' />
                                      <span className='c-subscribe-list__name'>Google Podcasts</span>
                                    </a>
                                  </li>
                                
                                  <li className='c-subscribe-list__item u-hidden'>
                                    <a href='#' className='c-subscribe-list__link' target='_blank' rel='noopener'>
                                      <img className='c-subscribe-list__icon' src='assets/icons/radiopublicbc64.svg?v=de82c9dabb' alt='RadioPublic' />
                                      <span className='c-subscribe-list__name'>RadioPublic</span>
                                    </a>
                                  </li>
                                
                                  <li className='c-subscribe-list__item u-hidden'>
                                    <a href='#' className='c-subscribe-list__link' target='_blank' rel='noopener'>
                                      <img className='c-subscribe-list__icon' src='assets/icons/rssbc64.svg?v=de82c9dabb' alt='RSS Feed' />
                                      <span className='c-subscribe-list__name'>RSS</span>
                                    </a>
                                  </li>
                                </ul>                    </div>
                      </div>
      
                      
      
                      
                      <div className="col-12 col-md-6">
                          <div className="about-thumb mb-80 wow fadeInUp" data-wow-delay="300ms">
                              <img src="img/Podcast/Exploiting_v2_400s.png" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
      
              
              <div className="countdown-up-area">
                  <div className="container">
                      <div className="row align-items-center"> 
                          <div className="col-12 col-md-3"> 
                          </div>
                      </div>
                  </div>
                </div>
          </section>


          <a name="podcast"></a>
          <section class="our-blog-area bg-img bg-gradient-overlay section-padding-100-60" style= {{bgExploit}}>
        <div class="container">
            <div class="row">    
                <div class="col-12">
                    
                    <div class="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Latest</p>
                        <h4>Episodes</h4>
                    </div>
                </div>

                <div class="single-blog-area wow fadeInUp">
                    <div class='card' data-wow-delay="300ms" >
                        <div class="card-body" data-wow-delay="300ms">
                            <div id="Container">
                                <iframe src="https://open.spotify.com/embed-podcast/episode/2CITL9oJJYtJVSIDR22VNr" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                            <div class="single-blog-text tex  t-center">
                                <a class="blog-title">Luis Serrano: On Unlocking The Intuition Behind Math and Machine Learning</a>
                                    <div class="post-meta">
                                        <a class="post-date"><i class="zmdi zmdi-alarm-check"></i> July 6, 2020</a>
                                        <a class="post-author" href="https://www.linkedin.com/in/luisgserrano/" target="_blank"><i class="zmdi zmdi-account"></i> Luis Serrano</a>
                                    </div>
                                <p class="card-text text-center">On this episode, I got a chance to speak with Luis about how unlocking the intuition behind mathematics and machine learning could impact your thinking and thought process of approaching any problem. Intense passion towards teaching resulted in authoring “Grokking Machine Learning”  where someone can understand and teach Machine Learning with only stories..</p>
                            </div>
                        </div>
                        <div class="blog-btn">
                            <a href="./episodes/ep_4.html" target="_blank"><i class="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>


                <div class="single-blog-area wow fadeInUp">
                    <div class='card' data-wow-delay="300ms" >
                        <div class="card-body" data-wow-delay="300ms">
                            <div id="Container">
                                <iframe src="https://open.spotify.com/embed-podcast/episode/5RbgqW4hHQTqClSP8xzrOr" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                            <div class="single-blog-text text-center">
                                <a class="blog-title">Balamurugan SP: On Transforming Vernacular Learning for 6 Years</a>
                                    <div class="post-meta">
                                        <a class="post-date"><i class="zmdi zmdi-alarm-check"></i> June 29, 2020</a>
                                        <a class="post-author" href="https://www.linkedin.com/in/spbalamurugan1" target="_blank"><i class="zmdi zmdi-account"></i> S P Balamurugan</a>
                                    </div>
                                <p class="card-text text-center">How does vernacular learning can transform the learning styles that could be more powerful and transparent?
                                    On Guvi’s 6th anniversary, Balamurugan and I spoke about the tremendous impact of Guvi that was created in the past 6 years.</p>
                            </div>
                        </div>
                        <div class="blog-btn">
                            <a href="https://open.spotify.com/episode/4bsiOTn5VFHW3o6gpG7x7t" target="_blank"><i class="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="col-12">
            <div class="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp" data-wow-delay="300ms">
                <a class="btn confer-btn-white" href="./episodes.html" target="_blank">View all <i class="zmdi zmdi-long-arrow-right"></i></a>
            </div>
        </div>
        
    </section>

          <a name="contact"></a>

          <footer class="footer-area bg-img bg-overlay-2 section-padding-100-0">
          
          <div class="main-footer-area">
              <div class="container">
                  <div class="row">
                      <div class="col-12 col-sm-6 col-lg-3">
                          <div class="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                              <a href="#" class="footer-logo"><img src="img/core-img/site-logo.png" height="100" width="200" alt="" /></a>
                              <p>Learn | Innovate | Deliver</p>
  
                              <div class="social-info">
                                  <a href="https://www.facebook.com/teja.kummarikuntla" target="_blank" ><i class="zmdi zmdi-facebook"></i></a>
                                  <a href="https://www.instagram.com/tejakummarikuntla" target="_blank"><i class="zmdi zmdi-instagram"></i></a>
                                  <a href="https://www.twitter.com/crossmux" target="_blank"><i class="zmdi zmdi-twitter"></i></a>
                                  <a href="https://www.linkedin.com/in/tejakummarikuntla" target="_blank"><i class="zmdi zmdi-linkedin"></i></a>
                                  <a href="https://www.github.com/tejakummarikuntla" target="_blank"><i class="zmdi zmdi-github"></i></a>
                                  <a href="https://stackoverflow.com/users/8700619/teja-kummarikuntla" target="_blank"><i class="zmdi zmdi-stackoverflow"></i></a>
                              </div>
                          </div>
                      </div>
  
                      <div class="col-12 col-sm-6 col-lg-3">
                          <div class="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                              <h5 class="widget-title">Contact</h5>
  
                              <div class="footer-contact-info">
                                  <p><i class="zmdi zmdi-email"></i> <a href="mailto:tejakummarikuntla@gmail.com" style={{color: "#9293BC"}}>teja.kummarikuntla@gmail.com </a></p>
                                  <p><i class="zmdi zmdi-globe" ></i> <a href="https://tejakummarikuntla.github.io" style={{color: "#9293BC"}}> www.tejakummarikuntla.github.io </a></p>
                              </div>
                          </div>
                      </div>
  
                    
  
                      <div class="col-12 col-sm-6 col-lg-3">
                          <div class="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                              <h5 class="widget-title">Gallery</h5>
  
                              <div class="footer-gallery">
                                  <div class="row">
                                      <div class="col-4">
                                          <a href="img/gallery/agora.jpg" class="single-gallery-item"><img src="img/gallery/agora.jpg" alt=""/></a>
                                      </div>
                                      <div class="col-4">
                                          <a href="img/gallery/devc_f8.PNG" class="single-gallery-item"><img src="img/gallery/devc_f8.PNG" alt=""/></a>
                                      </div>
                                      <div class="col-4">
                                          <a href="img/gallery/dsc_org_team.jpg" class="single-gallery-item"><img src="img/gallery/dsc_org_team.jpg" alt=""/></a>
                                      </div>
                                      <div class="col-4">
                                          <a href="img/gallery/fcs_day0.jpeg" class="single-gallery-item"><img src="img/gallery/fcs_day0.jpeg" alt=""/></a>
                                      </div>
                                      <div class="col-4">
                                          <a href="img/gallery/fnPlus.jpeg" class="single-gallery-item"><img src="img/gallery/fnPlus.jpeg" alt=""/></a>
                                      </div>
                                      <div class="col-4">
                                          <a href="img/gallery/googlepi.jpg" class="single-gallery-item"><img src="img/gallery/googlepi.jpg" alt=""/></a>
                                      </div>
                                      <div class="col-4">
                                          <a href="img/gallery/hackforgood.jpg" class="single-gallery-item"><img src="img/gallery/hackforgood.jpg" alt=""/></a>
                                      </div>
                                      <div class="col-4">
                                          <a href="img/gallery/Ict_academy.PNG" class="single-gallery-item"><img src="img/gallery/Ict_academy.PNG" alt=""/></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <div class="container">
              <div class="copywrite-content">
                  <div class="row">
                      <div class="col-12 col-md-6">
                          <div class="copywrite-text">
                              
                          </div>
                      </div>
                      <div class="col-12 col-md-6">
                          <div class="footer-menu">
                              <ul class="nav">
                                  <li><a href="#"><i class="zmdi zmdi-circle"></i> Terms of Service</a></li>
                                  <li><a href="#"><i class="zmdi zmdi-circle"></i> Privacy Policy</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>

    </div>
    );
  }
}


export default App;
