import { Route, Routes } from "react-router-dom";

import NavbarComponents from "./components/NavbarComponents";
import FooterComponents from "./components/FooterComponents";

import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import AwardPage from './Pages/AwardPage';

const App = () => {
  return (
    <div>
      <NavbarComponents/>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/Project" Component={ProjectPage}/>
          <Route path="/Awards" Component={AwardPage}/>
        </Routes>
        <FooterComponents/>
    </div>
  )
}

export default App
