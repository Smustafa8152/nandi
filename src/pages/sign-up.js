import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent2 from "../components/frame-component2";
import FormAndDescription from "../components/form-and-description";
import FormFieldsRows2 from "../components/form-fields-rows2";
import FormFieldsRows1 from "../components/form-fields-rows1";
import FormFieldsRows from "../components/form-fields-rows";
import Footer from "../components/footer";
import styles from "./sign-up.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-4296@2x.png"
        />
        <img className={styles.frameItem} alt="" src="/group-37141.svg" />
      </div>
      <FrameComponent2 asset11="/asset-1-12@2x.png" />
      <div className={styles.signUpChild} />
      <main className={styles.mainContentWrapper}>
        <section className={styles.mainContent}>
          <FormAndDescription />
          <div className={styles.formContainer}>
            <img
              className={styles.asset11}
              loading="lazy"
              alt=""
              src="/asset-1-1@2x.png"
            />
            <div className={styles.formFields}>
              <form className={styles.formFieldsWrapper}>
                <div className={styles.formFieldsLayout}>
                  <div className={styles.formFieldsRows}>
                    <div className={styles.inputFieldsRow}>
                      <div className={styles.inputFieldsLabels}>
                        <div className={styles.firstName}>First name</div>
                        <div className={styles.lastName}>Last name</div>
                      </div>
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameInner} />
                      <div className={styles.rectangleDiv} />
                    </div>
                  </div>
                  <div className={styles.formFieldsRows1}>
                    <div className={styles.emailWrapper}>
                      <div className={styles.email}>Email</div>
                    </div>
                    <input className={styles.formFieldsRowsChild} type="text" />
                  </div>
                  <div className={styles.formFieldsRows2}>
                    <div className={styles.companyNameWrapper}>
                      <div className={styles.companyName}>Company Name</div>
                    </div>
                    <TextField
                      className={styles.formFieldsRowsItem}
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#c8bebe" },
                        "& .MuiInputBase-root": {
                          height: "54px",
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          borderRadius: "25px",
                        },
                      }}
                    />
                  </div>
                  <div className={styles.formFieldsRows3}>
                    <div className={styles.formFieldsRowsInner}>
                      <div className={styles.companyHqLocationParent}>
                        <div className={styles.companyHqLocation}>
                          Company HQ Location
                        </div>
                        <div className={styles.frameParent}>
                          <img
                            className={styles.groupIcon}
                            alt=""
                            src="/group-37148.svg"
                          />
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector-21.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <input className={styles.rectangleInput} type="text" />
                  </div>
                  <FormFieldsRows2 entityType="Entity Type" />
                  <FormFieldsRows1 />
                  <FormFieldsRows1 />
                  <FormFieldsRows industry="Industry" />
                  <FormFieldsRows2 entityType="What is Current Revenue of Company" />
                  <div className={styles.formFieldsRows4}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameGroup}>
                        <div className={styles.frameContainer}>
                          <img
                            className={styles.frameChild1}
                            alt=""
                            src="/group-37143.svg"
                          />
                          <div className={styles.wrapperVector3}>
                            <img
                              className={styles.wrapperVector3Child}
                              loading="lazy"
                              alt=""
                              src="/vector-3.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.howDidYou}>
                          How did you learn about Naandi Ventures?
                        </div>
                      </div>
                    </div>
                    <div className={styles.formFieldsRowsChild1} />
                  </div>
                  <FormFieldsRows
                    industry="How did you learn about Naandi Ventures?"
                    propHeight="unset"
                  />
                </div>
                <Button
                  className={styles.formFieldsWrapperChild}
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
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer layer2="/layer-21@2x.png" />
    </div>
  );
};

export default SignUp;
