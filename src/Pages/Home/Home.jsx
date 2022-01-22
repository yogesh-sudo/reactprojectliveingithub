import React from 'react'

const Home = () => {
    return (
        <>
         <div>
        {/* ============================ Hero Banner  Start================================== */}
        <div className="image-cover hero-banner" style={{background: 'url(assets/img/banner-1.jpg) no-repeat'}}>
          <div className="container">
            <div className="hero-search-wrap">
              <div className="hero-search">
                <h1>Find accessible homes to rent</h1>
              </div>
              <div className="hero-search-content side-form">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <input type="text" className="form-control" placeholder="Search for a location" />
                        <img src="assets/img/pin.svg" width={18} alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Min Price</label>
                      <select id="minprice" className="form-control">
                        <option value>&nbsp;</option>
                        <option value={1}>$500</option>
                        <option value={2}>$1000</option>
                        <option value={3}>$1500</option>
                        <option value={4}>2000</option>
                        <option value={5}>3000</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Max Price</label>
                      <select id="maxprice" className="form-control">
                        <option value>&nbsp;</option>
                        <option value={1}>$1000</option>
                        <option value={2}>$1500</option>
                        <option value={3}>$2000</option>
                        <option value={4}>$3000</option>
                        <option value={5}>$5000</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Property Type</label>
                      <select id="ptypes" className="form-control">
                        <option value>&nbsp;</option>
                        <option value={1}>Rental</option>
                        <option value={2}>Villas</option>
                        <option value={3}>Offices</option>
                        <option value={4}>Condos</option>
                        <option value={5}>Studios</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Bed Rooms</label>
                      <select id="bedrooms" className="form-control">
                        <option value>&nbsp;</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Property Location</label>
                      <select id="cities" className="form-control">
                        <option value>&nbsp;</option>
                        <option value={1}>Los Angeles, CA</option>
                        <option value={2}>New York City, NY</option>
                        <option value={3}>Chicago, IL</option>
                        <option value={4}>Houston, TX</option>
                        <option value={5}>Philadelphia, PA</option>
                        <option value={6}>San Antonio, TX</option>
                        <option value={7}>San Jose, CA</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-search-action">
                <a href="#/" className="btn search-btn">Search Result</a>
              </div>
            </div>
          </div>
        </div>
        {/* ============================ Hero Banner End ================================== */}
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
                  <div className="icon-features-wrap"><div className="middle-icon-large-features-box f-light-success"><i className="icofont-receipt text-success" /></div></div>
                  <div className="middle-icon-features-content">
                    <h4>Evaluate Property</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="middle-icon-features-item">
                  <div className="icon-features-wrap"><div className="middle-icon-large-features-box f-light-warning"><i className="icofont-user text-warning" /></div></div>
                  <div className="middle-icon-features-content">
                    <h4>Meet Your Agent</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="middle-icon-features-item remove">
                  <div className="icon-features-wrap"><div className="middle-icon-large-features-box f-light-blue"><i className="icofont-shield text-blue" /></div></div>
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
        {/* ================= Explore Property ================= */}
        <section className="bg-light">
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
                        <div><a href="single-property-1.html"><img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-9.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-10.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
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
                        <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="img" /></div>3 Beds
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="img" /></div>1 Bath
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="img" /></div>800 sqft
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-footer">
                    <div className="footer-first">
                      <div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="img" />210 Zirak Road, Canada</div>
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
                        <div><a href="single-property-1.html"><img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-11.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-12.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
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
                        <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="img" /></div>3 Beds
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="img" /></div>1 Bath
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="img" /></div>800 sqft
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-footer">
                    <div className="footer-first">
                      <div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="img" />210 Zirak Road, Canada</div>
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
                        <div><a href="single-property-1.html"><img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-13.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-14.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
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
                        <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="img" /></div>3 Beds
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="img" /></div>1 Bath
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="img" /></div>800 sqft
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-footer">
                    <div className="footer-first">
                      <div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="img" />210 Zirak Road, Canada</div>
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
                        <div><a href="single-property-1.html"><img src="assets/img/p-4.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-15.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-16.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
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
                        <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="img" /></div>3 Beds
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="img" /></div>1 Bath
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="img" /></div>800 sqft
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-footer">
                    <div className="footer-first">
                      <div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="img" />210 Zirak Road, Canada</div>
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
                        <div><a href="single-property-1.html"><img src="assets/img/p-5.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-16.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-17.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
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
                        <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="img" /></div>3 Beds
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="img" /></div>1 Bath
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="img" /></div>800 sqft
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-footer">
                    <div className="footer-first">
                      <div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="img" />210 Zirak Road, Canada</div>
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
                        <div><a href="single-property-1.html"><img src="assets/img/p-6.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-12.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
                        <div><a href="single-property-1.html"><img src="assets/img/p-25.jpg" className="img-fluid mx-auto" alt="img" /></a></div>
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
                        <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="img" /></div>3 Beds
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="img" /></div>1 Bath
                      </div>
                      <div className="listing-card-info-icon">
                        <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="img" /></div>800 sqft
                      </div>
                    </div>
                  </div>
                  <div className="listing-detail-footer">
                    <div className="footer-first">
                      <div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="img" />210 Zirak Road, Canada</div>
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
        <section>
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
                    <a href="listings-list-with-sidebar.html"><img src="assets/img/c-1.png" className="img-fluid" alt="img" /></a>
                  </div>
                  <div className="location-property-content">
                    <div className="lp-content-flex">
                      <h4 className="lp-content-title">San Francisco, California</h4>
                      <span>12 Properties</span>
                    </div>
                    <div className="lp-content-right">
                      <a href="listings-list-with-sidebar.html" className="lp-property-view"><i className="icofont-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="location-property-wrap">
                  <div className="location-property-thumb">
                    <a href="listings-list-with-sidebar.html"><img src="assets/img/c-2.png" className="img-fluid" alt="img" /></a>
                  </div>
                  <div className="location-property-content">
                    <div className="lp-content-flex">
                      <h4 className="lp-content-title">Dunao, California</h4>
                      <span>142 Properties</span>
                    </div>
                    <div className="lp-content-right">
                      <a href="listings-list-with-sidebar.html" className="lp-property-view"><i className="icofont-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="location-property-wrap">
                  <div className="location-property-thumb">
                    <a href="listings-list-with-sidebar.html"><img src="assets/img/c-3.png" className="img-fluid" alt="img" /></a>
                  </div>
                  <div className="location-property-content">
                    <div className="lp-content-flex">
                      <h4 className="lp-content-title">Liverpool, London</h4>
                      <span>17 Properties</span>
                    </div>
                    <div className="lp-content-right">
                      <a href="listings-list-with-sidebar.html" className="lp-property-view"><i className="icofont-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="location-property-wrap">
                  <div className="location-property-thumb">
                    <a href="listings-list-with-sidebar.html"><img src="assets/img/c-4.png" className="img-fluid" alt="img" /></a>
                  </div>
                  <div className="location-property-content">
                    <div className="lp-content-flex">
                      <h4 className="lp-content-title">San Francisco, New York</h4>
                      <span>72 Properties</span>
                    </div>
                    <div className="lp-content-right">
                      <a href="listings-list-with-sidebar.html" className="lp-property-view"><i className="icofont-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="location-property-wrap">
                  <div className="location-property-thumb">
                    <a href="listings-list-with-sidebar.html"><img src="assets/img/c-5.png" className="img-fluid" alt="img" /></a>
                  </div>
                  <div className="location-property-content">
                    <div className="lp-content-flex">
                      <h4 className="lp-content-title">New Orleans, Louisiana</h4>
                      <span>102 Properties</span>
                    </div>
                    <div className="lp-content-right">
                      <a href="listings-list-with-sidebar.html" className="lp-property-view"><i className="icofont-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="location-property-wrap">
                  <div className="location-property-thumb">
                    <a href="listings-list-with-sidebar.html"><img src="assets/img/c-6.png" className="img-fluid" alt="img" /></a>
                  </div>
                  <div className="location-property-content">
                    <div className="lp-content-flex">
                      <h4 className="lp-content-title">Los Angeles</h4>
                      <span>95 Properties</span>
                    </div>
                    <div className="lp-content-right">
                      <a href="listings-list-with-sidebar.html" className="lp-property-view"><i className="icofont-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <a href="listings-list-with-sidebar.html" className="btn btn-theme-light-2 rounded">Browse More Locations</a>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Property Location End ================================== */}
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
                            <div className="quotes bg-blue"><i className="icofont-quote-right" /></div>
                            <img src="assets/img/user-3.jpg" className="img-fluid" alt="img" />
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
                            <div className="quotes bg-inverse"><i className="icofont-quote-right" /></div>
                            <img src="assets/img/user-8.jpg" className="img-fluid" alt="img" />
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
                            <div className="quotes bg-purple"><i className="icofont-quote-right" /></div>
                            <img src="assets/img/user-4.jpg" className="img-fluid" alt="img" />
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
                            <div className="quotes bg-primary"><i className="icofont-quote-right" /></div>
                            <img src="assets/img/user-5.jpg" className="img-fluid" alt="img" />
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
                            <div className="quotes bg-success"><i className="icofont-quote-right" /></div>
                            <img src="assets/img/user-6.jpg" className="img-fluid" alt="img" />
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

export default Home
