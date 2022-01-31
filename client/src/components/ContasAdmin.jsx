import React, { useState, useEffect } from "react";
import {
  Container,
  ListGroup,
  Badge,
  Button,
  Row,
  Col,
  Form,
  Card,
  Alert,
} from "react-bootstrap";

import {
  getUsers,
  createUser,
  deleteUser,
  showUser,
  editUser,
} from "../services/api";

export default function ContasAdmin() {
  const [isSending, setIsSending] = useState(false);

  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const [id, setId] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("");

  const [key, setKey] = useState("");
  const [edit, setEdit] = useState(false);

  const [loginName, setLoginName] = useState("");
  const [levelName, setLevelName] = useState("");

  const [msg, setMsg] = useState("");

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("user")).id);
  }, [setId]);

  useEffect(() => {
    (async () => {
      const responseUsers = await getUsers();
      setUsers(responseUsers.data);
      setLoading(false);
      if (isSending) {
        setIsSending(false);
      }
    })();
  }, [isSending]);

  useEffect(() => {
    setLoggedUser(users.find((user) => user._id === id));
  }, [id, users]);

  if (loading) {
    return <div>Carregando</div>;
  }

  function showAdd() {
    if (
      !edit &&
      (loggedUser.level === "master" || loggedUser.level === "admin")
    ) {
      return (
        <div>
          <Form id="formContas" onSubmit={handleSubmit}>
            <Card className="m-3 p-3 box-shadow gray-session">
              <h1 className="mt-3 mb-4">Adicionar conta</h1>

              <Row className="d-flex justify-content-center align-items-center">
                <Col xs={2} className="font-strong">
                  <Form.Control
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </Col>
                <Col xs={2} className="font-strong">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
                <Col xs={2}>
                  {" "}
                  <Form.Select
                    aria-label="Default select "
                    placeholder="Enter Level"
                    defaultValue={"level"}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option value="level" disabled>
                      Level
                    </option>
                    <option value="admin">Admin</option>
                    <option value="consultor">Consultor</option>
                  </Form.Select>
                </Col>
                <Col xs="auto">
                  {" "}
                  <Button variant="primary" type="submit">
                    Adicionar
                  </Button>
                </Col>
              </Row>
            </Card>
          </Form>
        </div>
      );
    }
  }

  const showEdit = () => {
    if (edit) {
      return (
        <div>
          <Form id="formContas" onSubmit={handleEdit}>
            <Card className="m-3 p-3 box-shadow gray-session">
              <h1 className="mt-3 mb-4">Alterar usuário</h1>

              <Row className="d-flex justify-content-center align-items-center">
                <Col xs={2} className="font-strong">
                  <Form.Control
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </Col>
                <Col xs={2} className="font-strong">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>

                {loggedUser.level === "master" ||
                loggedUser.level === "admin" ? (
                  <Col xs={2}>
                    {" "}
                    <Form.Select
                      aria-label="Default select "
                      placeholder="Enter Level"
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                    >
                      <option value="master" disabled>
                        master
                      </option>
                      <option value="admin">Admin</option>
                      <option value="consultor">Consultor</option>
                    </Form.Select>
                  </Col>
                ) : (
                  ""
                )}
                <Col xs="auto">
                  {" "}
                  <Button variant="primary" type="submit">
                    Alterar
                  </Button>
                </Col>
              </Row>
              <Row className="justify-content-center" >
                <Col xs={4} >
                  <Button className="mt-3 mb-2" variant="secondary" onClick={handleButton}>
                    {loggedUser.level === "master" ||
                    loggedUser.level === "admin"
                      ? "Adicionar conta"
                      : "Fechar alteração"}
                  </Button>
                </Col>
              </Row>
            </Card>
          </Form>
        </div>
      );
    }
  };

  const showMsg = () => {
    if (msg) {
      return (
        <Row className="justify-content-center ">
          <Col xs={6}>
            <Alert variant={msg.variant}>{msg.msg}</Alert>
          </Col>
        </Row>
      );
    }
  };

  const showCurrentlyUser = () => {
    return (
      <>
        <h3 className="m-4">Perfil</h3>
        <Row className="m-4 d-flex justify-content-center">
          <Col xs={6}>
            <ListGroup>
              {
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="ms-2 me-auto text-start">
                    <div className="fw-bold">{loggedUser.login}</div>
                    {loggedUser.level}
                  </div>
                  <Button variant="m-1 light post-button ">
                    Post <Badge bg="secondary">9</Badge>
                    <span className="visually-hidden">unread messages</span>
                  </Button>

                  <Button
                    variant="m-1 light user-button"
                    onClick={handleSearch}
                    value={loggedUser._id}
                  >
                    <i className="bi-pencil" role="img" aria-label="pencil"></i>
                  </Button>

                  <Button
                    variant="m-1 light user-button"
                    onClick={handleDelete}
                    value={loggedUser._id}
                    disabled={true}
                  >
                    <i className="bi-trash" role="img" aria-label="trash" />
                  </Button>
                </ListGroup.Item>
              }
            </ListGroup>
          </Col>
        </Row>
      </>
    );
  };

  const showListUsers = () => {
    console.log(loggedUser);
    if (loggedUser.level === "master" || loggedUser.level === "admin")
      return (
        <>
          <h3>Lista de usuários</h3>
          <Row className="m-4 d-flex justify-content-center">
            <Col xs={6}>
              <ListGroup>
                {users
                  .filter((user) => user._id !== id)
                  .filter((user) => user.level !== "master")
                  .map((user) => (
                    <ListGroup.Item
                      key={user._id}
                      as="li"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="ms-2 me-auto text-start">
                        <div className="fw-bold">{user.login}</div>
                        {user.level}
                      </div>
                      <Button variant="m-1 light post-button ">
                        Post <Badge bg="secondary">9</Badge>
                        <span className="visually-hidden">unread messages</span>
                      </Button>

                      <Button
                        variant="m-1 light user-button"
                        onClick={handleSearch}
                        value={user._id}
                        disabled={
                          user.level === "master" && level === "admin"
                            ? true
                            : false
                        }
                      >
                        <i
                          className="bi-pencil"
                          role="img"
                          aria-label="pencil"
                        ></i>
                      </Button>

                      <Button
                        variant="m-1 light user-button"
                        onClick={handleDelete}
                        value={user._id}
                        disabled={user.level === "master" ? true : false}
                      >
                        <i className="bi-trash" role="img" aria-label="trash" />
                      </Button>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
          </Row>
        </>
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!login || !password || !level) {
      setMsg({ variant: "danger", msg: "Preencher todos os campos" });
    } else {
      await createUser(login, password, level);

      setLogin("");
      setPassword("");
      setLevel("");

      setMsg({ variant: "success", msg: "Dados enviados com sucesso" });
    }
    setIsSending(true);
  };

  const handleSearch = async (e) => {
    let key = e.currentTarget.value;
    setKey(key);

    const response = await showUser(key);

    setLogin(response.data.login);
    setLevel(response.data.level);

    setLoginName(response.data.login);
    setLevelName(response.data.level);

    setMsg("");
    setEdit(true);
    setIsSending(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    if (login === loginName && !password && level === levelName) {
      setMsg({ variant: "danger", msg: "Nenhum campo foi alterado" });
    } else {
      setLogin(login);
      if (password) {
        setPassword(password);
      }
      setLevel(level);

      await editUser(key, login, password, level);
      setMsg({ variant: "success", msg: "Dados alterados com sucesso" });

      setLoginName(login);
      setLevelName(level);
      setPassword("");

      setIsSending(true);
    }
  };

  const handleDelete = async (e) => {
    await deleteUser(e.currentTarget.value);
    setMsg({ variant: "success", msg: "User deletado com sucesso" });
    setIsSending(true);
  };

  const handleButton = async (e) => {
    setEdit(false);
    setMsg("");
    setIsSending(true);
  };

  return (
    <section className="ContasAdmin">
      <Container>
        {showEdit()}
        {showAdd()}
        {showMsg()}
        {showCurrentlyUser()}
        {showListUsers()}
      </Container>
    </section>
  );
}
