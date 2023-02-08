import Header from "./components/Header/Header";
import Insta from "./components/Insta/Insta";
import AboutMe from "./components/OboutMe/AboutMe";
import OurFeedback from "./components/OurFeedback/OurFeedback";
import Services from "./components/Services/Services";
import SwiperBlock from "./components/Swiper/Swiper";

function App() {
    return (
        <div className="App">
            <Header />
            <AboutMe />
            <Services />
            <SwiperBlock />
            <Insta />
            <OurFeedback />
        </div>
    );
}

export default App;
