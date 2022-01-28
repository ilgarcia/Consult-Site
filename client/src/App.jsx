import "./App.css";
import "./style/style.css";
import React, {useContext} from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Blog from "./components/Blog";
import Contato from "./components/Contato";
import LoginAdmin from "./components/LoginAdmin";
import ProtagAdmin from "./components/ProtagAdmin";

import { AuthProvider, AuthContext } from "./contexts/auth";
import { useCol } from "react-bootstrap/esm/Col";



// import loginReducer from "./reducers/loginReducer";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

// const store = createStore(loginReducer);

function App() {

    const Private = ({children}) =>{
        const {authenticated, loading} = useContext(AuthContext)

        if (loading){
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated) {
            return <Navigate to="/loginadmin/" />
        }
        return children
    }

    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route exact path="/" element={<Home />} />
                            <Route
                                exact
                                path="/sobre-nos/"
                                element={<Sobre />}
                            />
                            <Route exact path="/blog/" element={<Blog />} />
                            <Route
                                exact
                                path="/contato/"
                                element={<Contato />}
                            />
                        </Route>
                        <Route
                            exact
                            path="/loginadmin/"
                            element={<LoginAdmin />}
                        />
                        <Route
                            exact
                            path="/protagadmin/"
                            element={<Private><ProtagAdmin /></Private>}
                        />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
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
