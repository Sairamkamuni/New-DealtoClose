import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Row, Col, Container } from "reactstrap";

const ContactDetails = () => {

    return (
        <div className="page-content">
            <MetaTags>
                <title>Contact Details | {process.env.REACT_APP_TITLE}</title>
            </MetaTags>
            <Container fluid>

            </Container>

        </div>
    );
};

export default ContactDetails;
