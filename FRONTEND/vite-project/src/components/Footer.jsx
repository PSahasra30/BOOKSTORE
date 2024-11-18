import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h4 style={styles.heading}>Company</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="#about" style={styles.link}>About Us</a></li>
            <li style={styles.listItem}><a href="#careers" style={styles.link}>Careers</a></li>
            <li style={styles.listItem}><a href="#contact" style={styles.link}>Contact</a></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h4 style={styles.heading}>Resources</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="#blog" style={styles.link}>Blog</a></li>
            <li style={styles.listItem}><a href="#help" style={styles.link}>Help Center</a></li>
            <li style={styles.listItem}><a href="#privacy" style={styles.link}>Privacy Policy</a></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h4 style={styles.heading}>Follow Us</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="#facebook" style={styles.link}>Facebook</a></li>
            <li style={styles.listItem}><a href="#twitter" style={styles.link}>Twitter</a></li>
            <li style={styles.listItem}><a href="#instagram" style={styles.link}>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div style={styles.copy}>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
    position: "relative",
    bottom: 0,
    width: "100%",
    textAlign: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  section: {
    marginBottom: "20px",
  },
  heading: {
    fontSize: "16px",
    marginBottom: "10px",
    textTransform: "uppercase",
    color: "#F25822",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "8px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  linkHover: {
    color: "#F25822",
  },
  copy: {
    marginTop: "20px",
    fontSize: "14px",
  },
};

export default Footer;
