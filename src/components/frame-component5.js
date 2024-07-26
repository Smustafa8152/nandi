import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component5.module.css";

const FrameComponent5 = ({
  className = "",
  worldwide,
  globalConnect,
  propFlex,
  propGap,
  propMinWidth,
  propAlignSelf,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propGap, propMinWidth, propAlignSelf]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.frameChild} />
      <img
        className={styles.worldwideIcon}
        loading="lazy"
        alt=""
        src={worldwide}
      />
      <div className={styles.globalConnectWrapper}>
        <div className={styles.globalConnect}>{globalConnect}</div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  worldwide: PropTypes.string,
  globalConnect: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propGap: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent5;
