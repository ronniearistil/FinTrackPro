import React, { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);

    fetch('http://localhost:5000/expenses')
      .then((res) => res.json())
      .then(setExpenses)
      .catch(console.error);
  }, []);

  const addProject = (newProject) => setProjects([...projects, newProject]);
  const addExpense = (newExpense) => setExpenses([...expenses, newExpense]);

  return (
    <ProjectContext.Provider value={{ projects, expenses, addProject, addExpense }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;


