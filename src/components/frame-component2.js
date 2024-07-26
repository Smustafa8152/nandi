import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";
import { Link } from "react-router-dom";
const FrameComponent2 = ({ className = "", asset11 }) => {
  return (
    <div className={[styles.teamInner, className].join(" ")}>
      <header className={styles.asset11Parent}>
        <img className={styles.asset11} loading="lazy" alt="" src={asset11} />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <nav className={styles.navigationLinksWrapper}>
              <nav className={styles.navigationLinks}>
                <Link className={styles.portfolio} to="/">Portfolio</Link>
                <Link to="/our-focus" className={styles.ourFocus}>Our Focus</Link>
                <Link to="/"  className={styles.founders}>Founders</Link>
                <Link to="/"  className={styles.investors}>Investors</Link>
                <Link  to="/team"  className={styles.team}>Team</Link>
                <Link to="/news"  className={styles.news}>News</Link>
              </nav>
            </nav>
            <Button
              className={styles.frameChild}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#fd5104",
                borderRadius: "61px",
                "&:hover": { background: "#fd5104" },
                width: 142,
                height: 38,
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  asset11: PropTypes.string,
};

export default FrameComponent2;
