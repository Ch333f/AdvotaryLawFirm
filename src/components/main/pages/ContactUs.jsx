// import modules
import { useState } from "react";
import { useForm } from "react-hook-form";

import Layout from "../../Layout.jsx";
import { useSVGIcons } from "../../../static/assets/utils/useSVGIcons.js";
import ADVOTARY from "../../../static/assets/imgs/ADVOTARY.svg";
import underline from "../../../static/assets/imgs/underline.svg";
import blue_bg from "../../../static/assets/imgs/blue_bg.svg";
import styles from "../../../static/assets/scss/ContactUs.module.scss";


function ContactUs() {
  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors },
    reset,
  } = useForm();
  const [activeFaq, setActiveFaq] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const faqs = [
    {
      question: "What is a Notary Public?",
      answer: "Et arcu ornare purus ultrices faucibus ad mollis pulvinar. Arcu diam dictum ac egestas eget amet. Auctor nibh scelerisque adipiscing vitae quisque proin condimentum auctor."
    },
    {
      question: "Do I need an appointment for notary services?",
      answer: "Laoreet eu auctor non dignissim id arcu amet tristique ipsum. Eu at amet adipiscing egestas quis risus aliquam. Volutpat euismod dolor faucibus."
    },
    {
      question: "Can you notarize documents in a foreign language?",
      answer: "Laoreet eu auctor non dignissim id arcu amet tristique ipsum. Eu at amet adipiscing egestas quis risus aliquam. Volutpat euismod dolor faucibus."
    },
    {
      question: "What are your business hours?",
      answer: "Laoreet eu auctor non dignissim id arcu amet tristique ipsum. Eu at amet adipiscing egestas quis risus aliquam. Volutpat euismod dolor faucibus."
    }
  ];
  const stats = [
    { num: "5K+", label: "Satisfied Clients Served" },
    { num: "10K+", label: "Documents Notarized" },
    { num: "50+", label: "Dedicated Legal Experts" }
  ];
  
  
  const closeModal = () => setShowModal(false);


  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setShowModal(true);
    reset();
  };


  return (
    <Layout>
      <section className={styles["hero-banner"]}>
        <div className={styles["hero-content"]}>
          <h1>
            Contact Us
          </h1>

          <div className={styles["breadcrumbs"]}>
            Home / Projects
          </div>
        </div>
      </section>

      <section className={styles["contact-section"]}>
        <div className={`container ${styles["container"]}`}>
          <div className={styles["contact-info"]}>
            <h4>
              Get In Touch
            </h4>

            <div className={styles["info-list"]}>
              <div className={styles["info-item"]}>
                <span className={styles["contact-icon"]}>
                  {useSVGIcons.Mail}
                </span>

                <span>
                  info@advotary.com
                </span> 
              </div>

              <div className={styles["info-item"]}>
                <span className={styles["contact-icon"]}>
                  {useSVGIcons.Clock}
                </span>

                <span>
                  08.00-17.00, Mon-Sat
                </span>
              </div>

              <div className={styles["info-item"]}>
                <span className={styles["contact-icon"]}>
                  {useSVGIcons.Phone}
                </span>

                <span>
                  +123 458 7899
                </span>
              </div>
            </div>

            <p className={styles["info-desc"]}>
              Laoreet eu auctor non dignissim id arcu amet tristique ipsum. Eu at amet adipiscing egestas quis risus aliquam 
              volutpat.
            </p>
          </div>




          <form 
            className={styles["contact-form"]} 
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={`${styles["form-group"]} ${errors.name ? styles["has-error"] : ''}`}>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className={styles["error-message"]}>{errors.name.message}</span>}
            </div>

            <div className={`${styles["form-group"]} ${styles["grid-2"]}`}>
              <div className={`${styles["sub-group"]} ${errors.email ? styles["has-error"] : ''}`}>
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
                {errors.email && <span className={styles["error-message"]}>{errors.email.message}</span>}
              </div>

              <div className={`${styles["sub-group"]} ${errors.phone ? styles["has-error"] : ''}`}>
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
                {errors.phone && <span className={styles["error-message"]}>{errors.phone.message}</span>}
              </div>
            </div>

            <div className={`${styles["form-group"]} ${styles["textarea-group"]} ${errors.message ? styles["has-error"] : ''}`}>
              <textarea
                placeholder="Your Message"
                rows="4"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && <span className={styles["error-message"]}>{errors.message.message}</span>}
            </div>

            <button type="submit" className={styles["btn-submit"]}>Send Message</button>
          </form>

          {showModal && (
              <div className={styles["modal-overlay"]} onClick={closeModal}>
                <div className={styles["modal-content"]} onClick={e => e.stopPropagation()}>
                  <div className={styles["icon-success"]}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out to Advotary. Our team will get back to you shortly.</p>
                  <button className={styles["btn-close"]} onClick={closeModal}>Close</button>
                </div>
              </div>
            )}
        </div>
      </section>

      <section className={styles["stats-section"]}>
        <div className={styles["watermark"]}>
          <img src={ADVOTARY} alt="" />
        </div>
        <div className={styles["container"]}>
          {stats.map((stat, i) => (
            <div key={i} className={styles["stat-item"]}>
              <h3>{stat.num}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["faq-section"]}>
        <div className={styles["section-header"]}>
          <span className={styles["badge"]}>FAQ</span>
          <h2>Advotary FAQ: Get the <span className={styles["underline-wrapper"]}><span className={styles["underline-text"]}>Answers</span><img src={underline} alt="" className={styles["underline-svg"]} /></span> <br /> You Need</h2>
          <p className={styles["desc"]}>
            Laoreet eu auctor non dignissim id arcu amet tristique ipsum. Eu at amet adipiscing egestas quis risus aliquam. Volutpat euismod dolor faucibus
          </p>
        </div>

        <div className={styles["faq-list"]}>
          {faqs.map((faq, i) => (
              <div key={i} className={`${styles["faq-item"]} ${activeFaq === i ? styles["active"] : ''}`}>
                <button
                  className={`${styles["faq-header"]} ${activeFaq === i ? styles["active"] : ''}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span>{faq.question}</span>
                  <img
                    src={activeFaq === i ? "/assets/arrow-up.svg" : "/assets/arrow-down.svg"}
                    alt=""
                    className={`${styles["faq-icon"]} ${activeFaq === i ? styles["active"] : ''}`}
                  />
                </button>
                <div className={`${styles["faq-body"]} ${activeFaq === i ? styles["active"] : ''}`}>
                  <p>{faq.answer}</p>
                </div>
                <div className={styles["faq-divider"]}></div>
              </div>
            ))}
        </div>

        <div className={styles["faq-background"]}>
          <img src={blue_bg} alt="" />
        </div>
      </section>
    </Layout>
  );
};


export default ContactUs;
