import PropTypes from "prop-types";
import styles from "./form-and-description.module.css";

const FormAndDescription = ({ className = "" }) => {
  return (
    <div className={[styles.formAndDescription, className].join(" ")}>
      <div className={styles.formDescriptionWrapper}>
        <div className={styles.formDescriptionContainer}>
          <div className={styles.formDescriptionLayout}>
            <div className={styles.formDescriptionColumns}>
              <img
                className={styles.formDescriptionColumnsChild}
                loading="lazy"
                alt=""
                src="/rectangle-4293.svg"
              />
            </div>
            <h2 className={styles.pitchToUs}>Pitch To Us</h2>
            <div className={styles.formDescriptionColumns1}>
              <img
                className={styles.formDescriptionColumnsItem}
                loading="lazy"
                alt=""
                src="/rectangle-4295.svg"
              />
            </div>
          </div>
        </div>
        <h2 className={styles.naandiProspectiveCompany}>
          Naandi Prospective Company Investment Form​
        </h2>
      </div>
    </div>
  );
};

FormAndDescription.propTypes = {
  className: PropTypes.string,
};

export default FormAndDescription;
