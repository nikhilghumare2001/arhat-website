import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Solutions from "../components/Solutions";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import Products from "../components/Products";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Certified from "../components/Certified";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Solutions />
      <About/>
      <WhyChoose />
      <Products />
      <Partners />
      <Services />
      <Certified/>
      <Contact />
      <Footer/>
    </>
  );
}

export default Home;