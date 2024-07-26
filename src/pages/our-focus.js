import { Button } from "@mui/material";
import IndustryNewsItems from "../components/industry-news-items";
import Footer from "../components/footer";
import styles from "./our-focus.module.css";
import FrameComponent2 from "../components/frame-component2";

const OurFocus = () => {
  return (
    <div className={styles.ourFocus}>
            <FrameComponent2 asset11="/asset-1-12@2x.png"  />

      <main className={styles.content}>
        <section className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <button className={styles.ourFocusWrapper}>
                  <div className={styles.ourFocus2}>Our Focus</div>
                </button>
                <h2 className={styles.ourFocus3}>Our Focus</h2>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent2}>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent3}>
                  <div className={styles.rectangleParent}>
                    <img
                      className={styles.frameItem}
                      loading="lazy"
                      alt=""
                      src="/rectangle-11960@2x.png"
                    />
                    <div className={styles.investmentDescriptionWrapper}>
                      <div className={styles.investmentDescription}>
                        <div className={styles.atNaandiVentures}>
                          At Naandi Ventures, our primary focus is on investing
                          in early-stage startup companies, with a particular
                          emphasis on entities based in India. We maintain an
                          open approach to considering investments across a wide
                          range of sectors and demographics, typically at the
                          seed stage.
                        </div>
                        <div className={styles.beyondInvestmentWeAre}>
                          Beyond investment, we are dedicated to building and
                          nurturing relationships among our members, fellow
                          investor organizations, and ambitious entrepreneurs.
                          Our commitment extends to providing our members with
                          ongoing access to investment opportunities, thereby
                          contributing to the growth of early-stage angel
                          investors within the Indian ecosystem.
                        </div>
                        <div className={styles.furthermoreWeActivelyOffer}>
                          Furthermore, we actively offer mentorship
                          opportunities to budding founders, supporting them
                          throughout their entrepreneurial journey. Our
                          experienced team is well-equipped to expedite your
                          startup journey, regardless of your current stage –
                          whether it’s validating customer needs, identifying
                          product-market fit, scaling your business, developing
                          an MVP, or assembling a well-balanced founding team.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.readyToTakeTheNextStepParent}>
                    <h2 className={styles.readyToTake}>
                      Ready to take the next step?
                    </h2>
                    <div className={styles.clickTheLinkBelowWrapper}>
                      <div className={styles.clickTheLink}>
                        Click the link below
                      </div>
                    </div>
                    <div className={styles.frameWrapper3}>
                      <Button
                        className={styles.frameInner}
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
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.newsHeaderParent}>
                <div className={styles.newsHeader}>
                  <h2 className={styles.founderNews}>Founder News</h2>
                </div>
                <div className={styles.newsItems}>
                  <IndustryNewsItems />
                  <IndustryNewsItems />
                  <IndustryNewsItems />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer layer2="/layer-21@2x.png" />
    </div>
  );
};

export default OurFocus;
