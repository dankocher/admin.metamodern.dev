import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { SideMenu } from "./Components/SideMenu/index";
import { Navigation } from "./Navigation/index";
import { Container } from "./Components/Container";

function App() {
    return (
        <Router>
            <div className="App">
                <SideMenu />
                <Container>
                    <Navigation />
                </Container>
            </div>
        </Router>
    );
}

export default App;
