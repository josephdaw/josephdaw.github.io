// importing components
import TopNav from './components/TopNav';
import ProjectCards from './components/ProjectCards'
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';

// importing project information
import { projects } from './projects';

function App() {
  return (
    <div id="home">
      <TopNav></TopNav>
      <About></About>
      <ProjectCards projects={projects}></ProjectCards>
      <Contact></Contact>
      <Footer />
    </div>
  );
};

export default App;
