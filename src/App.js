// importing components
import TopNav from './components/TopNav';
import ProjectCards from './components/ProjectCards'
import About from './components/About'
import Contact from './components/Contact';

// importing project information
import { projects } from './projects';

function App() {
  return (
    <div id="home">
      <TopNav></TopNav>
      <About></About>
      <ProjectCards projects={projects}></ProjectCards>
      <Contact></Contact>
    </div>
  );
};

export default App;
