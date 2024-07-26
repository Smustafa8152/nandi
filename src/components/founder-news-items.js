import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./founder-news-items.module.css";

const FounderNewsItems = ({
  className = "",
  rectangle4,
  hyderabadsGreenGroupsWill,
  propHeight,
}) => {
  const founderNewsItemsStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={[styles.founderNewsItems, className].join(" ")}
      style={founderNewsItemsStyle}
    >
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={rectangle4}
        />
        <div className={styles.founderNewsParent}>
          <div className={styles.founderNews}>FOUNDER NEWS</div>
          <div className={styles.hyderabadsGreenGroups}>
            {hyderabadsGreenGroupsWill}
          </div>
        </div>
      </div>
    </div>
  );
};

FounderNewsItems.propTypes = {
  className: PropTypes.string,
  rectangle4: PropTypes.string,
  hyderabadsGreenGroupsWill: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default FounderNewsItems;
