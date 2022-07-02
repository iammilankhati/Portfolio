import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="main">
      <Landing />
      <Navbar />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
