import Nav from "./components/nav/nav";
import About from "./components/pages/about/about";
import Contact from "./components/pages/contact/contact";
import Hero from "./components/pages/hero/hero";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default App;
