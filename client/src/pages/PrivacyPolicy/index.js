import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
function PrivacyPolicy()  {
  return (
    <div>
    <Header></Header>
    <div className="privacy-policy">
      <header>
        <h1>Privacy Policy</h1>
      </header>
      <section className="content">
        <h2>Introduction</h2>
        <p>
          Welcome to Cinemax Movie's Privacy Policy. This policy explains how we collect, use, and protect your personal information. We take your privacy seriously and are committed to safeguarding your data.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We may collect various types of information, including but not limited to:
        </p>
        <ul>
          <li>Customer name, email address, and contact details when Customer create an account or contact us.</li>
          <li>Payment information when customer make a purchase, such as credit card details.</li>
          <li>Information you provide when participating in surveys, contests, or promotions.</li>
          <li>Information about User device, browser, and IP address for analytics and security purposes.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We use your information for various purposes, including:
        </p>
        <ul>
          <li>Processing Customer orders and providing customer support.</li>
          <li>Improving our services and website based on USer feedback and usage patterns.</li>
          <li>Marketing and promotional activities, with Customer consent.</li>
          <li>Complying with legal and regulatory requirements.</li>
        </ul>
      </section>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default PrivacyPolicy;
