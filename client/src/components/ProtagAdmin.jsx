import React, {useContext} from "react";
import { Container } from "react-bootstrap";

import { AuthContext } from "../contexts/auth";

// , Row, Col, Form, Button

export default function LoginAdmin(props) {
    const {logoutUser} = useContext(AuthContext)

    const handleLogout = () =>{
        logoutUser();
    }


    return (
        <div className="LoginAdmin">
            <div>
                <Container>
                    Protag Admin
                    <button onClick={handleLogout}>Logout</button>
                </Container>
            </div>
        </div>
    );
}
