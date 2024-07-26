import React from 'react';
import '../styles/privacy-policy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <p className="privacy-policy-text">
        At Magic Mack's, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we handle your data when you visit our website.
      </p>

      <h2 className="privacy-policy-heading">Data Collection</h2>
      <p className="privacy-policy-text">
        We do not collect any personal data directly through our website. However, by following links to external services, such as our Facebook page, Instagram page, or booking page, you may be subject to the privacy policies of those services.
      </p>

      <h2 className="privacy-policy-heading">External Links</h2>
      <p className="privacy-policy-text">
        Our website contains links to external websites and services. Please note that we do not control these external sites and are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.
      </p>

      <h2 className="privacy-policy-heading">Social Media</h2>
      <p className="privacy-policy-text">
        Interacting with our social media pages (e.g., liking, sharing, commenting) may involve data collection by the social media platforms. Please refer to the privacy policies of Facebook and Instagram for more information:
      </p>
      <ul className="privacy-policy-list">
        <li className="privacy-policy-list-item">
          <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">Facebook Privacy Policy</a>
        </li>
        <li className="privacy-policy-list-item">
          <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer">Instagram Privacy Policy</a>
        </li>
      </ul>

      <h2 className="privacy-policy-heading">Booking Services</h2>
      <p className="privacy-policy-text">
        Appointment bookings are handled through an external service. Please review the privacy policy of our booking service for information on how your data is managed:
      </p>
      <ul className="privacy-policy-list">
        <li className="privacy-policy-list-item">
          <a href="URL_to_booking_service_privacy_policy" target="_blank" rel="noopener noreferrer">Booking Service Privacy Policy</a>
        </li>
      </ul>

      <h2 className="privacy-policy-heading">Contact Us</h2>
      <p className="privacy-policy-text">
        If you have any questions about our privacy practices, please contact us at:
      </p>
      <p className="privacy-policy-text">Email: info@magicmacks.com</p>
    </div>
  );
};

export default PrivacyPolicy;
