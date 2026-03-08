import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';
import ProfileForm from '../components/ProfileForm';
import EducationList from '../components/EducationList';
import ExperienceList from '../components/ExperienceList';
import ProjectList from '../components/ProjectList';
import SkillForm from '../components/SkillForm';
import CertificationList from '../components/CertificationList';
import InterestList from '../components/InterestList';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Portfolio Editor</h1>
      <Tabs>
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Education</Tab>
          <Tab>Experience</Tab>
          <Tab>Projects</Tab>
          <Tab>Skills</Tab>
          <Tab>Certifications</Tab>
          <Tab>Interests</Tab>
        </TabList>
        <TabPanels>
          <TabPanel><ProfileForm /></TabPanel>
          <TabPanel><EducationList /></TabPanel>
          <TabPanel><ExperienceList /></TabPanel>
          <TabPanel><ProjectList /></TabPanel>
          <TabPanel><SkillForm /></TabPanel>
          <TabPanel><CertificationList /></TabPanel>
          <TabPanel><InterestList /></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;