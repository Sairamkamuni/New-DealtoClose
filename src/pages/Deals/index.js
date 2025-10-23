import React, { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Container, Row, Col, Card, CardBody } from "reactstrap";


const Deals = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Deals | {process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <h1> Deals Page</h1>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Deals;