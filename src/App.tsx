import MainLayout from "./components/layout/MainLayout";
import Hero from "./sections/Hero";
import "./index.css";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <About />
        <Projects />
      </MainLayout>
    </>
  );
}

export default App;
