import React, { useState } from "react";
import { Card, CardBody, Row } from "reactstrap";
import PhoneNumber from "./Phone";
import EmailAddress from "./Email";
const ContactInfo = () => {


    return (
        <Card className="shadow-sm" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
            <CardBody>
                <h5 className="text-center mb-4 fw-bolder">Contact Information</h5>

                <p><i className="fas fa-user-alt me-2" /> Alice Smith</p>
                <p><i className="fas fa-shopping-bag me-2" /> Innovate Corp</p>

                <PhoneNumber />
                <EmailAddress />
            </CardBody>
        </Card>
    );
};

export default ContactInfo;
