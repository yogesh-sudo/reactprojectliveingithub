import React from 'react'
import { Link } from 'react-router-dom'
const Classical_With_Sidebar = () => {
    return (
        <div>
            <div>
        {/* ============================ Page Title Start================================== */}
        <div className="page-title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h2 className="ipt-title">Classical Property List</h2>
                <span className="ipn-subtitle">Classical Property List With Sidebar</span>
              </div>
            </div>
          </div>
        </div>
        {/* ============================ Page Title End ================================== */}
        {/* ============================ All Property ================================== */}
        <section className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="filter_search_opt">
                  <Link to="javascript:void(0);" onclick="openFilterSearch()">Search Property<i className="ml-2 ti-menu" /></Link>
                </div>
              </div>
            </div>
            <div className="row">
              {/* property Sidebar */}
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="simple-sidebar sm-sidebar" id="filter_search">							
                  <div className="search-sidebar_header">
                    <h4 className="ssh_heading">Close Filter</h4>
                    <button onclick="closeFilterSearch()" className="w3-bar-item w3-button w3-large"><i className="icofont-close" /></button>
                  </div>
                  {/* Find New Property */}
                  <div className="sidebar-widgets">
                    <div className="search-inner p-0">
                      <div className="filter-search-box">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <input type="text" className="form-control" placeholder="Search by space name…" />
                            <i className="icofont-search" />
                          </div>
                        </div>
                      </div>
                      <div className="filter_wraps">
                        {/* Single Search */}
                        <div className="single_search_boxed">
                          <div className="widget-boxed-header">
                            <h4>
                              <a href="#where" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Where<span className="selected">Chicago</span>
                              <i class="fas fa-angle-down"></i>
                              </a>
                            </h4>
                          </div>
                          <div className="widget-boxed-body collapse" id="where" data-parent="#where">
                            <div className="side-list no-border">
                              {/* Single Filter Card */}
                              <div className="single_filter_card">
                                <div className="card-body pt-0">
                                  <div className="inner_widget_link">
                                    <ul className="no-ul-list filter-list">
                                      <li>
                                        <input id="b1" className="radio-custom" name="where" type="radio" />
                                        <label htmlFor="b1" className="radio-custom-label">Atlanta</label>
                                      </li>
                                      <li>
                                        <input id="b2" className="radio-custom" name="where" type="radio" />
                                        <label htmlFor="b2" className="radio-custom-label">Austin</label>
                                      </li>
                                      <li>
                                        <input id="b3" className="radio-custom" name="where" type="radio" />
                                        <label htmlFor="b3" className="radio-custom-label">Boston</label>
                                      </li>
                                      <li>
                                        <input id="b4" className="radio-custom" name="where" type="radio" defaultChecked />
                                        <label htmlFor="b4" className="radio-custom-label">Chicago</label>
                                      </li>
                                      <li>
                                        <input id="b5" className="radio-custom" name="where" type="radio" />
                                        <label htmlFor="b5" className="radio-custom-label">Dallas</label>
                                      </li>
                                      <li>
                                        <input id="b6" className="radio-custom" name="where" type="radio" />
                                        <label htmlFor="b6" className="radio-custom-label">Denver</label>
                                      </li>
                                      <li>
                                        <input id="b7" className="radio-custom" name="where" type="radio" />
                                        <label htmlFor="b7" className="radio-custom-label">Houston</label>
                                      </li>
                                      <li>
                                        <input id="b8" className="radio-custom" name="where" type="radio" />
                                        <label htmlFor="b8" className="radio-custom-label">Jacksonville</label>
                                      </li>
                                      <li>
                                        <input id="b9" className="radio-custom" name="where" type="radio" />
                                        <label htmlFor="b9" className="radio-custom-label">Los Angeles</label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Single Search */}
                        <div className="single_search_boxed">
                          <div className="widget-boxed-header">
                            <h4>
                              <a href="#fptype" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Property Types<span className="selected">Apartment</span></a>
                            </h4>
                          </div>
                          <div className="widget-boxed-body collapse" id="fptype" data-parent="#fptype">
                            <div className="side-list no-border">
                              {/* Single Filter Card */}
                              <div className="single_filter_card">
                                <div className="card-body pt-0">
                                  <div className="inner_widget_link">
                                    <ul className="no-ul-list filter-list">
                                      <li>
                                        <input id="c1" className="radio-custom" name="ptype" type="radio" />
                                        <label htmlFor="c1" className="radio-custom-label">House</label>
                                      </li>
                                      <li>
                                        <input id="c2" className="radio-custom" name="ptype" type="radio" />
                                        <label htmlFor="c2" className="radio-custom-label">Office Desk</label>
                                      </li>
                                      <li>
                                        <input id="c3" className="radio-custom" name="ptype" type="radio" />
                                        <label htmlFor="c3" className="radio-custom-label">Villa</label>
                                      </li>
                                      <li>
                                        <input id="c4" className="radio-custom" name="ptype" type="radio" defaultChecked />
                                        <label htmlFor="c4" className="radio-custom-label">Apartment</label>
                                      </li>
                                      <li>
                                        <input id="c5" className="radio-custom" name="ptype" type="radio" />
                                        <label htmlFor="c5" className="radio-custom-label">Condo</label>
                                      </li>
                                      <li>
                                        <input id="c6" className="radio-custom" name="ptype" type="radio" />
                                        <label htmlFor="c6" className="radio-custom-label">Denver</label>
                                      </li>
                                      <li>
                                        <input id="c7" className="radio-custom" name="ptype" type="radio" />
                                        <label htmlFor="c7" className="radio-custom-label">Studio</label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Single Search */}
                        <div className="single_search_boxed">
                          <div className="widget-boxed-header">
                            <h4>
                              <a href="#fbedrooms" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Bedrooms<span className="selected">2 Beds</span></a>
                            </h4>
                          </div>
                          <div className="widget-boxed-body collapse" id="fbedrooms" data-parent="#fbedrooms">
                            <div className="side-list no-border">
                              {/* Single Filter Card */}
                              <div className="single_filter_card">
                                <div className="card-body pt-0">
                                  <div className="inner_widget_link">
                                    <ul className="no-ul-list filter-list">
                                      <li>
                                        <input id="a1" className="radio-custom" name="bed" type="radio" />
                                        <label htmlFor="a1" className="radio-custom-label">01 Bedrooms</label>
                                      </li>
                                      <li>
                                        <input id="a2" className="radio-custom" name="bed" type="radio" />
                                        <label htmlFor="a2" className="radio-custom-label">02 Bedrooms</label>
                                      </li>
                                      <li>
                                        <input id="a3" className="radio-custom" name="bed" type="radio" />
                                        <label htmlFor="a3" className="radio-custom-label">03 Bedrooms</label>
                                      </li>
                                      <li>
                                        <input id="a4" className="radio-custom" name="bed" type="radio" defaultChecked />
                                        <label htmlFor="a4" className="radio-custom-label">04 Bedrooms</label>
                                      </li>
                                      <li>
                                        <input id="a5" className="radio-custom" name="bed" type="radio" />
                                        <label htmlFor="a5" className="radio-custom-label">05 Bedrooms</label>
                                      </li>
                                      <li>
                                        <input id="a6" className="radio-custom" name="bed" type="radio" />
                                        <label htmlFor="a6" className="radio-custom-label">06+ Bedrooms</label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Single Search */}
                        <div className="single_search_boxed">
                          <div className="widget-boxed-header">
                            <h4>
                              <a href="#fprice" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Price Range<span className="selected">$10,000 - $15,000</span></a>
                            </h4>
                          </div>
                          <div className="widget-boxed-body collapse" id="fprice" data-parent="#fprice">
                            <div className="side-list no-border">
                              {/* Single Filter Card */}
                              <div className="single_filter_card">
                                <div className="card-body pt-0">
                                  <div className="inner_widget_link">
                                    <ul className="no-ul-list filter-list">
                                      <li>
                                        <input id="e1" className="radio-custom" name="prices" type="radio" />
                                        <label htmlFor="e1" className="radio-custom-label">Less Then $10,000</label>
                                      </li>
                                      <li>
                                        <input id="e2" className="radio-custom" name="prices" type="radio" />
                                        <label htmlFor="e2" className="radio-custom-label">$10,000 - $15,000</label>
                                      </li>
                                      <li>
                                        <input id="e3" className="radio-custom" name="prices" type="radio" />
                                        <label htmlFor="e3" className="radio-custom-label">$12,000 - $25,000</label>
                                      </li>
                                      <li>
                                        <input id="e4" className="radio-custom" name="prices" type="radio" defaultChecked />
                                        <label htmlFor="e4" className="radio-custom-label">$30,000 - $35,000</label>
                                      </li>
                                      <li>
                                        <input id="e5" className="radio-custom" name="prices" type="radio" />
                                        <label htmlFor="e5" className="radio-custom-label">$40,000 - $45,000</label>
                                      </li>
                                      <li>
                                        <input id="e6" className="radio-custom" name="prices" type="radio" />
                                        <label htmlFor="e6" className="radio-custom-label">$50,000 - $55,000</label>
                                      </li>
                                      <li>
                                        <input id="e7" className="radio-custom" name="prices" type="radio" />
                                        <label htmlFor="e7" className="radio-custom-label">$60,000 - $65,000</label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Single Search */}
                        <div className="single_search_boxed">
                          <div className="widget-boxed-header">
                            <h4>
                              <a href="#mood" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Mood<span className="selected">Any Mood</span></a>
                            </h4>
                          </div>
                          <div className="widget-boxed-body collapse" id="mood" data-parent="#mood">
                            <div className="side-list no-border">
                              {/* Single Filter Card */}
                              <div className="single_filter_card">
                                <div className="card-body pt-0">
                                  <div className="inner_widget_link">
                                    <ul className="no-ul-list filter-list">
                                      <li>
                                        <input id="f1" className="radio-custom" name="moods" type="radio" />
                                        <label htmlFor="f1" className="radio-custom-label">Any Mood</label>
                                      </li>
                                      <li>
                                        <input id="f2" className="radio-custom" name="moods" type="radio" />
                                        <label htmlFor="f2" className="radio-custom-label">Professional</label>
                                      </li>
                                      <li>
                                        <input id="f3" className="radio-custom" name="moods" type="radio" />
                                        <label htmlFor="f3" className="radio-custom-label">Essentials</label>
                                      </li>
                                      <li>
                                        <input id="f4" className="radio-custom" name="moods" type="radio" defaultChecked />
                                        <label htmlFor="f4" className="radio-custom-label">Unique</label>
                                      </li>
                                      <li>
                                        <input id="f5" className="radio-custom" name="moods" type="radio" />
                                        <label htmlFor="f5" className="radio-custom-label">Lively</label>
                                      </li>
                                      <li>
                                        <input id="f6" className="radio-custom" name="moods" type="radio" />
                                        <label htmlFor="f6" className="radio-custom-label">Luxe</label>
                                      </li>
                                      <li>
                                        <input id="f7" className="radio-custom" name="moods" type="radio" />
                                        <label htmlFor="f7" className="radio-custom-label">Luxe</label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Single Search */}
                        <div className="single_search_boxed">
                          <div className="widget-boxed-header">
                            <h4>
                              <a href="#ameneties" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Ameneties<span className="selected">ADA Compliant</span></a>
                            </h4>
                          </div>
                          <div className="widget-boxed-body collapse" id="ameneties" data-parent="#ameneties">
                            <div className="side-list no-border">
                              {/* Single Filter Card */}
                              <div className="single_filter_card">
                                <div className="card-body pt-0">
                                  <div className="inner_widget_link">
                                    <ul className="no-ul-list filter-list">
                                      <li>
                                        <input id="g1" className="checkbox-custom" name="ADA" type="checkbox" defaultChecked />
                                        <label htmlFor="g1" className="checkbox-custom-label">ADA Compliant</label>
                                      </li>
                                      <li>
                                        <input id="g2" className="checkbox-custom" name="Parking" type="checkbox" />
                                        <label htmlFor="g2" className="checkbox-custom-label">Parking Options</label>
                                      </li>
                                      <li>
                                        <input id="g3" className="checkbox-custom" name="Coffee" type="checkbox" />
                                        <label htmlFor="g3" className="checkbox-custom-label">Coffee Provided</label>
                                      </li>
                                      <li>
                                        <input id="g4" className="checkbox-custom" name="Mother" type="checkbox" />
                                        <label htmlFor="g4" className="checkbox-custom-label">Mother's Room</label>
                                      </li>
                                      <li>
                                        <input id="g5" className="checkbox-custom" name="Outdoor" type="checkbox" />
                                        <label htmlFor="g5" className="checkbox-custom-label">Outdoor Space</label>
                                      </li>
                                      <li>
                                        <input id="g6" className="checkbox-custom" name="Pet" type="checkbox" />
                                        <label htmlFor="g6" className="checkbox-custom-label">Pet Friendly</label>
                                      </li>
                                      <li>
                                        <input id="g7" className="checkbox-custom" name="Beauty" type="checkbox" />
                                        <label htmlFor="g7" className="checkbox-custom-label">Beauty &amp; Message</label>
                                      </li>
                                      <li>
                                        <input id="g8" className="checkbox-custom" name="Bike" type="checkbox" />
                                        <label htmlFor="g8" className="checkbox-custom-label">Bike Parking</label>
                                      </li>
                                      <li>
                                        <input id="g9" className="checkbox-custom" name="Phone" type="checkbox" />
                                        <label htmlFor="g9" className="checkbox-custom-label">Phone Line</label>
                                      </li>
                                      <li>
                                        <input id="g11" className="checkbox-custom" name="Private" type="checkbox" />
                                        <label htmlFor="g11" className="checkbox-custom-label">Private Areas</label>
                                      </li>
                                      <li>
                                        <input id="g12" className="checkbox-custom" name="Free" type="checkbox" />
                                        <label htmlFor="g12" className="checkbox-custom-label">Free WiFi</label>
                                      </li>
                                      <li>
                                        <input id="g13" className="checkbox-custom" name="Swiming" type="checkbox" />
                                        <label htmlFor="g13" className="checkbox-custom-label">Swiming Pool</label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group filter_button">
                        <button type="submit" className="btn btn btn-theme-light-2 rounded full-width">22 Results Show</button>
                      </div>
                    </div>							
                  </div>
                </div>
                {/* Sidebar End */}
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-12">
                    <div className="item-shorting-box">
                      <div className="item-shorting clearfix">
                        <div className="left-column pull-left"><h4 className="m-0">Found 1-10 of 142 Results</h4></div>
                      </div>
                      <div className="item-shorting-box-right">
                        <div className="shorting-by">
                          <select id="shorty" className="form-control">
                            <option value>&nbsp;</option>
                            <option value={1}>Low Price</option>
                            <option value={2}>High Price</option>
                            <option value={3}>Most Popular</option>
                          </select>
                        </div>
                        <ul className="shorting-list">
                          <li><Link to="grid-layout-with-sidebar.html" className="active"><i className="icofont-layout-grid2" /></Link></li>
                          <li><Link to="list-layout-with-sidebar.html"><i className="icofont-view-list" /></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* Single Property */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="property-listing property-2">
                      <div className="listing-img-wrapper">
                        <div className="list-img-slide">
                          <div className="click">
                            <div><Link to="single-property-1.html"><img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                            <div><Link to="single-property-1.html"><img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                            <div><Link to="single-property-1.html"><img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail-wrap">
                          <div className="listing-short-detail">
                            <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">New Clue Apartment</a></h4>
                            <div className="property-reviews">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                            </div>
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
                          <Link to="property-detail.html" className="prt-view">View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Property */}
                  {/* Single Property */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="property-listing property-2">
                      <div className="listing-img-wrapper">
                        <div className="list-img-slide">
                          <div className="click">
                            <div><Link to="single-property-1.html"><img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                            <div><Link to="single-property-1.html"><img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                            <div><Link to="single-property-1.html"><img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail-wrap">
                          <div className="listing-short-detail">
                            <h4 className="listing-name verified"><Link to="single-property-1.html" className="prt-link-detail">New Clue Apartment</Link></h4>
                            <div className="property-reviews">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                            </div>
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
                          <Link to="property-detail.html" className="prt-view">View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Property */}
                  {/* Single Property */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="property-listing property-2">
                      <div className="listing-img-wrapper">
                        <div className="list-img-slide">
                          <div className="click">
                            <div><Link to="single-property-1.html"><img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                            <div><Link to="single-property-1.html"><img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                            <div><Link to="single-property-1.html"><img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail-wrap">
                          <div className="listing-short-detail">
                            <h4 className="listing-name verified"><Link to="single-property-1.html" className="prt-link-detail">New Clue Apartment</Link></h4>
                            <div className="property-reviews">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                            </div>
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
                          <Link to="property-detail.html" className="prt-view">View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Property */}
                  {/* Single Property */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="property-listing property-2">
                      <div className="listing-img-wrapper">
                        <div className="list-img-slide">
                          <div className="click">
                            <div><Link to="single-property-1.html"><img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                            <div><Link to="single-property-1.html"><img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                            <div><Link to="single-property-1.html"><img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail-wrap">
                          <div className="listing-short-detail">
                            <h4 className="listing-name verified"><Link to="single-property-1.html" className="prt-link-detail">New Clue Apartment</Link></h4>
                            <div className="property-reviews">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                            </div>
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
                          <Link to="property-detail.html" className="prt-view">View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Property */}
                  {/* Single Property */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="property-listing property-2">
                      <div className="listing-img-wrapper">
                        <div className="list-img-slide">
                          <div className="click">
                            <div><Link to="single-property-1.html"><img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                            <div><Link to="single-property-1.html"><img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                            <div><Link to="single-property-1.html"><img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail-wrap">
                          <div className="listing-short-detail">
                            <h4 className="listing-name verified"><Link to="single-property-1.html" className="prt-link-detail">New Clue Apartment</Link></h4>
                            <div className="property-reviews">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                            </div>
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
                          <Link to="property-detail.html" className="prt-view">View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Property */}
                  {/* Single Property */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="property-listing property-2">
                      <div className="listing-img-wrapper">
                        <div className="list-img-slide">
                          <div className="click">
                            <div><Link to="single-property-1.html"><img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                            <div><Link to="single-property-1.html"><img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                            <div><Link to="single-property-1.html"><img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="" /></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail-wrap">
                          <div className="listing-short-detail">
                            <h4 className="listing-name verified"><Link to="single-property-1.html" className="prt-link-detail">New Clue Apartment</Link></h4>
                            <div className="property-reviews">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                            </div>
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
                          <Link to="property-detail.html" className="prt-view">View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Property */}					
                </div>
                {/* Pagination */}
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className="pagination p-center">
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Previous">
                          <span className="icofont-arrow-left" />
                          <span className="sr-only">Previous</span>
                        </Link>
                      </li>
                      <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                      <li className="page-item active"><Link className="page-link" to="#">3</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">...</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">18</Link></li>
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                          <span className="icofont-arrow-right" />
                          <span className="sr-only">Next</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>		
        </section>
        {/* ============================ All Property ================================== */}
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
                  <Link to="#" className="btn btn-call-to-act">SignUp Today</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Call To Action End ================================== */}
      </div>

        </div>
    )
}

export default Classical_With_Sidebar
