import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component6.module.css";

const FrameComponent6 = ({
  className = "",
  college,
  universityConnect,
  propFlex,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameChild} />
      <img className={styles.collegeIcon} loading="lazy" alt="" src={college} />
      <div className={styles.universityConnectWrapper}>
        <div className={styles.universityConnect}>{universityConnect}</div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  college: PropTypes.string,
  universityConnect: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
};

export default FrameComponent6;
