import React, { useState, useEffect } from "react";
import { Modal, Row, Col, TabContent } from "reactstrap";
import { preDealTabs } from "constants/config";
import { showSuccessAlert } from "pages/utils/Alerts/alertMessages"

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
    const [formData, setFormData] = useState({});
    const [editMode, setEditMode] = useState(false);

    // Handle normal input change
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSelectChange = (selectedOption, field) => {
        const name = field.name;
        const value = selectedOption?.label || null;

        setFormData({ ...formData, [name]: value, });
    };

    const handleAsyncSelectChange = (fieldName, selectedOption) => {
        setFormData({
            ...formData,
            [fieldName]: selectedOption?.label || null,
        });
    };

    const handleDateChange = (selectedDates, name) => {
        const date = selectedDates?.[0];
        setFormData(prev => ({
            ...prev, [name]:
                date ? date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : ""
        }));
    };

    const handleContactChange = (contacts) => {
        setFormData(prev => ({ ...prev, contacts }));
    };

    // Submit function
    const handleSubmit = async () => {
        console.log('Submitting formData:', formData);
        // const url = editMode ? `${BANK_URL}/${editingId}` : BANK_URL;
        // const method = editMode ? put : post;
        // const { success, body } = await method(url, formData); 
        console.log("Edit mode:", editMode);
        console.log("API method call:", editMode ? "PUT" : "POST");
        const success = true;
        if (success) {
            showSuccessAlert(editMode ? 'Pre Deal updated successfully!' : 'Pre Deal created successfully!');
            setFormData({});
            setEditMode(false);
            toggle();
        }
    };

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
                <button type="button" onClick={toggle} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>


            <div id="modal-scroll-body" className="modal-body" style={{ maxHeight: "75vh", overflowY: "auto", overflowX: "hidden" }}>
                <Row>
                    <Col md={3}>
                        <Sidebar tabs={preDealTabs} activeTabVartical={activeTabVartical} setoggleTabVertical={setActiveTabVartical} />
                    </Col>

                    <Col md={9}>
                        <TabContent activeTab={activeTabVartical}>
                            <div id="section-1"><PreDealType formType={formType} setFormType={setFormType} handleSelectChange={handleSelectChange} handleAsyncSelectChange={handleAsyncSelectChange} formData={formData} /></div>
                            <div id="section-2"><PropertyDetail formType={formType} handleChange={handleChange} formData={formData} setFormData={setFormData} /></div>
                            <div id="section-3"><OfferDetail formType={formType} handleChange={handleChange} formData={formData} setFormData={setFormData} /></div>
                            <div id="section-4"><Contact onContactChange={handleContactChange} /></div>
                            <div id="section-5"><Dates formType={formType} handleDateChange={handleDateChange} formData={formData}
                                handleChange={handleChange} /></div>
                            <div id="section-6"><AdditionalTerms handleChange={handleChange} formData={formData}
                                handleAsyncSelectChange={handleAsyncSelectChange} /></div>
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
