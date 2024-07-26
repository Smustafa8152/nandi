import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/group-37148.svg" />
      <footer className={styles.footer}>
        <div className={styles.bg} />
        <img
          className={styles.layer2Icon}
          loading="lazy"
          alt=""
          src="/layer-2@2x.png"
        />
        <div className={styles.portfolio}>Portfolio</div>
        <div className={styles.ourFocus}>Our Focus</div>
        <div className={styles.founders}>Founders</div>
        <div className={styles.investors}>Investors</div>
        <div className={styles.team}>Team</div>
        <div className={styles.news}>News</div>
        <img
          className={styles.breadcrumbsListIcon}
          loading="lazy"
          alt=""
          src="/1.svg"
        />
        <img
          className={styles.breadcrumbsListIcon1}
          loading="lazy"
          alt=""
          src="/2.svg"
        />
        <img
          className={styles.breadcrumbsListIcon2}
          loading="lazy"
          alt=""
          src="/3.svg"
        />
        <img
          className={styles.breadcrumbsListIcon3}
          loading="lazy"
          alt=""
          src="/4.svg"
        />
      </footer>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
