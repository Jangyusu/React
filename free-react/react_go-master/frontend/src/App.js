import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Container, Col, Row } from 'react-bootstrap';

import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';

import Login from './features/Login';
import DashBoard from './features/DashBoard';
import ImageGrid from './features/ImageGrid';

export const App = () => {
    const [isLoggined, setIsLoggined] = useState(false);

    if (isLoggined) {
        return (
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <Row>
                            <Col>
                                <Header />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Route exact path="/" component={DashBoard} />
                                <Route
                                    path="/DashBoard"
                                    component={DashBoard}
                                />
                                <Route
                                    path="/ImageGrid"
                                    component={ImageGrid}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return (
            <div>
                <Login
                    loginState={isLoggined}
                    changeLoginState={setIsLoggined}
                />
            </div>
        );
    }
};

export default App;
