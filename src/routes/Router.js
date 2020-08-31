import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ProjectsPage from '../pages/Projects/ProjectsPage';
import SingleProjectPage from '../pages/SingleProjectPage/SingleProjectPage';
import AboutMePage from '../pages/AboutMePage/AboutMePage';
import ContactPage from '../pages/ContactPage/ContactPage';
import ScrollTop from '../components/ScrollTop/ScrollTop';

const Router = () => {
  
  return (
    <BrowserRouter>
      <ScrollTop />
        <Switch>
          <Route exact path="/">
              <HomePage />
          </Route>
          <Route exact path="/about-me">
              <AboutMePage />
          </Route>
          <Route exact path="/contact">
              <ContactPage />
          </Route>
          <Route exact path="/projects">
              <ProjectsPage />
          </Route>
          <Route exact path="/projects/:id">
              <SingleProjectPage />
          </Route>
          <Route path="/">
            <p>Ai que loucura! Deu TUDO errado!</p>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default Router;