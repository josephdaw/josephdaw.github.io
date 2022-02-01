// importing components
import Header from './components/Header';
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';

// importing project information
import { projects } from './projects';

function App() {
  return (
    <div id="home">
      <Header />
      <About />
      <Project projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
