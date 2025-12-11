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

import { FormHandlers } from "pages/InputFields/FormHandlers";

const PreDealsModal = ({ isOpen, toggle, preDeal }) => {
    const [activeTabVartical, setActiveTabVartical] = useState(1);
    const [formType, setFormType] = useState("Buyer");

    const { formData, setFormData, handleChange, handleSubmit, handleSelectChange, handleDateChange, handleContactChange } =
        FormHandlers({ apiUrl: "/api/deals", toggle: toggle, entity: "Pre Deal", });

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
        <Modal isOpen={isOpen} toggle={toggle} scrollable size="xl" centered className="custom-modal">

            <div className="modal-header d-block">
                <h4 className="modal-title fw-bolder"> {preDeal ? "Edit Pre-Deal" : "Create a New Pre-Deal"} </h4>
                <button type="button" onClick={toggle} className="close" aria-label="Close"> </button>
            </div>


            <div id="modal-scroll-body" className="modal-body" style={{ maxHeight: "75vh", overflowY: "auto", overflowX: "hidden" }}>
                <Row>
                    <Col md={3}>
                        <Sidebar tabs={preDealTabs} activeTabVartical={activeTabVartical} setoggleTabVertical={setActiveTabVartical} />
                    </Col>

                    <Col md={9}>
                        <TabContent activeTab={activeTabVartical}>
                            <div id="section-1">
                                <PreDealType
                                    formType={formType}
                                    setFormType={setFormType}
                                    handleSelectChange={handleSelectChange}
                                    handleAsyncSelectChange={handleSelectChange}
                                    formData={formData}
                                />
                            </div>
                            <div id="section-2">
                                <PropertyDetail
                                    formType={formType}
                                    handleChange={handleChange}
                                    formData={formData}
                                    setFormData={setFormData}
                                    handleSelectChange={handleSelectChange}
                                />
                            </div>
                            <div id="section-3">
                                <OfferDetail
                                    formType={formType}
                                    handleChange={handleChange}
                                    formData={formData}
                                    setFormData={setFormData}
                                    handleSelectChange={handleSelectChange}
                                />
                            </div>
                            <div id="section-4">
                                <Contact
                                    onContactChange={handleContactChange}
                                    handleAsyncSelectChange={handleSelectChange}
                                    formData={formData}
                                    handleSelectChange={handleSelectChange}
                                />
                            </div>
                            <div id="section-5">
                                <Dates
                                    formType={formType}
                                    handleDateChange={handleDateChange}
                                    formData={formData}
                                    handleChange={handleChange}
                                    handleSelectChange={handleSelectChange}
                                />
                            </div>
                            <div id="section-6">
                                <AdditionalTerms
                                    handleChange={handleChange}
                                    formData={formData}
                                    handleAsyncSelectChange={handleSelectChange}
                                />
                            </div>
                        </TabContent>
                    </Col>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-end mt-3">
                        <AllButton label="Cancel" width="80px" color="danger" className="me-2" onClick={toggle} />
                        <AllButton label="Previous" width="80px" color="secondary" className="me-2" disabled={activeTabVartical === 1}
                            onClick={() => toggleTabVertical(activeTabVartical - 1)}
                        />
                        <AllButton label={activeTabVartical === 6 ? "Submit" : "Next"} width="80px" color={activeTabVartical === 6 ? "success" : "primary"}
                            onClick={() => activeTabVartical === 6 ? handleSubmit() : toggleTabVertical(activeTabVartical + 1)}
                        />
                    </Col>
                </Row>
            </div>
        </Modal>
    );
};

export default PreDealsModal;
