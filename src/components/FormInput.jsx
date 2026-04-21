import React from "react";

const FormInput = ({ 
  label, 
  name, 
  type = "text", 
  required, 
  onChange, 
  value = "", 
  styles 
}) => {
  return (
    <div style={styles.formGroup}>
      <label style={styles.label}>
        {label}
        {required && <span style={styles.requiredStar}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete="off"
        style={styles.input}
        onFocus={(e) => {
          e.target.style.borderColor = "#e0b354";
          e.target.style.boxShadow = "0 0 0 3px rgba(224, 179, 84, 0.1)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#ddd";
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
};

export default FormInput;