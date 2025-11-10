import React, { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import Searchbar from "../utils/search_bar";
import AllButton, { AddPlusCircleButton } from "pages/utils/allButton";
import MenuTabs from "pages/utils/menuTabs";
import { preDealTabs } from "pages/Options/PreDealOptions";
import DealsTableTabs from "./Table/DealsTableTabs";
import PreDealsModal from "./Modal";
import { All, Buyer, Seller } from "AllDummyData/PreDealDummyData";


const PreDeals = () => {
    const [modalScroll, setModalScroll] = useState(false);
    const [activeFilterTab, setActiveFilterTab] = useState(0);
    const [selectedPreDeal, setSelectedPreDeal] = useState(null);

    const handleEdit = (preDeal) => {
        setSelectedPreDeal(preDeal);
        setModalScroll(true);
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Pre-Deals | {process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    {/* Search + Buttons */}
                    <Row className="align-items-center mb-4">
                        <Col md={8}>
                            <Searchbar style={{ width: "1089px" }} />
                        </Col>
                        <Col md={4}>
                            <div className="d-flex justify-content-end gap-2">
                                <AllButton label="Activity Log" outline={false} width="200px" height="36px" onClick={() => setModalScroll(true)} />
                                <AddPlusCircleButton label="Add Pre-Deal" outline={false} width="200px" height="36px" onClick={() => setModalScroll(true)} />
                            </div>
                        </Col>
                    </Row>

                    <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }} >
                        <CardBody>
                            {/* Tabs with table */}
                            <Row >
                                <Col className="d-flex justify-content-start">
                                    <MenuTabs menus={preDealTabs} activeTab={preDealTabs[activeFilterTab].id} setActiveTab={setActiveFilterTab} />
                                </Col>
                            </Row>

                            {/* Table */}
                            <Row>
                                <Col>
                                    <DealsTableTabs activeTab={preDealTabs[activeFilterTab].id} allRows={All} buyerRows={Buyer} sellerRows={Seller} callback={{ edit: handleEdit }} />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>

                {/* Modal */}
                <PreDealsModal isOpen={modalScroll} toggle={() => setModalScroll(!modalScroll)} preDeal={selectedPreDeal} />
            </div>
        </React.Fragment>
    );
}

export default PreDeals;