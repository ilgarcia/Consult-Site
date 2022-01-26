import "./App.css";
import "./style/style.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from './components/Home'
import Sobre from './components/Sobre'
import Blog from './components/Blog'
import Contato from './components/Contato'

// import loginReducer from "./reducers/loginReducer";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

// const store = createStore(loginReducer);

function App() {
    return (
        // <Provider store={store}>
            <Router>
                <div className="App">
                    <Navigation/>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/sobre-nos/" element={<Sobre />} />
                        <Route exact path="/blog/" element={<Blog />} />
                        <Route exact path="/contato/" element={<Contato />} />
                    </Routes>
                    <Footer/>
                </div>
            </Router>
        // </Provider>
    );
}

export default App;
