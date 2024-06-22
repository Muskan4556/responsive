import Workflow from "./components/Workflow";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-6xl mx-auto pt-20 px-6">
        <HeroSection />
        <Features/>
       <Workflow/>
       <Price/>
       <Testimonials/>
       <Footer/>
      </div>
    </>
  );
};

export default App;
