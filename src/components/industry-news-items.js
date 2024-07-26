import PropTypes from "prop-types";
import styles from "./industry-news-items.module.css";

const IndustryNewsItems = ({ className = "" }) => {
  return (
    <div className={[styles.industryNewsItems, className].join(" ")}>
      <img
        className={styles.industryNewsItemsChild}
        alt=""
        src="/rectangle-11959@2x.png"
      />
      <div className={styles.industriNewsParent}>
        <div className={styles.industriNews}>INDUSTRI NEWS</div>
        <div className={styles.dayBootCamp}>3-day boot camp completed</div>
      </div>
    </div>
  );
};

IndustryNewsItems.propTypes = {
  className: PropTypes.string,
};

export default IndustryNewsItems;
