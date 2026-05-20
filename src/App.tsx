import MainLayout from "./components/layout/MainLayout";
import Hero from "./sections/Hero";
import "./index.css";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";

function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </MainLayout>
    </>
  );
}

export default App;
