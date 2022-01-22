import React from 'react'

const Home5 = () => {
    return (
        <>
          <div>
        {/* ============================ Hero Banner  Start================================== */}
        <div className="image-cover hero-banner" style={{background: '#eff6ff url(assets/img/home-2.png) no-repeat'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-md-11 col-sm-12">
                <div className="inner-banner-text text-center">
                  <p className="lead-i">Amet consectetur adipisicing <span className="badge badge-success">New</span></p>
                  <h2><span className="font-normal">Find Your</span> Perfect Place.</h2>
                </div>
                <div className="full-search-2 eclip-search italian-search hero-search-radius shadow-hard mt-5">
                  <div className="hero-search-content">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 b-r">
                        <div className="form-group">
                          <div className="choose-propert-type">
                            <ul>
                              <li>
                                <input id="cp-1" className="checkbox-custom" name="cpt" type="radio" defaultChecked />
                                <label htmlFor="cp-1" className="checkbox-custom-label">Buy</label>
                              </li>
                              <li>
                                <input id="cp-2" className="checkbox-custom" name="cpt" type="radio" />
                                <label htmlFor="cp-2" className="checkbox-custom-label">Rent</label>
                              </li>
                              <li>
                                <input id="cp-3" className="checkbox-custom" name="cpt" type="radio" />
                                <label htmlFor="cp-3" className="checkbox-custom-label">Sold</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-5 col-sm-12 p-0 elio">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <input type="text" className="form-control" placeholder="Search for a location" />
                            <img src="assets/img/pin.svg" width={20} />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-12">
                        <div className="form-group">
                          <a href="#/" className="btn search-btn black">Search</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================ Hero Banner End ================================== */}
        {/* ================= Explore Property ================= */}
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10 text-center">
                <div className="sec-heading center">
                  <h2>Explore Good places</h2>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Property */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="property-listing property-2">
                  <div className="listing-img-wrapper">
                    <div className="list-img-slide">
                      <div className="click">
                        <div><a href="single-property-1.html"><img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-9.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-10.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-wrapper">
                    <div className="listing-short-detail-wrap">
                      <div className="listing-short-detail">
                        <span className="property-type">For Rent</span>
                        <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">Banyon Tree Realty</a></h4>
                      </div>
                      <div className="listing-short-detail-flex">
                        <h6 className="listing-card-info-price">$7,000</h6>
                      </div>
                    </div>
                  </div>
                  <div className="price-features-wrapper">
                    <div className="list-fx-features">
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-footer">
                    <div className="footer-first">
                      <div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="" />210 Zirak Road, Canada</div>
                    </div>
                    <div className="footer-flex">
                      <a href="property-detail.html" className="prt-view">View</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Property */}
              {/* Single Property */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="property-listing property-2">
                  <div className="listing-img-wrapper">
                    <div className="list-img-slide">
                      <div className="click">
                        <div><a href="single-property-1.html"><img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-11.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-12.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-wrapper">
                    <div className="listing-short-detail-wrap">
                      <div className="listing-short-detail">
                        <span className="property-type">For Rent</span>
                        <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">Blue Reef Properties</a></h4>
                      </div>
                      <div className="listing-short-detail-flex">
                        <h6 className="listing-card-info-price">$8,400</h6>
                      </div>
                    </div>
                  </div>
                  <div className="price-features-wrapper">
                    <div className="list-fx-features">
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-footer">
                    <div className="footer-first">
                      <div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="" />210 Zirak Road, Canada</div>
                    </div>
                    <div className="footer-flex">
                      <a href="property-detail.html" className="prt-view">View</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Property */}
              {/* Single Property */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="property-listing property-2">
                  <div className="listing-img-wrapper">
                    <div className="list-img-slide">
                      <div className="click">
                        <div><a href="single-property-1.html"><img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-13.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-14.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-wrapper">
                    <div className="listing-short-detail-wrap">
                      <div className="listing-short-detail">
                        <span className="property-type">For Rent</span>
                        <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">Beacon Homes LLC</a></h4>
                      </div>
                      <div className="listing-short-detail-flex">
                        <h6 className="listing-card-info-price">$9,200</h6>
                      </div>
                    </div>
                  </div>
                  <div className="price-features-wrapper">
                    <div className="list-fx-features">
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-footer">
                    <div className="footer-first">
                      <div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="" />210 Zirak Road, Canada</div>
                    </div>
                    <div className="footer-flex">
                      <a href="property-detail.html" className="prt-view">View</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Property */}
              {/* Single Property */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="property-listing property-2">
                  <div className="listing-img-wrapper">
                    <div className="list-img-slide">
                      <div className="click">
                        <div><a href="single-property-1.html"><img src="assets/img/p-4.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-15.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-16.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-wrapper">
                    <div className="listing-short-detail-wrap">
                      <div className="listing-short-detail">
                        <span className="property-type">For Rent</span>
                        <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">Bluebell Real Estate</a></h4>
                      </div>
                      <div className="listing-short-detail-flex">
                        <h6 className="listing-card-info-price">$6,500</h6>
                      </div>
                    </div>
                  </div>
                  <div className="price-features-wrapper">
                    <div className="list-fx-features">
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-footer">
                    <div className="footer-first">
                      <div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="" />210 Zirak Road, Canada</div>
                    </div>
                    <div className="footer-flex">
                      <a href="property-detail.html" className="prt-view">View</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Property */}
              {/* Single Property */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="property-listing property-2">
                  <div className="listing-img-wrapper">
                    <div className="list-img-slide">
                      <div className="click">
                        <div><a href="single-property-1.html"><img src="assets/img/p-5.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-16.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-17.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-wrapper">
                    <div className="listing-short-detail-wrap">
                      <div className="listing-short-detail">
                        <span className="property-type">For Rent</span>
                        <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">Found Property Group</a></h4>
                      </div>
                      <div className="listing-short-detail-flex">
                        <h6 className="listing-card-info-price">$2,850</h6>
                      </div>
                    </div>
                  </div>
                  <div className="price-features-wrapper">
                    <div className="list-fx-features">
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-footer">
                    <div className="footer-first">
                      <div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="" />210 Zirak Road, Canada</div>
                    </div>
                    <div className="footer-flex">
                      <a href="property-detail.html" className="prt-view">View</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Property */}
              {/* Single Property */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="property-listing property-2">
                  <div className="listing-img-wrapper">
                    <div className="list-img-slide">
                      <div className="click">
                        <div><a href="single-property-1.html"><img src="assets/img/p-6.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-12.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-25.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-wrapper">
                    <div className="listing-short-detail-wrap">
                      <div className="listing-short-detail">
                        <span className="property-type">For Rent</span>
                        <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">Strive Partners Realty</a></h4>
                      </div>
                      <div className="listing-short-detail-flex">
                        <h6 className="listing-card-info-price">$8,100</h6>
                      </div>
                    </div>
                  </div>
                  <div className="price-features-wrapper">
                    <div className="list-fx-features">
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-footer">
                    <div className="footer-first">
                      <div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="" />210 Zirak Road, Canada</div>
                    </div>
                    <div className="footer-flex">
                      <a href="property-detail.html" className="prt-view">View</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Property */}
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <a href="listings-list-with-sidebar.html" className="btn btn-theme-light-2 rounded">Browse More Properties</a>
              </div>
            </div>
          </div>	
        </section>
        {/* ================================= Explore Property =============================== */}
        {/* ============================ Property Location Start ================================== */}
        <section className="bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10 text-center">
                <div className="sec-heading center">
                  <h2>Find By Locations</h2>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="location-property-wrap">
                  <div className="location-property-thumb">
                    <a href="listings-list-with-sidebar.html"><img src="assets/img/c-1.png" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="location-property-content">
                    <div className="lp-content-flex">
                      <h4 className="lp-content-title">San Francisco, California</h4>
                      <span>12 Properties</span>
                    </div>
                    <div className="lp-content-right">
                      <a href="listings-list-with-sidebar.html" className="lp-property-view"><i className="ti-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="location-property-wrap">
                  <div className="location-property-thumb">
                    <a href="listings-list-with-sidebar.html"><img src="assets/img/c-2.png" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="location-property-content">
                    <div className="lp-content-flex">
                      <h4 className="lp-content-title">Dunao, California</h4>
                      <span>142 Properties</span>
                    </div>
                    <div className="lp-content-right">
                      <a href="listings-list-with-sidebar.html" className="lp-property-view"><i className="ti-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="location-property-wrap">
                  <div className="location-property-thumb">
                    <a href="listings-list-with-sidebar.html"><img src="assets/img/c-3.png" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="location-property-content">
                    <div className="lp-content-flex">
                      <h4 className="lp-content-title">Liverpool, London</h4>
                      <span>17 Properties</span>
                    </div>
                    <div className="lp-content-right">
                      <a href="listings-list-with-sidebar.html" className="lp-property-view"><i className="ti-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="location-property-wrap">
                  <div className="location-property-thumb">
                    <a href="listings-list-with-sidebar.html"><img src="assets/img/c-4.png" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="location-property-content">
                    <div className="lp-content-flex">
                      <h4 className="lp-content-title">San Francisco, New York</h4>
                      <span>72 Properties</span>
                    </div>
                    <div className="lp-content-right">
                      <a href="listings-list-with-sidebar.html" className="lp-property-view"><i className="ti-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="location-property-wrap">
                  <div className="location-property-thumb">
                    <a href="listings-list-with-sidebar.html"><img src="assets/img/c-5.png" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="location-property-content">
                    <div className="lp-content-flex">
                      <h4 className="lp-content-title">New Orleans, Louisiana</h4>
                      <span>102 Properties</span>
                    </div>
                    <div className="lp-content-right">
                      <a href="listings-list-with-sidebar.html" className="lp-property-view"><i className="ti-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="location-property-wrap">
                  <div className="location-property-thumb">
                    <a href="listings-list-with-sidebar.html"><img src="assets/img/c-6.png" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="location-property-content">
                    <div className="lp-content-flex">
                      <h4 className="lp-content-title">Los Angeles</h4>
                      <span>95 Properties</span>
                    </div>
                    <div className="lp-content-right">
                      <a href="listings-list-with-sidebar.html" className="lp-property-view"><i className="ti-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <a href="listings-list-with-sidebar.html" className="btn btn-theme-light rounded">Browse More Locations</a>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Property Location End ================================== */}
        {/* ============================ All Property ================================== */}
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10 text-center">
                <div className="sec-heading center">
                  <h2>Featured Property For Sale</h2>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
              </div>
            </div>
            <div className="row list-layout">
              {/* Single Property Start */}
              <div className="col-lg-6 col-md-12">
                <div className="property-listing property-1">
                  <div className="listing-img-wrapper">
                    <a href="single-property-2.html">
                      <img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt="" />
                    </a>
                  </div>
                  <div className="listing-content">
                    <div className="listing-detail-wrapper-box">
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name"><a href="single-property-2.html">Resort Valley Ocs</a></h4>
                          <div className="fr-can-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="reviews_text">(42 Reviews)</span>
                          </div>
                          <span className="prt-types sale">For Sale</span>
                        </div>
                        <div className="list-price">
                          <h6 className="listing-card-info-price">$7,000</h6>
                        </div>
                      </div>
                    </div>
                    <div className="price-features-wrapper">
                      <div className="list-fx-features">
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                        </div>
                      </div>
                    </div>
                    <div className="listing-footer-wrapper">
                      <div className="listing-locate">
                        <span className="listing-location"><i className="ti-location-pin" />Quice Market, Canada</span>
                      </div>
                      <div className="listing-detail-btn">
                        <a href="single-property-2.html" className="more-btn">View</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Property End */}
              {/* Single Property Start */}
              <div className="col-lg-6 col-md-12">
                <div className="property-listing property-1">
                  <div className="listing-img-wrapper">
                    <a href="single-property-2.html">
                      <img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt="" />
                    </a>
                  </div>
                  <div className="listing-content">
                    <div className="listing-detail-wrapper-box">
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name"><a href="single-property-2.html">Adobe Property Advisors</a></h4>
                          <div className="fr-can-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="reviews_text">(42 Reviews)</span>
                          </div>
                          <span className="prt-types rent">For Rent</span>
                        </div>
                        <div className="list-price">
                          <h6 className="listing-card-info-price">$6,800</h6>
                        </div>
                      </div>
                    </div>
                    <div className="price-features-wrapper">
                      <div className="list-fx-features">
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                        </div>
                      </div>
                    </div>
                    <div className="listing-footer-wrapper">
                      <div className="listing-locate">
                        <span className="listing-location"><i className="ti-location-pin" />Quice Market, Canada</span>
                      </div>
                      <div className="listing-detail-btn">
                        <a href="single-property-2.html" className="more-btn">View</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Property End */}
              {/* Single Property Start */}
              <div className="col-lg-6 col-md-12">
                <div className="property-listing property-1">
                  <div className="listing-img-wrapper">
                    <a href="single-property-2.html">
                      <img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="" />
                    </a>
                  </div>
                  <div className="listing-content">
                    <div className="listing-detail-wrapper-box">
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name"><a href="single-property-2.html">Bluebell Real Estate</a></h4>
                          <div className="fr-can-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="reviews_text">(42 Reviews)</span>
                          </div>
                          <span className="prt-types rent">For Rent</span>
                        </div>
                        <div className="list-price">
                          <h6 className="listing-card-info-price">$7,000</h6>
                        </div>
                      </div>
                    </div>
                    <div className="price-features-wrapper">
                      <div className="list-fx-features">
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                        </div>
                      </div>
                    </div>
                    <div className="listing-footer-wrapper">
                      <div className="listing-locate">
                        <span className="listing-location"><i className="ti-location-pin" />Quice Market, Canada</span>
                      </div>
                      <div className="listing-detail-btn">
                        <a href="single-property-2.html" className="more-btn">View</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Property End */}
              {/* Single Property Start */}
              <div className="col-lg-6 col-md-12">
                <div className="property-listing property-1">
                  <div className="listing-img-wrapper">
                    <a href="single-property-2.html">
                      <img src="assets/img/p-4.jpg" className="img-fluid mx-auto" alt="" />
                    </a>
                  </div>
                  <div className="listing-content">
                    <div className="listing-detail-wrapper-box">
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name"><a href="single-property-2.html">Agile Real Estate Group</a></h4>
                          <div className="fr-can-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="reviews_text">(42 Reviews)</span>
                          </div>
                          <span className="prt-types sale">For Sale</span>
                        </div>
                        <div className="list-price">
                          <h6 className="listing-card-info-price">$8,100</h6>
                        </div>
                      </div>
                    </div>
                    <div className="price-features-wrapper">
                      <div className="list-fx-features">
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                        </div>
                      </div>
                    </div>
                    <div className="listing-footer-wrapper">
                      <div className="listing-locate">
                        <span className="listing-location"><i className="ti-location-pin" />Quice Market, Canada</span>
                      </div>
                      <div className="listing-detail-btn">
                        <a href="single-property-2.html" className="more-btn">View</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Property End */}
              {/* Single Property Start */}
              <div className="col-lg-6 col-md-12">
                <div className="property-listing property-1">
                  <div className="listing-img-wrapper">
                    <a href="single-property-2.html">
                      <img src="assets/img/p-5.jpg" className="img-fluid mx-auto" alt="" />
                    </a>
                  </div>
                  <div className="listing-content">
                    <div className="listing-detail-wrapper-box">
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name"><a href="single-property-2.html">Nestled Real Estate</a></h4>
                          <div className="fr-can-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="reviews_text">(42 Reviews)</span>
                          </div>
                          <span className="prt-types sale">For Sale</span>
                        </div>
                        <div className="list-price">
                          <h6 className="listing-card-info-price">$5,700</h6>
                        </div>
                      </div>
                    </div>
                    <div className="price-features-wrapper">
                      <div className="list-fx-features">
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                        </div>
                      </div>
                    </div>
                    <div className="listing-footer-wrapper">
                      <div className="listing-locate">
                        <span className="listing-location"><i className="ti-location-pin" />Quice Market, Canada</span>
                      </div>
                      <div className="listing-detail-btn">
                        <a href="single-property-2.html" className="more-btn">View</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Property End */}
              {/* Single Property Start */}
              <div className="col-lg-6 col-md-12">
                <div className="property-listing property-1">
                  <div className="listing-img-wrapper">
                    <a href="single-property-2.html">
                      <img src="assets/img/p-6.jpg" className="img-fluid mx-auto" alt="" />
                    </a>
                  </div>
                  <div className="listing-content">
                    <div className="listing-detail-wrapper-box">
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name"><a href="single-property-2.html">Flow Group Real Estate</a></h4>
                          <div className="fr-can-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="reviews_text">(42 Reviews)</span>
                          </div>
                          <span className="prt-types rent">For Rent</span>
                        </div>
                        <div className="list-price">
                          <h6 className="listing-card-info-price">$5,900</h6>
                        </div>
                      </div>
                    </div>
                    <div className="price-features-wrapper">
                      <div className="list-fx-features">
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                        </div>
                      </div>
                    </div>
                    <div className="listing-footer-wrapper">
                      <div className="listing-locate">
                        <span className="listing-location"><i className="ti-location-pin" />Quice Market, Canada</span>
                      </div>
                      <div className="listing-detail-btn">
                        <a href="single-property-2.html" className="more-btn">View</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Property End */}
              {/* Single Property Start */}
              <div className="col-lg-6 col-md-12">
                <div className="property-listing property-1">
                  <div className="listing-img-wrapper">
                    <a href="single-property-2.html">
                      <img src="assets/img/p-7.jpg" className="img-fluid mx-auto" alt="" />
                    </a>
                  </div>
                  <div className="listing-content">
                    <div className="listing-detail-wrapper-box">
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name"><a href="single-property-2.html">Strive Partners Realty</a></h4>
                          <div className="fr-can-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="reviews_text">(42 Reviews)</span>
                          </div>
                          <span className="prt-types sale">For Sale</span>
                        </div>
                        <div className="list-price">
                          <h6 className="listing-card-info-price">$6,200</h6>
                        </div>
                      </div>
                    </div>
                    <div className="price-features-wrapper">
                      <div className="list-fx-features">
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                        </div>
                      </div>
                    </div>
                    <div className="listing-footer-wrapper">
                      <div className="listing-locate">
                        <span className="listing-location"><i className="ti-location-pin" />Quice Market, Canada</span>
                      </div>
                      <div className="listing-detail-btn">
                        <a href="single-property-2.html" className="more-btn">View</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Property End */}
              {/* Single Property Start */}
              <div className="col-lg-6 col-md-12">
                <div className="property-listing property-1">
                  <div className="listing-img-wrapper">
                    <a href="single-property-2.html">
                      <img src="assets/img/p-8.jpg" className="img-fluid mx-auto" alt="" />
                    </a>
                  </div>
                  <div className="listing-content">
                    <div className="listing-detail-wrapper-box">
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name"><a href="single-property-2.html">Black Oak Realty</a></h4>
                          <div className="fr-can-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="reviews_text">(42 Reviews)</span>
                          </div>
                          <span className="prt-types rent">For Rent</span>
                        </div>
                        <div className="list-price">
                          <h6 className="listing-card-info-price">$8,400</h6>
                        </div>
                      </div>
                    </div>
                    <div className="price-features-wrapper">
                      <div className="list-fx-features">
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="" /></div>3 Beds
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="" /></div>1 Bath
                        </div>
                        <div className="listing-card-info-icon">
                          <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="" /></div>800 sqft
                        </div>
                      </div>
                    </div>
                    <div className="listing-footer-wrapper">
                      <div className="listing-locate">
                        <span className="listing-location"><i className="ti-location-pin" />Quice Market, Canada</span>
                      </div>
                      <div className="listing-detail-btn">
                        <a href="single-property-2.html" className="more-btn">View</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Property End */}								
            </div>
            {/* Pagination */}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <a href="listings-list-with-sidebar.html" className="btn btn-theme-light-2 rounded">Browse More Properties</a>
              </div>
            </div>
          </div>		
        </section>
        {/* ============================ All Featured Property ================================== */}
        {/* ============================ Smart Testimonials ================================== */}
        <section className="bg-orange">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10 text-center">
                <div className="sec-heading center">
                  <h2>Good Reviews by Customers</h2>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12">
                <div className="smart-textimonials smart-center" id="smart-textimonials">
                  {/* Single Item */}
                  <div className="item">
                    <div className="item-box">
                      <div className="smart-tes-author">
                        <div className="st-author-box">
                          <div className="st-author-thumb">
                            <div className="quotes bg-blue"><i className="ti-quote-right" /></div>
                            <img src="assets/img/user-3.jpg" className="img-fluid" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="smart-tes-content">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                      </div>
                      <div className="st-author-info">
                        <h4 className="st-author-title">Adam Williams</h4>
                        <span className="st-author-subtitle">CEO Of Microwoft</span>
                      </div>
                    </div>
                  </div>
                  {/* Single Item */}
                  <div className="item">
                    <div className="item-box">
                      <div className="smart-tes-author">
                        <div className="st-author-box">
                          <div className="st-author-thumb">
                            <div className="quotes bg-inverse"><i className="ti-quote-right" /></div>
                            <img src="assets/img/user-8.jpg" className="img-fluid" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="smart-tes-content">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                      </div>
                      <div className="st-author-info">
                        <h4 className="st-author-title">Retha Deowalim</h4>
                        <span className="st-author-subtitle">CEO Of Apple</span>
                      </div>
                    </div>
                  </div>
                  {/* Single Item */}
                  <div className="item">
                    <div className="item-box">
                      <div className="smart-tes-author">
                        <div className="st-author-box">
                          <div className="st-author-thumb">
                            <div className="quotes bg-purple"><i className="ti-quote-right" /></div>
                            <img src="assets/img/user-4.jpg" className="img-fluid" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="smart-tes-content">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                      </div>
                      <div className="st-author-info">
                        <h4 className="st-author-title">Sam J. Wasim</h4>
                        <span className="st-author-subtitle">Pio Founder</span>
                      </div>
                    </div>
                  </div>
                  {/* Single Item */}
                  <div className="item">
                    <div className="item-box">
                      <div className="smart-tes-author">
                        <div className="st-author-box">
                          <div className="st-author-thumb">
                            <div className="quotes bg-primary"><i className="ti-quote-right" /></div>
                            <img src="assets/img/user-5.jpg" className="img-fluid" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="smart-tes-content">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                      </div>
                      <div className="st-author-info">
                        <h4 className="st-author-title">Usan Gulwarm</h4>
                        <span className="st-author-subtitle">CEO Of Facewarm</span>
                      </div>
                    </div>
                  </div>
                  {/* Single Item */}
                  <div className="item">
                    <div className="item-box">
                      <div className="smart-tes-author">
                        <div className="st-author-box">
                          <div className="st-author-thumb">
                            <div className="quotes bg-success"><i className="ti-quote-right" /></div>
                            <img src="assets/img/user-6.jpg" className="img-fluid" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="smart-tes-content">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                      </div>
                      <div className="st-author-info">
                        <h4 className="st-author-title">Shilpa Shethy</h4>
                        <span className="st-author-subtitle">CEO Of Zapple</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Smart Testimonials End ================================== */}
        {/* ============================ Price Table Start ================================== */}
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10 text-center">
                <div className="sec-heading center">
                  <h2>See our packages</h2>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Package */}
              <div className="col-lg-4 col-md-4">
                <div className="pricing-wrap basic-pr">
                  <div className="pricing-header">
                    <h4 className="pr-value"><sup>$</sup>49</h4>
                    <h4 className="pr-title">Basic Package</h4>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li className="available">5+ Listings</li>
                      <li className="available">Contact With Agent</li>
                      <li className="available">3 Month Validity</li>
                      <li>7x24 Fully Support</li>
                      <li>50GB Space</li>
                    </ul>
                  </div>
                  <div className="pricing-bottom">
                    <a href="#/" className="btn-pricing">Choose Plan</a>
                  </div>
                </div>
              </div>
              {/* Single Package */}
              <div className="col-lg-4 col-md-4">
                <div className="pricing-wrap platinum-pr recommended">
                  <div className="pricing-header">
                    <h4 className="pr-value"><sup>$</sup>99</h4>
                    <h4 className="pr-title">Platinum Package</h4>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li className="available">5+ Listings</li>
                      <li className="available">Contact With Agent</li>
                      <li className="available">3 Month Validity</li>
                      <li className="available">7x24 Fully Support</li>
                      <li>50GB Space</li>
                    </ul>
                  </div>
                  <div className="pricing-bottom">
                    <a href="#/" className="btn-pricing">Choose Plan</a>
                  </div>
                </div>
              </div>
              {/* Single Package */}
              <div className="col-lg-4 col-md-4">
                <div className="pricing-wrap standard-pr">
                  <div className="pricing-header">
                    <h4 className="pr-value"><sup>$</sup>199</h4>
                    <h4 className="pr-title">Standard Package</h4>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li className="available">5+ Listings</li>
                      <li className="available">Contact With Agent</li>
                      <li className="available">3 Month Validity</li>
                      <li className="available">7x24 Fully Support</li>
                      <li className="available">50GB Space</li>
                    </ul>
                  </div>
                  <div className="pricing-bottom">
                    <a href="#/" className="btn-pricing">Choose Plan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>	
        </section>
        {/* ============================ Price Table End ================================== */}
        {/* ========================== Download App Section =============================== */}
        <section className="bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                <div className="content_block_2">
                  <div className="content-box">
                    <div className="sec-title light">
                      <p className="text-blue">Download apps</p>
                      <h2>Download App Free App For Android and iPhone</h2>
                    </div>
                    <div className="text">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto accusantium.</p>
                    </div>
                    <div className="btn-box clearfix mt-5">
                      <a href="index.html" className="download-btn play-store">
                        <i className="fab fa-google-play" />
                        <span>Download on</span>
                        <h3>Google Play</h3>
                      </a>
                      <a href="index.html" className="download-btn app-store">
                        <i className="fab fa-apple" />
                        <span>Download on</span>
                        <h3>App Store</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <figure className="image"><img src="assets/img/app.png" className="img-fluid" alt="" /></figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================== Download App Section =============================== */}
        {/* ============================ Call To Action ================================== */}
        <section className="theme-bg call-to-act-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="call-to-act">
                  <div className="call-to-act-head">
                    <h3>Want to Become a Real Estate Agent?</h3>
                    <span>We'll help you to grow your career and growth.</span>
                  </div>
                  <a href="#/" className="btn btn-call-to-act">SignUp Today</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Call To Action End ================================== */}
      </div>   
        </>
    )
}

export default Home5
