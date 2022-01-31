import "./App.css";
import "./style/style.css";
import React, { useContext } from "react";

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
import ContasAdmin from "./components/ContasAdmin";

import { AuthProvider, AuthContext } from "./contexts/auth";

function App() {
  const Public = () => {
    return (
      <div>
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const Private = () => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      // Alterar design
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/loginadmin/" />;
    }

    return (
      <div>
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    );
  };

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<Public />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/sobre-nos/" element={<Sobre />} />
              <Route exact path="/blog/" element={<Blog />} />
              <Route exact path="/contato/" element={<Contato />} />
            </Route>

            {/* login precisa de uma rota privada e uma publica */}
            <Route exact path="/loginadmin/" element={<LoginAdmin />} />

            <Route element={<Private />}>
              <Route exact path="/contasadmin/" element={<ContasAdmin />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
