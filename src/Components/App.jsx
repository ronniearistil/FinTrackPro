// App.jsx
import React from 'react';
import { ProjectProvider } from './ProjectContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import ExpenseDashboard from './ExpenseDashboard';
import ProjectForm from './ProjectForm';
import ExpenseForm from './ExpenseForm';
import ProjectDetail from './ProjectDetail';
import ExpenseDetail from './ExpenseDetail';
import ErrorPage from './ErrorPage';

const App = () => (
  <ProjectProvider>
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/projects" />} />
        <Route path="/projects" element={<Dashboard />} />
        <Route path="/projects/new" element={<ProjectForm />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/expenses" element={<ExpenseDashboard />} />
        <Route path="/expenses/new" element={<ExpenseForm />} />
        <Route path="/expenses/:id" element={<ExpenseDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  </ProjectProvider>
);

export default App;


