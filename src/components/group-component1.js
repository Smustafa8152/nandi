import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./group-component1.module.css";

const GroupComponent1 = ({
  className = "",
  focusStatementPlaceholder,
  weAreFocusOnDrivingSustai,
  propMinHeight,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.focusStatementPlaceholders}>
        {focusStatementPlaceholder}
      </div>
      <div className={styles.weAreFocus}>{weAreFocusOnDrivingSustai}</div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  focusStatementPlaceholder: PropTypes.string,
  weAreFocusOnDrivingSustai: PropTypes.string,

  /** Style props */
  propMinHeight: PropTypes.any,
};

export default GroupComponent1;
