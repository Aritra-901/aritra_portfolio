import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <style>{`
        .policy-container {
          max-width: 900px;
          margin: 3rem auto;
          padding: 1.5rem;
          font-family: 'Segoe UI', sans-serif;
          line-height: 1.7;
          color: #333;
          margin-top: 100px;
        }

        h1 {
          text-align: center;
          color: #00376b;
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        h2 {
          font-size: 1.3rem;
          color: #007bff;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
        }

        p {
          margin-bottom: 1rem;
        }

        ul {
          padding-left: 1.5rem;
        }

        li {
          margin-bottom: 0.5rem;
        }
      `}</style>

      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy explains how Black Tiger Cement (“we”, “our”, or
          “us”) collects, uses, and protects your information when you use our
          digital platforms and mobile applications such as Sales Staff App, Technical
          Sales App, HRMS, Dealer App, and other enterprise tools (“Services”).
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of personal and usage data:</p>
        <ul>
          <li>Personal details (name, phone number, email, employee ID, etc.)</li>
          <li>Location data (GPS-based latitude/longitude for geofencing)</li>
          <li>Employment-related information (attendance, leaves, payroll, performance)</li>
          <li>Device information (IP address, browser type, OS)</li>
          <li>Activity logs (login time, task submissions, route tracking)</li>
          <li>Order and transaction history (for dealers and transporters)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide, maintain, and improve our applications and services</li>
          <li>To manage employee operations, attendance, and performance</li>
          <li>To track sales and technical visit activities using geolocation</li>
          <li>To process dealer orders, transporter logistics, and HR records</li>
          <li>To generate business insights and internal reports</li>
          <li>To enhance security and prevent unauthorized access</li>
        </ul>

        <h2>3. Sharing and Disclosure</h2>
        <p>We do not sell your personal information. We may share it only with:</p>
        <ul>
          <li>Authorized internal departments (Sales, HR, Admin, etc.)</li>
          <li>Third-party service providers bound by confidentiality</li>
          <li>Government bodies when legally required</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable administrative and technical safeguards to
          protect your data against loss, misuse, or unauthorized access.
        </p>

        <h2>5. Location Permissions</h2>
        <p>
          Some of our apps require access to your device's location to verify
          field visits and enable route tracking. This data is only used for
          operational and compliance purposes.
        </p>

        <h2>6. User Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access and review your data upon request</li>
          <li>Request correction of inaccurate personal data</li>
          <li>Withdraw consent (if applicable) and request account deactivation</li>
        </ul>

        <h2>7. Data Retention</h2>
        <p>
          We retain your data for as long as necessary to fulfill the purposes
          mentioned above or as required by applicable law.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The latest
          version will always be posted on our platform with the revised date.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions or concerns about this policy, please contact
          us at <strong>privacy@blacktigercement.com</strong>.
        </p>
      </div>

      <Footer />
    </>
  );
}
