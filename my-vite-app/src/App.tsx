import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Section from './Components/Section/Section';
import Testimonials from './Components/Testimonials/Testimonials';
import Plans from './Components/Plans/Plans';
import TrainerBio from './Components/TrainerBio/TrainerBio';
import Advantages from './Components/Advantages/Advantages';
import Faq from './Components/Faq/Faq';

function App() {
  return (
    <div>
      <Header />
      <Section />
      <TrainerBio />
      <Testimonials />
      <Advantages />
      <Plans />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
