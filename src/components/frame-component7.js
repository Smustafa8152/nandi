import PropTypes from "prop-types";
import styles from "./frame-component7.module.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section
      className={[styles.naandiVenturesLandingPageOInner, className].join(" ")}
    >
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.imagePlaceholderWrapper}>
            <div className={styles.imagePlaceholder}>
              <img
                className={styles.imagePlaceholderChild}
                alt=""
                src="/rectangle-20@2x.png"
              />
              <img
                className={styles.imagePlaceholderItem}
                loading="lazy"
                alt=""
                src="/rectangle-19@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.whoWeAreParent}>
          <h1 className={styles.whoWeAre}>Who We are</h1>
          <div className={styles.weAreADedicatedTeamOfBitParent}>
            <div
              className={styles.weAreA}
            >{`We are a dedicated team of BITS Pilani and Kellogg School of Management alumni, driven by our passion for entrepreneurship. At Naandi Ventures, we specialize in nurturing and supporting early-stage startups primarily within the Indian market, with a strong focus on the Technology, Food & Beverage, Education, and Social Impact sectors.`}</div>
            <div className={styles.whatWeDoParent}>
              <h1 className={styles.whatWeDo}>What We Do</h1>
              <div className={styles.ourMissionIs}>
                Our mission is to provide discerning investors with carefully
                vetted and promising investment prospects, ranging from as
                little as $10K to $200K. These opportunities encompass a
                spectrum of ventures, spanning both startups and large-scale
                projects. What sets us apart is our commitment to co-invest
                alongside our partners in every opportunity we present. Join us
                in fueling innovation and driving positive change through
                strategic investments.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
