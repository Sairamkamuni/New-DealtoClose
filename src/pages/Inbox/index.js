import React, { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Container, Row, Col, Card } from "reactstrap";

//Import Email Topbar 
import EmailSideBar from "./email-sidebar";
import MailsList from './email-list'

const Inbox = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Inbox | {process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <Row>
                        <Col xs="12">
                            <EmailSideBar />

                            <div className="email-rightbar mb-3">
                                <Card>
                                    <MailsList />
                                </Card>

                                <Row>
                                    <Col xs="7">Showing 1 - 20 of 1,524</Col>
                                    <Col xs="5">
                                        <div className="btn-group float-end">
                                            <button className="btn btn-success me-3" role="button" size="sm"> <i className="fa fa-chevron-left" /> </button>
                                            <button className="btn btn-success" role="button" size="sm"> <i className="fa fa-chevron-right" /> </button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Inbox;