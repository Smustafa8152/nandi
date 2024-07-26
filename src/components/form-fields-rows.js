import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./form-fields-rows.module.css";

const FormFieldsRows = ({ className = "", industry, propHeight }) => {
  const formFieldsRowsStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={[styles.formFieldsRows, className].join(" ")}
      style={formFieldsRowsStyle}
    >
      <div className={styles.industryWrapper}>
        <div className={styles.industry}>{industry}</div>
      </div>
      <div className={styles.formFieldsRowsChild} />
    </div>
  );
};

FormFieldsRows.propTypes = {
  className: PropTypes.string,
  industry: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default FormFieldsRows;
