// import modules
import { useForm } from 'react-hook-form';
import { FiArrowRight, FiMail, FiClock, FiPhone } from 'react-icons/fi';

import Layout from "../../Layout.jsx";
import "../../../static/assets/scss/Home.scss";


function Home() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = (data) => {
    console.log('Home Form Data:', data);
    alert('Thank you for contacting us!');
    reset();
  };

  const services = [
    {
      title: "Corporate & Commercial Law",
      desc: "Structuring, contracts, compliance, and advisory for growing enterprises.",
      icon: "/static/assets/imgs/corporate_n_commercial_law.svg"
    },
    {
      title: "Mergers & Acquisitions",
      desc: "Strategic deal support—from due diligence to post-closing integration.",
      icon: "/static/assets/imgs/mergers_n_acquisitions.svg"
    },
    {
      title: "Employment & Labor",
      desc: "Guiding companies through evolving workplace regulations.",
      icon: "/static/assets/imgs/emplyment_n_labor.svg"
    },
    {
      title: "Dispute Resolution & Litigation",
      desc: "Practical advocacy to protect your business interests.",
      icon: "/static/assets/imgs/dispute_resolution.svg"
    }
  ];

  const testimonials = [
    {
      name: "John S.",
      role: "Estate Planning",
      header: "Highly Recommended!",
      text: "Their proactive counsel has been invaluable during our expansion."
    },
    {
      name: "Emily R.",
      role: "Real Estate Transactions",
      header: "Advotary Made it easy",
      text: "A rare combination of legal precision and commercial awareness."
    },
    {
      name: "Michael T.",
      role: "Business Compliance",
      header: "Exceptional Service!",
      text: "They navigated complex regulations smoothly, ensuring compliance at every step."
    }
  ];

  const insights = [
    {
      title: "Modifying Corporate Governance in 2023",
      img: "/static/assets/imgs/court.png",
      date: "Oct 24, 2023"
    },
    {
      title: "Key Changes That Strengthen Business Contracts",
      img: "/static/assets/imgs/pen2.png",
      date: "Oct 24, 2023"
    },
    {
      title: "How to Prepare for a Mid-Year Legal Checklist",
      img: "/static/assets/imgs/gavel.png",
      date: "Oct 24, 2023"
    }
  ];
  const stats = [
    { num: "5K+", label: "Satisfied Clients Served" },
    { num: "10K+", label: "Documents Notarized" },
    { num: "50+", label: "Dedicated Legal Experts" }
  ];

  return (
    <Layout>
      <div className="home-content-wrap">
        <section className="hero-home">
          <div className="container">
            <div className="hero-content">
              <span className="badge">Welcome to Advotary</span>
              <h1>Your Strategic Legal <br /> <span className="underline-wrapper"><span className="underline-text">Partner for</span><img src="/static/assets/imgs/home_hero_underline.svg" alt="" className="underline-svg" /></span> Business <br /> Growth and Protection</h1>
              <p>Trusted by mid-market and enterprise clients for complex legal matters, transactions, and corporate advisory.</p>
              <div className="hero-btns">
                <button className="btn-expertise">EXPLORE OUR EXPERTISE</button>
                <button className="btn-cases">READ CASE STUDIES</button>
              </div>
            </div>
            <img src="/static/assets/imgs/Icon.svg" alt="Icon" className="hero-icon-plain" />
          </div>
        </section>

        <section className="quick-contact">
          <div className="container">
            <div className="contact-info">
              <h2>Partner With a Firm That <span className="underline-wrapper"><span className="underline-text">Understands Business</span><img src="/static/assets/imgs/schedule_underline.svg" alt="" className="underline-svg" /></span></h2>
              <div className="info-items">
                <div className="info-item">
                  <FiMail className="contact-icon" />
                  <span>info@advotary.com</span>
                </div>
                <div className="info-item">
                  <FiClock className="contact-icon" />
                  <span>08.00-17.00, Mon-Sat</span>
                </div>
                <div className="info-item">
                  <FiPhone className="contact-icon" />
                  <span>+123 456 7899</span>
                </div>
              </div>
              <p>Schedule a consultation and discover how we can support your corporate objectives.</p>
            </div>
            <form className="home-contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>

              <div className="form-row">
                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email format"
                      }
                    })}
                  />
                  {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>
                <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    {...register("phone", { 
                      required: "Phone is required",
                      pattern: {
                        value: /^[0-9+\s-]*$/,
                        message: "Invalid phone number"
                      }
                    })}
                  />
                  {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                </div>
              </div>

              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <textarea 
                  placeholder="Your Message" 
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message.message}</span>}
              </div>
              <button type="submit" className="btn-submit">SEND MESSAGE</button>
            </form>
          </div>
        </section>

        <section className="about-advotary" id="about">
          <div className="container">
            <div className="about-bg-image">
              <img src="/static/assets/imgs/statue.png" alt="Lady Justice" />
            </div>

            <div className="about-content-grid">
              <div className="left-col">
                <span className="badge">ABOUT US</span>
                <h2>Dedicated to Your <br /> Legal <span className="underline-wrapper">Success<img src="/static/assets/imgs/home_hero_underline.svg" alt="" className="underline-svg" /></span></h2>
                <p>For over two decades, our firm has represented mid-size and enterprise clients across industries—providing strategic, commercially focused legal solutions. With a team of 20+ attorneys across corporate, litigation, and regulatory practice areas, we combine legal excellence with real-world business insight.</p>
                <a href="#learn" className="learn-more-link">LEARN MORE ABOUT US <FiArrowRight className="arrow-icon" /></a>
              </div>

              <div className="right-col">
                <div className="feature-block">
                  <h3>Expertise and <br /> Experience</h3>
                  <p>We bring together seasoned attorneys, business insight, and modern legal strategies to support corporate growth.</p>
                </div>
                <div className="feature-divider"></div>
                <div className="feature-block">
                  <h3>Confidentiality <br /> Guaranteed</h3>
                  <p>Laoreet eu auctor non dignissim id arcu amet tristique ipsum. Eu at amet adipiscing egestas quis risus aliquam. Volutpat euismod dolor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="watermark">
            <img src="/static/assets/imgs/ADVOTARY.svg" alt="" />
          </div>
          <div className="container">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <h3>{stat.num}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="services-home" id="services">
          <div className="container">
            <div className="section-header">
              <span className="badge">OUR SERVICES</span>
              <h2>Comprehensive <span className="underline-wrapper">Legal<img src="/static/assets/imgs/home_hero_underline.svg" alt="" className="underline-svg" /></span> Solutions <br /> for Modern Businesses</h2>
              <p>Our team of experienced attorneys delivers business-first legal solutions across key corporate practice areas.</p>
            </div>
            <div className="services-grid">
              {services.map((item, i) => (
                <div className="service-card" key={i}>
                  <div className="">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <h4 className='no-wrap'>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-studies-home" id="projects">
          <div className="container">
            <div className="case-study-grid">
              <div className="cs-header">
                 <span className="badge">OUR CASE STUDY</span>
                 <h2>Proven Results. <br /> Trusted <span className="underline-wrapper">Counsel.<img src="/static/assets/imgs/home_hero_underline.svg" alt="" className="underline-svg" /></span></h2>
                 <p>Our clients’ success stories reflect our commitment to excellence and results-oriented advocacy.</p>
              </div>

              <div className="cs-card card-1">
                 <div className="card-img">
                   <img src="/static/assets/imgs/the_law.png" alt="Law Books" />
                 </div>
                 <div className="card-content">
                   <span className="card-badge">Business Planning</span>
                   <h3>Manufacturing Consolidation</h3>
                   <p>Guided a client through the acquisition and integration of three regional subsidiaries.</p>
                   <a href="#read" className="read-more">READ MORE <FiArrowRight /></a>
                 </div>
              </div>

              <div className="cs-card card-2">
                 <div className="card-content">
                   <span className="card-badge">Technology Formation</span>
                   <h3>Fintech Expansion</h3>
                   <p>Enabled a fast-growing startup to secure Series B funding through robust contract structuring.</p>
                   <a href="#read" className="read-more">READ MORE <FiArrowRight /></a>
                 </div>
                 <div className="card-img">
                   <img src="/static/assets/imgs/pen.png" alt="Fountain Pen" />
                 </div>
              </div>

              <div className="cs-cta">
                <p>View more real-world examples of how we’ve helped clients achieve success</p>
                <button className="btn-see-all">SEE ALL CASE STUDIES</button>
              </div>

            </div>
          </div>
        </section>

        <section className="testimonials-home">
           <div className="container">
              <div className="section-header">
                <span className="badge">TESTIMONIALS</span>
                <h2>Trusted by Leading <br /> <span className="underline-wrapper">Businesses<img src="/static/assets/imgs/home_hero_underline.svg" alt="" className="underline-svg" /></span></h2>
              </div>
              <div className="testimonials-grid">
                {testimonials.map((t, i) => (
                  <div className="testimonial-card" key={i}>
                    <div className="card-top">
                       <div className="quote-icon">
                          <img src="/static/assets/imgs/fe_quote-left.svg" alt="Quote" />
                       </div>
                       <div className="author-info">
                          <span className="author-name">{t.name}</span>
                          <span className="author-role">{t.role}</span>
                       </div>
                    </div>
                    <div className="card-divider"></div>
                    <h4 className="card-header">{t.header}</h4>
                    <p className="card-text">{t.text}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        <section className="insights-home" id="insights">
           <div className="container">
              <div className="section-header">
                <span className="badge">LEARN MORE</span>
                <h2><span className="underline-wrapper">Insights<img src="/static/assets/imgs/underline.svg" alt="" className="underline-svg" /></span> That Drive Smarter Decisions</h2>
                <p>Legal perspectives and industry trends to help businesses stay </p> 
                <p> compliant and competitive.</p>
              </div>
              <div className="insights-grid">
                {insights.map((blog, i) => (
                  <div className="insight-card" key={i}>
                    <div className="card-img">
                       <img src={blog.img} alt="" />
                    </div>
                    <div className="card-content">
                      <h4>{blog.title}</h4>
                      <a href="#read">READ MORE →</a>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>
      </div>
    </Layout>
  );
};


export default Home;
