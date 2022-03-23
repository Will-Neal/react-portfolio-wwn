// import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/intro';
import ProjectList from './components/projectList/projectList'
import Contact from './components/contact/contact'
// import Project from './components/projects/project';

function App() {
  return (
    <div>
      <Intro/>
      <ProjectList/>
      <Contact/>
    </div>
  );
}

export default App;
