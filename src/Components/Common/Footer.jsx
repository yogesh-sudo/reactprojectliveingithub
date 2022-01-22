import React from 'react'
import { Playstore,Apple } from '../../SVG/index.jsx'
const Footer = () => {
    return (
        <>
              {/* ============================ Footer Start ================================== */}
      <footer className="dark-footer skin-dark-footer">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="footer-widget">
                  <img src="assets/img/logo-light.png" className="img-footer" alt="#/" />
                  <div className="footer-add">
                    <p>Collins Street West, Victoria 8007, Australia.</p>
                    <p>+1 246-345-0695</p>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>		
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">Navigations</h4>
                  <ul className="footer-menu">
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="faq.html">FAQs Page</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="blog.html">Blog</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">The Highlights</h4>
                  <ul className="footer-menu">
                    <li><a href="#/">Apartment</a></li>
                    <li><a href="#/">My Houses</a></li>
                    <li><a href="#/">Restaurant</a></li>
                    <li><a href="#/">Nightlife</a></li>
                    <li><a href="#/">Villas</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">My Account</h4>
                  <ul className="footer-menu">
                    <li><a href="#/">My Profile</a></li>
                    <li><a href="#/">My account</a></li>
                    <li><a href="#/">My Property</a></li>
                    <li><a href="#/">Favorites</a></li>
                    <li><a href="#/">Cart</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Download Apps</h4>
                  <a href="#/" className="other-store-link">
                    <div className="other-store-app">
                      <div className="os-app-icon">
                        <span><Playstore/></span>
                      </div>
                      <div className="os-app-caps">
                        Google Play
                        <span>Get It Now</span>
                      </div>
                    </div>
                  </a>
                  <a href="#/" className="other-store-link">
                    <div className="other-store-app">
                      <div className="os-app-icon">
                        <span><Apple/></span>
                      </div>
                      <div className="os-app-caps">
                        App Store
                        <span>Now it Available</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p className="mb-0">© 2021 Resido. Designd By <a href="#/">Themez Hub</a> All Rights Reserved</p>
              </div>
              <div className="col-lg-6 col-md-6 text-right">
                <ul className="footer-bottom-social">
                  <li><a href="#/"><i className="icofont-facebook" /></a></li>
                  <li><a href="#/"><i className="icofont-twitter" /></a></li>
                  <li><a href="#/"><i className="icofont-instagram" /></a></li>
                  <li><a href="#/"><i className="icofont-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Log In Modal */}
      <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="registermodal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="registermodal">
              <span className="mod-close" data-bs-dismiss="modal" aria-hidden="true"><i className="icofont-close" /></span>
              <div className="modal-body">
                <h4 className="modal-header-title">Log In</h4>
                <div className="login-form">
                  <form>
                    <div className="form-group">
                      <label>User Name</label>
                      <div className="input-with-icon">
                        <input type="text" className="form-control" placeholder="Username" />
                        <i className="icofont-user" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <div className="input-with-icon">
                        <input type="password" className="form-control" placeholder="*******" />
                        <i className="icofont-unlock" />
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-md full-width btn-theme-light-2 rounded">Login</button>
                    </div>
                  </form>
                </div>
                <div className="modal-divider"><span>Or login via</span></div>
                <div className="social-login mb-3">
                  <ul>
                    <li><a href="#/" className="btn connect-fb"><i className="icofont-facebook" />Facebook</a></li>
                    <li><a href="#/" className="btn connect-google"><i className="icofont-google" />Google+</a></li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="mt-5"><a href="#/" className="link">Forgot password?</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
        {/* Sign Up Modal */}
        <div className="modal fade signup" id="signup" tabIndex={-1} role="dialog" aria-labelledby="sign-up" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="sign-up">
              <span className="mod-close" data-bs-dismiss="modal" aria-hidden="true"><i className="icofont-close" /></span>
              <div className="modal-body">
                <h4 className="modal-header-title">Sign Up</h4>
                <div className="login-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <input type="text" className="form-control" placeholder="Full Name" />
                            <i className="icofont-user" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <input type="email" className="form-control" placeholder="Email" />
                            <i className="icofont-email" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <input type="text" className="form-control" placeholder="Username" />
                            <i className="icofont-user" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <input type="password" className="form-control" placeholder="*******" />
                            <i className="icofont-unlock" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <input type="password" className="form-control" placeholder="123 546 5847" />
                            <i className="icofont-phone-handset" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <select className="form-control">
                              <option>As a Customer</option>
                              <option>As a Agent</option>
                              <option>As a Agency</option>
                            </select>
                            <i className="icofont-briefcase" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-md full-width btn-theme-light-2 rounded">Sign Up</button>
                    </div>
                  </form>
                </div>
                <div className="modal-divider"><span>Or login via</span></div>
                <div className="social-login mb-3">
                  <ul>
                    <li><a href="#/" className="btn connect-fb"><i className="icofont-facebook" />Facebook</a></li>
                    <li><a href="#/" className="btn connect-google"><i className="icofont-google" />Google+</a></li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="mt-5"><i className="icofont-user mr-1" />Already Have An Account? <a href="#/" className="link">Go For LogIn</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
        <a id="back2Top" className="top-scroll" title="Back to top" href="#/"><i className="icofont-arrow-up" /></a>
        </>
    )
}

export default Footer
