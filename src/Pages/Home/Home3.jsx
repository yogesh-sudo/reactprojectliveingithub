import React from 'react'

const Home3 = () => {
    return (
        <>
          <div>
        {/* ============================ Hero Banner  Start================================== */}
        <div className="image-cover hero-banner" style={{background: 'url(assets/img/banner-3.jpg) no-repeat'}} data-overlay={6}>
          <div className="container">
            <h1 className="big-header-capt mb-0">Find Your Property</h1>
            <p className="text-center mb-5">From as low as $10 per day with limited time offer</p>
            <div className="full-search-2 eclip-search italian-search hero-search-radius shadow">
              <div className="hero-search-content">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 b-r">
                    <div className="form-group borders">
                      <div className="input-with-icon">
                        <input type="text" className="form-control" placeholder="Neighborhood" />
                        <i className="ti-search" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="form-group borders">
                      <div className="input-with-icon">
                        <select id="ptypes" className="form-control">
                          <option value>&nbsp;</option>
                          <option value={1}>Any Type</option>
                          <option value={2}>Apartment</option>
                          <option value={3}>Villas</option>
                          <option value={4}>Commercial</option>
                          <option value={5}>Offices</option>
                          <option value={6}>Garage</option>
                        </select>
                        <i className="ti-briefcase" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="form-group borders">
                      <div className="input-with-icon b-l">
                        <select id="location" className="form-control">
                          <option value>&nbsp;</option>
                          <option value={1}>New York City</option>
                          <option value={2}>Chicago, Illinois</option>
                          <option value={3}>Las Vegas</option>
                          <option value={4}>New Orleans</option>
                          <option value={5}>San Francisco</option>
                          <option value={6}>Washington</option>
                        </select>
                        <i className="ti-location-pin" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <div className="form-group">
                      <a href="#/" className="btn search-btn">Search</a>
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
        {/* ============================ Step How To Use Start ================================== */}
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10 text-center">
                <div className="sec-heading center">
                  <h2>How It Works?</h2>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="middle-icon-features-item">
                  <div className="icon-features-wrap"><div className="middle-icon-large-features-box f-light-success"><i className="ti-receipt text-success" /></div></div>
                  <div className="middle-icon-features-content">
                    <h4>Evaluate Property</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="middle-icon-features-item">
                  <div className="icon-features-wrap"><div className="middle-icon-large-features-box f-light-warning"><i className="ti-user text-warning" /></div></div>
                  <div className="middle-icon-features-content">
                    <h4>Meet Your Agent</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="middle-icon-features-item remove">
                  <div className="icon-features-wrap"><div className="middle-icon-large-features-box f-light-blue"><i className="ti-shield text-blue" /></div></div>
                  <div className="middle-icon-features-content">
                    <h4>Close The Deal</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="clearfix" />
        {/* ============================ Step How To Use End ====================== */}
        {/* ============================ Smart Testimonials ================================== */}
        <section className="image-cover" style={{background: 'url(assets/img/banner-2.jpg) no-repeat'}} data-overlay={5}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8">
                <div className="caption-wrap-content text-center">
                  <h2>Search Perfect Place in your City</h2>
                  <p className="mb-5">We post regulary most powerful articles for help and support.</p>
                  <a href="#/" className="btn btn-light btn-md rounded">Explore More Property</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Smart Testimonials End ================================== */}
        {/* ================================= Blog Grid ================================== */}
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10 text-center">
                <div className="sec-heading center">
                  <h2>News By Resido</h2>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single blog Grid */}
              <div className="col-lg-4 col-md-6">
                <div className="blog-wrap-grid">
                  <div className="blog-thumb">
                    <a href="blog-detail.html"><img src="assets/img/p-11.jpg" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="blog-info">
                    <span className="post-date"><i className="ti-calendar" />30 july 2018</span>
                  </div>
                  <div className="blog-body">
                    <h4 className="bl-title"><a href="blog-detail.html">Why people choose listio for own properties</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
                    <a href="blo-detail.html" className="bl-continue">Continue</a>
                  </div>
                </div>
              </div>
              {/* Single blog Grid */}
              <div className="col-lg-4 col-md-6">
                <div className="blog-wrap-grid">
                  <div className="blog-thumb">
                    <a href="blog-detail.html"><img src="assets/img/p-8.jpg" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="blog-info">
                    <span className="post-date"><i className="ti-calendar" />10 August 2018</span>
                  </div>
                  <div className="blog-body">
                    <h4 className="bl-title"><a href="blog-detail.html">List of benifits and impressive listeo services</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
                    <a href="blo-detail.html" className="bl-continue">Continue</a>
                  </div>
                </div>
              </div>
              {/* Single blog Grid */}
              <div className="col-lg-4 col-md-6">
                <div className="blog-wrap-grid">
                  <div className="blog-thumb">
                    <a href="blog-detail.html"><img src="assets/img/p-10.jpg" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="blog-info">
                    <span className="post-date"><i className="ti-calendar" />30 Sep 2018</span>
                  </div>
                  <div className="blog-body">
                    <h4 className="bl-title"><a href="blog-detail.html">What people says about listio properties</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
                    <a href="blo-detail.html" className="bl-continue">Continue</a>
                  </div>
                </div>
              </div>
            </div>
          </div>		
        </section>
        {/* ================= Blog Grid End ================= */}
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

export default Home3
