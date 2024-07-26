import PropTypes from "prop-types";
import styles from "./form-fields-rows2.module.css";

const FormFieldsRows2 = ({ className = "", entityType }) => {
  return (
    <div className={[styles.formFieldsRows, className].join(" ")}>
      <div className={styles.entityTypeWrapper}>
        <div className={styles.entityType}>{entityType}</div>
      </div>
      <input className={styles.formFieldsRowsChild} type="text" />
    </div>
  );
};

FormFieldsRows2.propTypes = {
  className: PropTypes.string,
  entityType: PropTypes.string,
};

export default FormFieldsRows2;
