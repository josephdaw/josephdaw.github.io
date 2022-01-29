// importing components
import TopNav from './components/TopNav';
import ProjectCards from './components/ProjectCards'

// importing project information
import { projects } from './projects';

function App() {
  return (
    <div>
      <TopNav></TopNav>
      <ProjectCards projects={projects}></ProjectCards>
    </div>
  );
};

export default App;
