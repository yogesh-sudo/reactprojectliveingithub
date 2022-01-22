import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
              {/* ============================================================== */}
        {/* Top header  */}
        {/* ============================================================== */}
        {/* Start Navigation */}
        <div className="header header-light head-shadow">
          <div className="container">
            <nav id="navigation" className="navigation navigation-landscape">
              <div className="nav-header">
                <Link className="nav-brand" to="/">
                  <img src="assets/img/logo.png" className="logo" alt="#/" />
                </Link>
                <div className="nav-toggle" />
              </div>
              <div className="nav-menus-wrapper" style={{transitionProperty: 'none'}}>
                <ul className="nav-menu">
                  <li className="active"><Link to="/">Home<span className="submenu-indicator" /></Link>
                    <ul className="nav-dropdown nav-submenu">
                      <li><Link className="active" to="/">Home Layout 1</Link></li>
                      <li><Link to="/home2">Home Layout 2</Link></li>
                      <li><Link to="/home3">Home Layout 3</Link></li>
                      <li><Link to="/home4">Home Layout 4</Link></li>
                      <li><Link to="/home5">Home Layout 5</Link></li>
                      <li><Link to="/home6">Home Layout 6</Link></li>
                      <li><Link to="/home7">Home Layout 7</Link></li>
                      <li><Link to="/home8">Home Layout 8</Link></li>
                      <li><Link to="/map">Map Home Layout</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/">Listings<span className="submenu-indicator" /></Link>
                    <ul className="nav-dropdown nav-submenu">
                      <li><Link to="/#/">List Layout<span className="submenu-indicator" /></Link>
                        <ul className="nav-dropdown nav-submenu">
                          <li><Link to="/list-layout-with-sidebar">With Sadebar</Link></li>                                    
                          <li><Link to="/list-layout-with-map">With Map</Link></li>                                    
                          <li><Link to="/list-layout-full">Full Width</Link></li>
                        </ul>
                      </li>
                      <li><Link to="" onClick={(e)=>{e.preventDefault()}}>Grid Layout<span className="submenu-indicator" /></Link>
                        <ul className="nav-dropdown nav-submenu">
                          <li><Link to="/grid_layout_with_sidebar">With Sidebar</Link></li>                                    
                          <li><Link to="/classical_layout_with_sidebar">Classical With Sidebar</Link></li>                                    
                          <li><Link to="/grid-layout-with-map">With Map</Link></li>                                    
                          <li><Link to="/grid">Full Width</Link></li>
                          <li><Link to="/classical-property">Classical Full Width</Link></li>	 
                        </ul>
                      </li>
                      <li><Link to="/#/">With Map Property<span className="submenu-indicator" /></Link>
                        <ul className="nav-dropdown nav-submenu">
                          <li><Link to="/list-layout-with-map">List With Map</Link></li>                                    
                          <li><Link to="/grid-layout-with-map">Grid With Map</Link></li>                                    
                          <li><Link to="/classical-layout-with-map">Classical With Map</Link></li>                                    
                          <li><Link to="/half-map">Half Map Search</Link></li> 
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><Link to="/#/">Features<span className="submenu-indicator" /></Link>
                    <ul className="nav-dropdown nav-submenu">
                      <li><Link to="/#/">Single Property<span className="submenu-indicator" /></Link>
                        <ul className="nav-dropdown nav-submenu">
                          <li><Link to="/single-property-1">Single Property 1</Link></li>                                    
                          <li><Link to="/single-property-2">Single Property 2</Link></li>                                    
                          <li><Link to="/single-property-3">Single Property 3</Link></li>   
                        </ul>
                      </li>
                      <li><Link to="/#/">Agencies &amp; Agents<span className="submenu-indicator" /></Link>
                        <ul className="nav-dropdown nav-submenu">
                          <li><Link to="/agents">Agents List</Link></li>                                    
                          <li><Link to="/agent-page">Agent Page</Link></li>                                    
                          <li><Link to="/agencies">Agencies List</Link></li>                                    
                          <li><Link to="/agency-page">Agency Page</Link></li> 
                        </ul>
                      </li>
                      <li><Link to="/#/">My Account<span className="submenu-indicator" /></Link>
                        <ul className="nav-dropdown nav-submenu">
                          <li><Link to="/dashboard">User Dashboard</Link></li><li><Link to="/payment">Payment Confirmation</Link></li>
                          <li><Link to="/my-profile">My Profile</Link></li>                                    
                          <li><Link to="/my-property">Property List</Link></li>                                    
                          <li><Link to="/bookmark-list">Bookmarked Listings</Link></li>                                    
                          <li><Link to="/change-password">Change Password</Link></li> 
                        </ul>
                      </li>
                      <li>
                        <Link to="/compare-property">Compare Property</Link>                                
                      </li>
                      <li>
                        <Link to="/submit-property">Submit Property</Link>                                
                      </li>
                    </ul>
                  </li>
                  <li><Link to="/#/">Pages<span className="submenu-indicator" /></Link>
                    <ul className="nav-dropdown nav-submenu">
                      <li><Link to="/blog">Blogs Page</Link></li>                                    
                      <li><Link to="/blog-detail">Blog Detail</Link></li>                                    
                      <li><Link to="/component">Shortcodes</Link></li> 
                      <li><Link to="/pricing">Pricing</Link></li>  
                      <li><Link to="/404">Error Page</Link></li>
                      <li><Link to="/contact">Contacts</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/#/" data-bs-toggle="modal" data-bs-target="#signup">Sign Up</Link></li>
                </ul>
                <ul className="nav-menu nav-menu-social align-to-right">
                  <li>
                    <Link to="/submit-property" className="text-success"><img src="assets/img/submit.svg" width={20} alt="#/" className="mr-2" />Add Property</Link>
                  </li>
                  <li className="add-listing">
                    <Link to="/#/" data-bs-toggle="modal" data-bs-target="#login"><img src="assets/img/user-light.svg" width={12} alt="#/" className="mr-2" />Sign In</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* End Navigation */}
        <div className="clearfix" />
        {/* ============================================================== */}
        {/* Top header  */}
        {/* ============================================================== */}
        </>
    )
}

export default Navbar
