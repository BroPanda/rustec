import './App.css';
import SpaceClose from "./Components/SpaceClose/SpaceClose"
import Navbar from "./Components/Navbar/Navbar";
import Corp_info from "./Components/Corp_info/Corp_info";
import CorpCult from "./Components/CorpCult/CorpCult"
import SeparateLine from "./Components/SeparateLine/SeparateLine";
import Banner2 from "./Components/Banner2/Banner2";
import CorpActivity from "./Components/CorpActivity/CorpActivity";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <SpaceClose/>
            <Corp_info/>
            <CorpCult/>
            <SeparateLine/>
            <Banner2/>
            <CorpActivity/>
            <SeparateLine/>
        </div>
    );
}

export default App;
