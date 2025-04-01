import TextInterface from "./components/TextInterface";
import Worldview from "./components/Worldview";
import "./index.css";
function App() {
    return (
        <div className="font-code bg-darkgrey text-lightgreen w-screen flex flex-col items-center min-h-screen">
            <TextInterface/>
            <Worldview animationName="world"></Worldview>
        </div>
    );
}

export default App;
