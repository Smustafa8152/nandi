import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = ({ className = "", layer2 }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.bg} />
      <img className={styles.layer2Icon} loading="lazy" alt="" src={layer2} />
      <div className={styles.footerNavigation}>
        <div className={styles.footerLinks}>
          <div className={styles.portfolio}>Portfolio</div>
          <div className={styles.ourFocus}>Our Focus</div>
          <div className={styles.founders}>Founders</div>
          <div className={styles.investors}>Investors</div>
          <div className={styles.team}>Team</div>
          <div className={styles.news}>News</div>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.socialMediaIcons}>
          <img
            className={styles.socialMediaPlaceholder}
            loading="lazy"
            alt=""
            src="/1.svg"
          />
          <img
            className={styles.socialMediaPlaceholder1}
            loading="lazy"
            alt=""
            src="/2.svg"
          />
          <img
            className={styles.socialMediaPlaceholder2}
            loading="lazy"
            alt=""
            src="/3.svg"
          />
          <img
            className={styles.socialMediaPlaceholder3}
            loading="lazy"
            alt=""
            src="/4.svg"
          />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  layer2: PropTypes.string,
};

export default Footer;
