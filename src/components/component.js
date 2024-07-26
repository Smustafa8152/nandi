import PropTypes from "prop-types";
import styles from "./component.module.css";

const Component = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.copyright}>
        © Copyright 2024, All Rights Reserved by Naandi Ventures
      </div>
      <div className={styles.bg} />
      <img
        className={styles.layer2Icon}
        loading="lazy"
        alt=""
        src="/layer-23@2x.png"
      />
      <div className={styles.footerNavigationLinksWrapper}>
        <div className={styles.footerNavigationLinks}>
          
          <div className={styles.portfolio}>Portfolio</div>
          <div className={styles.ourFocus}>Our Focus</div>
          <div className={styles.founders}>Founders</div>
          <div className={styles.investors}>Investors</div>
          <div className={styles.team}>Team</div>
          <div className={styles.news}>News</div>
        </div>
      </div>
      <div className={styles.emptyContainerWrapper}>
        <div className={styles.emptyContainer}>
          <img
            className={styles.emptyContentIcon}
            loading="lazy"
            alt=""
            src="/1.svg"
          />
          <img
            className={styles.emptyContentIcon1}
            loading="lazy"
            alt=""
            src="/22.svg"
          />
          <img
            className={styles.emptyContentIcon2}
            loading="lazy"
            alt=""
            src="/3.svg"
          />
          <img
            className={styles.emptyContentIcon3}
            loading="lazy"
            alt=""
            src="/4.svg"
          />
        </div>
      </div>
    </footer>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
