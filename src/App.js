import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { SideMenu } from "./Components/SideMenu/index";
import { Navigation } from "./Navigation/index";
import { Container } from "./Components/Container";

import { Modal } from "./Components/Modal";

function App() {
    return (
        <Router>
            <div className="App">
                <SideMenu />
                <Container>
                    <Navigation />
                </Container>
                {/* <Modal message="Удалить запись <Название>? Это действие нельзя будет отменить." /> */}
            </div>
        </Router>
    );
}

export default App;
