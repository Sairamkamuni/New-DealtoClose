import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Container, Row, Col } from "reactstrap";

import PreDealsModal from "pages/Pre-Deals/Modal";
import PreDealsHeader from "./PreDealHeader";
import PreDealLeft from "./PreDealLeft";
import PreDealRight from "./PreDealRight/inedx";

const PreDealsDetails = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="page-content">
            <MetaTags>
                <title>Pre-Deals Details | {process.env.REACT_APP_TITLE}</title>
            </MetaTags>

            <Container fluid>
                <PreDealsHeader />

                <Row>
                    <Col md={3}>
                        <PreDealLeft />
                    </Col>
                    <Col md={9}>
                        <PreDealRight />
                    </Col>

                </Row>
            </Container>

            <PreDealsModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />

        </div>
    );
};

export default PreDealsDetails;
