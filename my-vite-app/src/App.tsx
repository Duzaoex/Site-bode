import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Section from './Components/Section/Section';
import Testimonials from './Components/Testimonials/Testimonials';
import Plans from './Components/Plans/Plans';
import TrainerBio from './Components/TrainerBio/TrainerBio';
import Advantages from './Components/Advantages/Advantages';
import Faq from './Components/Faq/Faq';
import Duvidas from './Components/Duvidas/Duvidas';
import VideoSection from './Components/Video/Video';

function App() {
  return (
    <div>
      <Header />
      <Section />
      <Duvidas />
      <Advantages />
      <VideoSection />
      <Testimonials />
      <TrainerBio />
      <Plans />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
