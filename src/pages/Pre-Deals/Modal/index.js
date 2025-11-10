import React, { useState, useEffect } from "react";
import { Modal, Row, Col, TabContent } from "reactstrap";
import { preDealTabs } from "constants/config";

import Sidebar from "./Sidebar";
import PreDealType from "./sections/PreDealType";
import PropertyDetail from "./sections/PropertyDetail";
import OfferDetail from "./sections/OfferDetail";
import Contact from "./sections/Contact";
import Dates from "./sections/Dates";
import AdditionalTerms from "./sections/AdditionalTerms";
import AllButton from "pages/utils/allButton";

const PreDealsModal = ({ isOpen, toggle, preDeal }) => {
    const [activeTabVartical, setActiveTabVartical] = useState(1);
    const [formType, setFormType] = useState("Buyer");

    const toggleTabVertical = (tab) => {
        if (tab >= 1 && tab <= 6) setActiveTabVartical(tab);
    };

    // Reset when modal opens
    useEffect(() => {
        if (isOpen) {
            setActiveTabVartical(1);
            setFormType(preDeal?.type || "Buyer");
        }
    }, [isOpen, preDeal]);

    // scroll observer for sidebar
    useEffect(() => {
        const modalBody = document.getElementById("modal-scroll-body");
        if (!modalBody) return;

        const sections = Array.from(document.querySelectorAll("[id^='section-']"));
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) {
                    const id = visible.target.id.replace("section-", "");
                    setActiveTabVartical(Number(id));
                }
            },
            { root: modalBody, threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} toggle={toggle} scrollable size="xl" centered>
            {/* Header */}
            <div className="modal-header d-block">
                <h4 className="modal-title fw-bold text-black"> {preDeal ? "Edit Pre-Deal" : "Create a New Pre-Deal"} </h4>
                <button type="button" onClick={toggle} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            {/* Body */}
            <div id="modal-scroll-body" className="modal-body" style={{ maxHeight: "75vh", overflowY: "auto", overflowX: "hidden" }}>
                <Row>
                    <Col md={3}>
                        <Sidebar tabs={preDealTabs} activeTabVartical={activeTabVartical} setoggleTabVertical={setActiveTabVartical} />
                    </Col>

                    <Col md={9}>
                        <TabContent activeTab={activeTabVartical}>
                            <div id="section-1"><PreDealType formType={formType} setFormType={setFormType} /></div>
                            <div id="section-2"><PropertyDetail formType={formType} /></div>
                            <div id="section-3"><OfferDetail formType={formType} /></div>
                            <div id="section-4"><Contact /></div>
                            <div id="section-5"><Dates /></div>
                            <div id="section-6"><AdditionalTerms /></div>
                        </TabContent>
                    </Col>
                </Row>

                {/* Footer */}
                <div className="mt-4 d-flex justify-content-end">
                    <AllButton label="Cancel" width="80px" color="danger" className="me-2" onClick={toggle} />
                    <AllButton label="Previous" width="80px" color="secondary" className="me-2" disabled={activeTabVartical === 1}
                        onClick={() => toggleTabVertical(activeTabVartical - 1)}
                    />
                    <AllButton label={activeTabVartical === 6 ? "Submit" : "Next"} width="80px" color={activeTabVartical === 6 ? "success" : "primary"}
                        onClick={() => activeTabVartical === 6 ? console.log("Submit form here!", preDeal) : toggleTabVertical(activeTabVartical + 1)}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default PreDealsModal;
