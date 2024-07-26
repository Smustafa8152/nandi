import PropTypes from "prop-types";
import styles from "./form-fields-rows1.module.css";

const FormFieldsRows1 = ({ className = "" }) => {
  return (
    <div className={[styles.formFieldsRows, className].join(" ")}>
      <div className={styles.briefDescriptionAboutTheCoWrapper}>
        <div className={styles.briefDescriptionAbout}>
          Brief description about the company
        </div>
      </div>
      <textarea className={styles.formFieldsRowsChild} rows={10} cols={41} />
    </div>
  );
};

FormFieldsRows1.propTypes = {
  className: PropTypes.string,
};

export default FormFieldsRows1;
