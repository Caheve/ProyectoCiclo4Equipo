import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import './Login.css'
export default class Login extends React.Component {
         constructor(props) {
            super(props);
            this.state = {
                usuario:'',
                pass:'',
            };
        }
iniciarSesion(){
    alert('aaaaa');
}
    render() {
        return (
            <Container id="login-container">
                <Row>
                    <Col >
                        <Row>
                            <h2>Iniciar Sesión</h2>
                        </Row>
                        <Col
                            sm="12"
                            xm="12"
                            md={{ span: 4, offset: 4 }}
                            Lg={{ span: 4, offset: 4 }}
                            xl={{ span: 4, offset: 4 }}>
                            <Form>
                                <Form.Group>
                                    <Form.Label id="form-label">Usuario</Form.Label>
                                    <Form.Control onChange = {(e)=> this.setState({ usuario: e.target.value})}></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label id="form-label">Contraseña</Form.Label>
                                    <Form.Control type="password" onChange = {(e)=> this.setState({ pass: e.target.value})}></Form.Control>
                                </Form.Group>
                                <Button variant="primary"
                                    type="submit"
                                    onClick={()=>{
                                        this.iniciarSesion();
                                    }}
                                    >
                                    Iniciar Sesión
                                </Button>
                            </Form>
                        </Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}


