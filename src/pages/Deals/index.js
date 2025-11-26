import React, { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import MenuTabs from "pages/utils/menuTabs";
import Searchbar from "pages/utils/search_bar";
import { FilterDropdown } from "pages/utils/filterDropdown";
import { FaPlusButton } from "pages/utils/allButton";
import DealCountCardBar from "./CountCartBar";
import DealsTable from "./Table/DealsTable";
import DealsModal from "./Modal";

import { All, Buyer, Seller } from "AllDummyData/PreDealDummyData";
import { dealStatusFilters, FilterOptions } from "AllDummyData/DealsDummyData";

const Deals = () => {
    const [activeFilterTab, setActiveFilterTab] = useState(0);
    const [selectedOption, setSelectedOption] = useState("every_one");
    const [modalScroll, setModalScroll] = useState(false)
    const [selectedDeal, setSelectedDeal] = useState(null);

    const togScroll = () => setModalScroll(!modalScroll);

    const handleEdit = (deal) => {
        setSelectedDeal(deal);
        setModalScroll(true);
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Deals | {process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <Row className="d-flex flex-wrap align-items-center justify-content-between">
                        <Col md="4">
                            <MenuTabs menus={dealStatusFilters} activeTab={dealStatusFilters[activeFilterTab].id} setActiveTab={setActiveFilterTab} />
                        </Col>
                        <Col md="8">
                            <div className="d-flex align-items-center justify-content-end gap-2 mt-1">
                                <Searchbar style={{ width: "500px" }} />
                                <FilterDropdown dropdownFilterOptions={FilterOptions} selectedOption={selectedOption}
                                    setSelectedOption={setSelectedOption} width="140px" height="36px" />
                                <FaPlusButton width="140px" label="Add Deal" outline={false} color="primary" onClick={togScroll} height="36px" />
                            </div>
                        </Col>
                    </Row>

                    <DealCountCardBar />

                    <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                        <CardBody>
                            <DealsTable activeTab={dealStatusFilters[activeFilterTab].id}
                                allRows={All} buyerRows={Buyer} sellerRows={Seller} callback={{ edit: handleEdit }} />
                        </CardBody>
                    </Card>

                    <DealsModal isOpen={modalScroll} toggle={() => setModalScroll(!modalScroll)} deal={selectedDeal} />
                </Container>
            </div>
        </React.Fragment >
    );
}

export default Deals;