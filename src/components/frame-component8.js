import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./frame-component8.module.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.ourMissionAtNaandiVenturesParent}>
        <div className={styles.ourMissionAt}>
          Our mission at Naandi Ventures is to back resilient founders on their
          transformative journey towards greatness. We understand that
          entrepreneurship is a path paved with obstacles, and we’re here to
          provide the support, resources, and mentorship needed to help you
          navigate and conquer those challenges. Your vision is our inspiration,
          and together, we’ll forge a path to success .
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <Button
              className={styles.frameChild}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#fd5104",
                borderRadius: "5px",
                "&:hover": { background: "#fd5104" },
                width: 196,
                height: 52,
              }}
            >
              Invest with Naandi
            </Button>
            <Button
              className={styles.frameItem}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#494949",
                fontSize: "18",
                background: "#fff",
                borderRadius: "5px",
                "&:hover": { background: "#fff" },
                height: 52,
              }}
            >
              Become a Naandi Founder
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
