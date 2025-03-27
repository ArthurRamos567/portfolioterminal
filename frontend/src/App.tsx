import TextInterface from "./components/TextInterface";
import Worldview from "./components/Worldview";
import "./index.css";
function App() {
    return (
        <div className="font-code bg-darkgrey text-lightgreen w-screen flex justify-between min-h-screen">
            <TextInterface/>
            <Worldview></Worldview>
        </div>
    );
}

export default App;
