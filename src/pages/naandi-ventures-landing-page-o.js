import FrameComponent9 from "../components/frame-component9";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import Component from "../components/component";
import styles from "./naandi-ventures-landing-page-o.module.css";

const NaandiVenturesLandingPageO = () => {
  return (
    <div className={styles.naandiVenturesLandingPageO}>
      <div className={styles.whatDoWe}>What do We Focus on?</div>
      <img
        className={styles.naandiVenturesLandingPageOChild}
        alt=""
        src="/rectangle-18@2x.png"
      />
      <section className={styles.naandiVenturesLandingPageOInner}>
        <div className={styles.frameParent}>
          <FrameComponent9 />
          <FrameComponent8 />
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.indiasEarlyGrowthVenturesWrapper}>
          <h1 className={styles.indiasEarlyGrowth}>
            India's Early Growth Ventures
          </h1>
        </div>
      </section>
      <FrameComponent7 />
      <FrameComponent4 />
      <FrameComponent3 />
      <Component />
    </div>
  );
};

export default NaandiVenturesLandingPageO;
