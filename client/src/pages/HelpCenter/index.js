import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
function Helpcenter() {
  return (
    <div>
    <Header></Header>
        <div className="help-center">
      <header>
        <h1>Cinemax Movie Help Center</h1>
      </header>
      <section className="contact-info">
        <h2 className="h2blue">Contact Information</h2>
        <p className="pblack">Address: 17 Finch Avenue, Woodlawn Road, Waterloo, N20 PE2</p>
        <p className="pblack">Contact: +1 619-909-8900</p>
      </section>
      <section className="faqs">
        <h2 className="h2blue">Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I purchase tickets online?</h3>
          <p className="pblack">To purchase tickets online, visit our website, select the movie and showtime, and follow the steps to complete your booking.</p>
        </div>
        <div className="faq-item">
          <h3>What are the ticket prices?</h3>
          <p className="pblack">Our ticket prices vary depending on the movie, showtime, and location. You can find pricing information on our website.</p>
        </div>
      </section>
      <section className="email-customer-care">
        <h2 className="h2blue">Email Customer Care</h2>
        <p className="pblack">If you have further questions, please email our customer care at:</p>
        <a href="mailto:customercare@cinemaxmovies.com">customercare@cinemaxmovies.com</a>
      </section>
    </div>
        <Footer></Footer>
    </div>

      );
}


export default Helpcenter;
