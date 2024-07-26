import { Button } from "@mui/material";
import FrameComponent1 from "../components/frame-component1";
import FounderNewsItems from "../components/founder-news-items";
import FrameComponent from "../components/frame-component";
import styles from "./news.module.css";
import FrameComponent2 from "../components/frame-component2";

const News = () => {
  return (
    <div className={styles.news}>
      <FrameComponent2 asset11="/asset-1-12@2x.png"  />
      <section className={styles.newsChild}>
        <div className={styles.frameGroup}>
          <div className={styles.vectorWrapper}>
            <img className={styles.frameItem} alt=""  src="/vector-2.svg" />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper1}>
              <img
                className={styles.frameInner}
                alt=""
                src="/group-37147.svg"
              />
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <Button
                  className={styles.frameButton}
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fd5104",
                    fontSize: "16",
                    background: "#fff1eb",
                    borderRadius: "35px",
                    "&:hover": { background: "#fff1eb" },
                    width: 93,
                    height: 36,
                  }}
                >
                  News
                </Button>
                <h2 className={styles.founderNews}>Founder News</h2>
              </div>
              <div className={styles.founderNewsContainer}>
                <FounderNewsItems
                  rectangle4="/rectangle-4@2x.png"
                  hyderabadsGreenGroupsWill="Hyderabad’s green groups will monitor United Nations’ COP-26 conference"
                />
                <FounderNewsItems
                  rectangle4="/rectangle-4-1@2x.png"
                  hyderabadsGreenGroupsWill="Humanity First: How These Volunteers Are Saving Lives By Connecting Covid Patients With Plasma Donors"
                  propHeight="unset"
                />
                <FounderNewsItems
                  rectangle4="/rectangle-4-2@2x.png"
                  hyderabadsGreenGroupsWill="LIVE :Vijay Devarakonda And CP Sajjanar | Plasma Donation Awareness"
                  propHeight="438px"
                />
                <FounderNewsItems
                  rectangle4="/rectangle-4-3@2x.png"
                  hyderabadsGreenGroupsWill="Conference of People' to spread awareness on climate change"
                  propHeight="438px"
                />
                <FounderNewsItems
                  rectangle4="/rectangle-4-4@2x.png"
                  hyderabadsGreenGroupsWill="Being Human: NGOs join hands to provide succor to flood-hit people of Telangana"
                  propHeight="unset"
                />
                <FounderNewsItems
                  rectangle4="/rectangle-4-5@2x.png"
                  hyderabadsGreenGroupsWill="గన్ పట్టుకున్న సీతక్కనే మినిష్టర్ అయ్యేలా చేసాడు..నేటి యంగ్ స్టార్స్ కి ఇన్స్ప్రెషన్ బాబు"
                  propHeight="438px"
                />
              </div>
            </div>
          </div>
          <div className={styles.wrapperVector3Parent}>
            <div className={styles.wrapperVector3}>
              <img
                className={styles.wrapperVector3Child}
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <h2 className={styles.founderNews1}>Founder News</h2>
          </div>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default News;
