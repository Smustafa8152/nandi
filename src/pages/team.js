import { Button } from "@mui/material";
import FrameComponent2 from "../components/frame-component2";
import GroupComponent from "../components/group-component";
import Footer from "../components/footer";
import styles from "./team.module.css";

const Team = () => {
  return (
    <div className={styles.team}>
      <FrameComponent2 asset11="/asset-1-1@2x.png" />
      <main className={styles.teamInner}>
        <section className={styles.frameParent}>
          <div className={styles.teamMemberGridWrapper}>
            <div className={styles.teamMemberGrid}>
              <div className={styles.teamMemberRow}>
                <Button
                  className={styles.teamMemberDetails}
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
                  Team
                </Button>
                <h2 className={styles.ourTeam}>Our Team</h2>
              </div>
            </div>
          </div>
          <div className={styles.imageContainerWrapper}>
            <div className={styles.imageContainer}>
              <div className={styles.imageAndDescription}>
                <div className={styles.imageWrapper}>
                  <div className={styles.wrapperTeamMemberImage}>
                    <img
                      className={styles.teamMemberImage}
                      alt=""
                      src="/team-member-image.svg"
                    />
                  </div>
                  <img
                    className={styles.imageWrapperChild}
                    alt=""
                    src="/group-37140.svg"
                  />
                </div>
                <div className={styles.teamMemberBio}>
                  <div className={styles.teamMemberBioChild} />
                  <div className={styles.frameGroup}>
                    <div className={styles.unsplash8yg31xn4dswParent}>
                      <img
                        className={styles.unsplash8yg31xn4dswIcon}
                        alt=""
                        src="/unsplash8yg31xn4dsw@2x.png"
                      />
                      <div className={styles.memberInfoContainer}>
                        <div className={styles.vikasKatragadda}>
                          Vikas Katragadda
                        </div>
                        <div className={styles.coFounderAndOperating}>
                          Co-Founder and Operating Partner
                        </div>
                        <div className={styles.memberSocialLinks}>
                          <div className={styles.socialLinkContainer}>
                            <img
                              className={styles.icon}
                              loading="lazy"
                              alt=""
                              src="/11.svg"
                            />
                            <img
                              className={styles.icon1}
                              loading="lazy"
                              alt=""
                              src="/21.svg"
                            />
                            <img
                              className={styles.icon2}
                              loading="lazy"
                              alt=""
                              src="/31.svg"
                            />
                            <img
                              className={styles.icon3}
                              loading="lazy"
                              alt=""
                              src="/41.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <GroupComponent
                      unsplash8YG31Xn4dSw="/unsplash8yg31xn4dsw-1@2x.png"
                      shaktiRajure="Shakti Rajure"
                      coFounderAndOperatingPart="Co-Founder and Operating Partner"
                      prop="/11.svg"
                      prop1="/21.svg"
                      prop2="/31.svg"
                      prop3="/41.svg"
                    />
                    <GroupComponent
                      unsplash8YG31Xn4dSw="/unsplash8yg31xn4dsw-2@2x.png"
                      shaktiRajure="Aditya Niture"
                      coFounderAndOperatingPart="Co-Founder and Operating Partner"
                      prop="/11.svg"
                      prop1="/21.svg"
                      prop2="/31.svg"
                      prop3="/41.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.advisorInfoParent}>
                <div className={styles.advisorInfo}>
                  <h2 className={styles.advisor}>Advisor</h2>
                </div>
                <div className={styles.advisorProfiles}>
                  <div className={styles.advisorProfilesChild} />
                  <div className={styles.frameContainer}>
                    <GroupComponent
                      unsplash8YG31Xn4dSw="/unsplash8yg31xn4dsw-3@2x.png"
                      shaktiRajure="Harrison Hudson"
                      coFounderAndOperatingPart="Wordpress Dev."
                      prop="/11.svg"
                      prop1="/21.svg"
                      prop2="/31.svg"
                      prop3="/41.svg"
                    />
                    <GroupComponent
                      unsplash8YG31Xn4dSw="/unsplash8yg31xn4dsw-4@2x.png"
                      shaktiRajure="Elizabeth sofia"
                      coFounderAndOperatingPart="Wordpress Dev."
                      prop="/11.svg"
                      prop1="/21.svg"
                      prop2="/31.svg"
                      prop3="/41.svg"
                    />
                    <GroupComponent
                      unsplash8YG31Xn4dSw="/unsplash8yg31xn4dsw-5@2x.png"
                      shaktiRajure="Lucy Evelyn"
                      coFounderAndOperatingPart="UI/UX Designer"
                      prop="/1-5.svg"
                      prop1="/22.svg"
                      prop2="/32.svg"
                      prop3="/42.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer layer2="/layer-22@2x.png" />
    </div>
  );
};

export default Team;
