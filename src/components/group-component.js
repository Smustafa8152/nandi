import PropTypes from "prop-types";
import styles from "./group-component.module.css";

const GroupComponent = ({
  className = "",
  unsplash8YG31Xn4dSw,
  shaktiRajure,
  coFounderAndOperatingPart,
  prop,
  prop1,
  prop2,
  prop3,
}) => {
  return (
    <div className={[styles.unsplash8yg31xn4dswParent, className].join(" ")}>
      <img
        className={styles.unsplash8yg31xn4dswIcon}
        alt=""
        src={unsplash8YG31Xn4dSw}
      />
      <div className={styles.frameParent}>
        <div className={styles.shaktiRajureWrapper}>
          <div className={styles.shaktiRajure}>{shaktiRajure}</div>
        </div>
        <div className={styles.coFounderAndOperating}>
          {coFounderAndOperatingPart}
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.parent}>
            <img className={styles.icon} loading="lazy" alt="" src={prop} />
            <img className={styles.icon1} loading="lazy" alt="" src={prop1} />
            <img className={styles.icon2} loading="lazy" alt="" src={prop2} />
            <img className={styles.icon3} loading="lazy" alt="" src={prop3} />
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  unsplash8YG31Xn4dSw: PropTypes.string,
  shaktiRajure: PropTypes.string,
  coFounderAndOperatingPart: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
};

export default GroupComponent;
