import React from 'react';

const TermOfUse = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Terms of Use</h2>
      <p style={styles.intro}>Welcome to our Library Management System. By accessing or using our services, you agree to the following terms and conditions.</p>
      
      <section style={styles.section}>
        <h3 style={styles.subHeading}>1. Acceptance of Terms</h3>
        <p>By using the Library Management System, you agree to comply with these terms of use. If you do not agree, you should not use the service.</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subHeading}>2. User Responsibilities</h3>
        <ul style={styles.list}>
          <li>Provide accurate information when registering or accessing the system.</li>
          <li>Ensure that all actions taken under your account comply with applicable laws.</li>
          <li>Respect the intellectual property rights of books, authors, and other content available through the system.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subHeading}>3. Account Security</h3>
        <p>It is your responsibility to maintain the confidentiality of your account credentials. You agree to notify us immediately if you believe your account has been compromised.</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subHeading}>4. Content Usage</h3>
        <p>The content provided on the Library Management System is intended for personal use only. You are prohibited from using any content for commercial purposes without explicit permission.</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subHeading}>5. Modifications to Service</h3>
        <p>We reserve the right to modify, suspend, or terminate any part of the service at any time, with or without notice. We will not be liable for any loss or inconvenience caused by such changes.</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subHeading}>6. Privacy and Data Collection</h3>
        <p>Your use of the Library Management System is subject to our <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>, which governs the collection, use, and storage of your data.</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subHeading}>7. Limitation of Liability</h3>
        <p>We do not accept responsibility for any loss or damage arising from the use of the system, including but not limited to data loss, interruptions, or unauthorized access to your account.</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subHeading}>8. Termination</h3>
        <p>We reserve the right to suspend or terminate your account if you violate these terms. Upon termination, you will no longer be able to access the system or its services.</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subHeading}>9. Governing Law</h3>
        <p>These terms of use are governed by the laws of [Country/State], and any disputes will be subject to the jurisdiction of the courts in [Location].</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subHeading}>10. Contact Information</h3>
        <p>If you have any questions about these terms, please contact us at [Email Address].</p>
      </section>
      
      <footer style={styles.footer}>
        <p>&copy; 2024 Library Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    color: "#F25822",
  },
  intro: {
    fontSize: "16px",
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  section: {
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "18px",
    color: "#F25822",
    marginBottom: "10px",
  },
  list: {
    listStyleType: "disc",
    marginLeft: "20px",
  },
  link: {
    color: "#F25822",
    textDecoration: "none",
  },
  footer: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "14px",
    color: "#555",
  }
};

export default TermOfUse;
