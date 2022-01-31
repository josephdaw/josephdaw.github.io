// importing components
import TopNav from './components/TopNav';
import ProjectCards from './components/ProjectCards'
import About from './components/About'

// importing project information
import { projects } from './projects';

function App() {
  return (
    <div id="home">
      <TopNav></TopNav>
      <About></About>
      <ProjectCards projects={projects}></ProjectCards>
    </div>
  );
};

export default App;
