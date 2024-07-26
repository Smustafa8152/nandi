import GroupComponent1 from "./group-component1";
import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.whatDoWeFocusOnWrapper}>
        <h1 className={styles.whatDoWe}>What do We Focus on?</h1>
      </div>
      <div className={styles.focusContent}>
        <GroupComponent1
          focusStatementPlaceholder="01"
          weAreFocusOnDrivingSustai="We are focus on driving Sustainable and Scalable Impact"
        />
        <GroupComponent1
          focusStatementPlaceholder="02"
          weAreFocusOnDrivingSustai="We are focused on Founder’s Passion, Resilience, Unique Advantage"
          propMinHeight="unset"
        />
        <GroupComponent1
          focusStatementPlaceholder="03"
          weAreFocusOnDrivingSustai="We pick companies where we can add value and be Trusted Partners"
          propMinHeight="unset"
        />
        <GroupComponent1
          focusStatementPlaceholder="04"
          weAreFocusOnDrivingSustai="We are Industry and Geography Agnostic"
          propMinHeight="unset"
        />
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
