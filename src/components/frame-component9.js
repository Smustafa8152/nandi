import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./frame-component9.module.css";
import FrameComponent2 from "./frame-component2";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <FrameComponent2 asset11="/asset-1-12@2x.png"  />
      <div className={styles.weInvestInResilientFounderWrapper}>
        <h1 className={styles.weInvestInContainer}>
          <span>{`We Invest in Resilient `}</span>
          <span className={styles.foundersWorking}>Founders Working</span>
          <span> on Sustainable Impact</span>
        </h1>
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
