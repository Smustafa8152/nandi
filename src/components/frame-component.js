import IndustryNewsItems from "./industry-news-items";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={[styles.industryNewsContainerWrapper, className].join(" ")}
    >
      <div className={styles.industryNewsContainer}>
        <IndustryNewsItems />
        <IndustryNewsItems />
        <IndustryNewsItems />
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
