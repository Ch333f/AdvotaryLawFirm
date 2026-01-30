// import modules
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

import { useSVGIcons } from "../static/assets/utils/useSVGIcons.js";
import "../static/assets/scss/main.scss";
import { Link, NavLink, useLocation } from "react-router-dom";


function Layout(props) {
  const content = props.children;
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  function handleNewsletterSubscribe(form_data) {
    setError(
      "email",
      {
        type: "manual",
        message: `${form_data.email} subscribed successfully`,
      }
    );
  };


  return (
    <Fragment>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-top-left">
              {useSVGIcons.MapPin}

              <span>
                349 Dach Extension
              </span>
            </div>

            <div className="header-top-right">
              <span>
                {useSVGIcons.Phone}

                <span>
                  +123 456 7891
                </span>
              </span>

              <span>
                {useSVGIcons.Clock}

                <span>
                  Mon-Fri, 07.00-17.00
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container">


            <Link 
              className="logo"
              to="/"
            >
              <div className="logo-icon">
                {useSVGIcons.AdvotaryIcon}
              </div>

              <span>
                Advotary
              </span>
            </Link>


            <nav className="nav-menu">


              <NavLink 
                to="/"
                className={() =>
                  location.pathname === "/" || location.pathname === "/home"
                    ? "active"
                    : ""
                }
              >
                Home
              </NavLink>

              <NavLink 
                to="/about-us"
                onClick={(e) => {
                  if (true) {
                    e.preventDefault();
                  }
                }}
              >
                About Us
              </NavLink>

              <NavLink 
                to="/services"
                onClick={(e) => {
                  if (true) {
                    e.preventDefault();
                  }
                }}
              >
                Services
              </NavLink>

              <NavLink 
                to="/project"
                onClick={(e) => {
                  if (true) {
                    e.preventDefault();
                  }
                }}
              >
                Project
              </NavLink>

              <NavLink to="/contact-us">
                Contact Us
              </NavLink>


            </nav>


            <Link 
              to="/contact-us"
              className="contact-btn"
            >
              <button className="btn-primary">
                Contact Us
              </button>
            </Link>


            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >


              {
                mobileMenuOpen 
                  ? useSVGIcons.Close 
                  : useSVGIcons.Hamburger
              }


            </button>
          </div>
        </div>


        {
          mobileMenuOpen 
          && <div className="mobile-nav">
              <div className="mobile-links">


                <NavLink 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={() =>
                    location.pathname === "/" || location.pathname === "/home"
                      ? "active"
                      : ""
                  }
                >
                  Home
                </NavLink>

                <NavLink 
                  to="/about-us" 
                  onClick={(e) => {
                    if (true) {
                      e.preventDefault();
                    }
                  }}
                >
                  About Us
                </NavLink>

                <NavLink 
                  to="/services" 
                  onClick={(e) => {
                    if (true) {
                      e.preventDefault();
                    }
                  }}
                >
                  Services
                </NavLink>

                <NavLink 
                  to="/project" 
                  onClick={(e) => {
                    if (true) {
                      e.preventDefault();
                    }
                  }}
                >
                  Project
                </NavLink>

                <NavLink 
                  to="/contact-us" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </NavLink>


              </div>
            </div>
        }


      </header>

      <main>
        {content}
      </main>

      <footer className="footer">
        <section className="newsletter">
          <div className="container">
            <h5>
              Join Our Newsletter to Keep Up To Date With Us!
            </h5>

            <form 
              className="newsletter-form" 
              onSubmit={handleSubmit(handleNewsletterSubscribe)}
            >
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter your Email"


                  {
                    ...register(
                      "email", 
                      { 
                        required: true, 
                        minLength: 2, 
                        maxLength: 500, 
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                      },
                    )
                  }


                />
                

                {
                  errors.email
                  && <p className="error-message">
                      
                      
                      {
                        errors.email?.type === "required"
                          ? "Email is required"
                          : errors.email.message
                      }


                    </p>
                }


              </div>

              <button 
                type="submit"
                className="btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">
                  {useSVGIcons.AdvotaryIcon}
                </div>

                <span>
                  Advotary
                </span>
              </div>

              <p>
                Laoreet eu auctor non dignissim id arcu amet tristique ipsum. Eu at amet adipiscing egestas quis risus aliquam
                volutpat.
              </p>

              <div className="social-links">
                

                <Link to="#!">
                  {useSVGIcons.LinkedIn}
                </Link>

                <Link to="#!">
                  {useSVGIcons.Instagram}
                </Link>

                <Link to="#!">
                  {useSVGIcons.Twitter}
                </Link>


              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h5>
                  Company
                </h5>

                <ul>
                  <li>


                    <Link to="#!">
                      About Us
                    </Link>


                  </li>

                  <li>


                    <Link to="#!">
                      Services
                    </Link>


                  </li>

                  <li>


                    <Link to="#!">
                      Our Projects
                    </Link>


                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h5>
                  Services
                </h5>

                <ul>
                  <li>


                    <Link to="#!">
                      Document Notarization
                    </Link>


                  </li>

                  <li>


                    <Link to="#!">
                      Legal Consultation
                    </Link>


                  </li>

                  <li>


                    <Link to="#!">
                      Document Preparation
                    </Link>


                  </li>

                  <li>


                    <Link to="#!">
                      Estate Planning
                    </Link>


                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h5>
                  Help
                </h5>

                <ul>
                  <li>


                    <Link to="#!">
                      Customer Support
                    </Link>


                  </li>

                  <li>


                    <Link to="#!">
                      Delivery Details
                    </Link>


                  </li>

                  <li>


                    <Link to="#!">
                      Terms & Conditions
                    </Link>


                  </li>

                  <li>


                    <Link to="#!">
                      Privacy Policy
                    </Link>


                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © 2024 Advotary. All rights reserved.
            </p>

            <p>
              Designed by TokoTema
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};


export default Layout;
