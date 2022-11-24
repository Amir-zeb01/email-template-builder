import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
    return (
        <Container fluid className="pt-4 pb-4">
            <Row>
                <Col xs={12}>
                    <div id="gjs" className="d-none" />
                    <h4 className="display-6">
                        <span className="text-muted">Welcome,</span> Admin
                    </h4>
                </Col>
            </Row>
        </Container>
    )
}