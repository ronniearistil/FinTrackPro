// ProjectForm.jsx
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ProjectContext } from './ProjectContext';
import FormTemplate from './FormTemplate';

const ProjectForm = () => {
  const { addProject } = useContext(ProjectContext);

  const formik = useFormik({
    initialValues: { name: '', profit: '', cost: '', status: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').min(3),
      profit: Yup.number().positive().required('Profit is required'),
      cost: Yup.number().positive().required('Cost is required'),
      status: Yup.string().required('Status is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addProject(values);
      resetForm();
    },
  });

  const fields = [
    { label: 'Project Name', name: 'name', type: 'text' },
    { label: 'Profit', name: 'profit', type: 'number' },
    { label: 'Cost', name: 'cost', type: 'number' },
    { label: 'Status', name: 'status', type: 'text' },
  ];

  return <FormTemplate formik={formik} fields={fields} submitLabel="Add Project" />;
};

export default ProjectForm;


