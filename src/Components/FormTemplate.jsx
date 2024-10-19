// FormTemplate.jsx
import React from 'react';

const FormTemplate = ({ formik, fields, submitLabel }) => (
  <form onSubmit={formik.handleSubmit}>
    {fields.map(({ label, name, type }, index) => (
      <div key={index}>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors[name] && formik.touched[name] && (
          <div className="error">{formik.errors[name]}</div>
        )}
      </div>
    ))}
    <button type="submit">{submitLabel}</button>
  </form>
);

export default FormTemplate;
