import "./App.css";
import "./style/style.css";
import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Blog from "./components/Blog";
import Contato from "./components/Contato";
import LoginAdmin from "./components/LoginAdmin";
import ProtagAdmin from "./components/ProtagAdmin";

// import loginReducer from "./reducers/loginReducer";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

// const store = createStore(loginReducer);

function App() {
    return (
        // <Provider store={store}>
        <Router>
            <div className="App">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre-nos/" element={<Sobre />} />
                        <Route path="/blog/" element={<Blog />} />
                        <Route path="/contato/" element={<Contato />} />
                    </Route>
                    <Route exact path="/loginadmin/" element={<LoginAdmin />} />
                    <Route
                        exact
                        path="/protagadmin/"
                        element={<ProtagAdmin />}
                    />
                </Routes>
            </div>
        </Router>
        // </Provider>
    );
}

function Layout() {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
