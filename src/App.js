import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { SideMenu } from "./Components/SideMenu/index";
import { Navigation } from "./Navigation/index";

function App() {
    return (
        <Router>
            <div className="App">
                <SideMenu />
                <Navigation />
            </div>
        </Router>
    );
}

export default App;
