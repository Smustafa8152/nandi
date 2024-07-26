import FrameComponent6 from "./frame-component6";
import FrameComponent5 from "./frame-component5";
import PropTypes from "prop-types";
import styles from "./frame-component4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={[styles.naandiVenturesLandingPageOInner, className].join(" ")}
    >
      <div className={styles.frameParent}>
        <div className={styles.whereDoWeGetOurStartupsFWrapper}>
          <h1 className={styles.whereDoWe}>
            Where Do We Get Our Startups from?
          </h1>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <FrameComponent6
                college="/college.svg"
                universityConnect="University Connect"
              />
              <FrameComponent6
                college="/group-9.svg"
                universityConnect="Incubator Connect"
                propFlex="1"
              />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
                <div className={styles.womenAndMinorityWrapper}>
                  <div className={styles.womenAndMinority}>
                    Women and Minority
                  </div>
                </div>
              </div>
              <FrameComponent5
                worldwide="/worldwide.svg"
                globalConnect="Global Connect"
              />
            </div>
          </div>
          <FrameComponent5
            worldwide="/group-8.svg"
            globalConnect="SMB Connect"
            propFlex="unset"
            propGap="20px"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
