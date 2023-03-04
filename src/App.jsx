import Client from "./components/Client/Client";
import Header from "./components/Header/Header";
import Insta from "./components/Insta/Insta";
import AboutMe from "./components/OboutMe/AboutMe";
import Services from "./components/Services/Services";

function App() {
    return (
        <div className="App">
            <Header />
            <AboutMe />
            <Services />
            <Insta />
            <Client />
        </div>
    );
}

export default App;
