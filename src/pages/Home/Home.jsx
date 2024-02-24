import Layout from "../../components/layouts/Layout";
import HeroSection from './HeroSection'
import "../../styles/HomeStyles.css"
import Section2 from "../Home/Section2";
import Section3 from "../Home/Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Home = () => {
  return (
   <>
    <Layout>
  <HeroSection/>
  <Section2/>
  <Section3/>
  <Section4/>
  <Section5/>
    </Layout>
   
   </>
  );
};

export default Home;
