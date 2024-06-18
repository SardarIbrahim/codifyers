import styles from "../styles/footer.module.css";

const Footer = () => {
  const year = new Date();
  return (
    <div className={styles.footer}>
      Copyright © {year.getFullYear()} Codifyers. All Rights Reserved
    </div>
  );
};

export default Footer;
