import React, { useState, useEffect } from "react";
import { Modal, Row, Col, TabContent } from "reactstrap";
import { DealTabs } from "AllDummyData/DealsDummyData";
import { showSuccessAlert } from "pages/utils/Alerts/alertMessages";

import Sidebar from "./sections/Sidebar";
import DealType from "./sections/DealType";
import FinancialInformation from "./sections/FinancialInformation";
import ImportantDates from "./sections/ImportantDates";
import Contact from "./sections/Contact";
import Template from "./sections/Template";
import AllButton from "pages/utils/allButton";

const DealsModal = ({ isOpen, toggle, deal }) => {
    const [activeTabVartical, setActiveTabVartical] = useState(1);
    const [formType, setFormType] = useState("Buyer");
    const [formData, setFormData] = useState({});
    const [editMode, setEditMode] = useState(false);
    const toggleTabVertical = (tab) => {
        if (tab >= 1 && tab <= 5) setActiveTabVartical(tab);
    };

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
            showSuccessAlert(editMode ? 'Deal updated successfully!' : 'Deal created successfully!');
            setFormData({});
            setEditMode(false);
            toggle();
        }
    };

    // reset on open
    useEffect(() => {
        if (isOpen) {
            setActiveTabVartical(1);
            setFormType(deal?.type || "Buyer");
        }
    }, [isOpen, deal]);

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
                <h4 className="modal-title fw-bolder">
                    {deal ? "Edit Deal" : "Create a New Deal"}
                </h4>
                <button type="button" onClick={toggle} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            {/* Body */}
            <div id="modal-scroll-body" className="modal-body" style={{ maxHeight: "75vh", overflowY: "auto", overflowX: "hidden" }}>
                <Row>
                    {/* Sidebar */}
                    <Col md={3}>
                        <Sidebar tabs={DealTabs} activeTabVartical={activeTabVartical} setoggleTabVertical={setActiveTabVartical} />
                    </Col>

                    {/* Sections */}
                    <Col md={9}>
                        <TabContent activeTab={activeTabVartical}>
                            <div id="section-1"><DealType formType={formType} setFormType={setFormType} handleChange={handleChange}
                                handleSelectChange={handleSelectChange} handleAsyncSelectChange={handleAsyncSelectChange} formData={formData} /></div>
                            <div id="section-2"><FinancialInformation formType={formType} handleSelectChange={handleSelectChange}
                                handleChange={handleChange} formData={formData} /></div>
                            <div id="section-3"><ImportantDates formType={formType} handleDateChange={handleDateChange} formData={formData}
                                handleChange={handleChange} /></div>
                            <div id="section-4"><Contact onContactChange={handleContactChange} /></div>
                            <div id="section-5"><Template formData={formData} handleChange={handleChange} /></div>
                        </TabContent>
                    </Col>
                </Row>

                {/* Footer */}
                <div className="mt-4 d-flex justify-content-end">
                    <AllButton label="Cancel" width="80px" color="danger" className="me-2" onClick={toggle} />
                    <AllButton label="Previous" width="80px" color="secondary" className="me-2" disabled={activeTabVartical === 1}
                        onClick={() => toggleTabVertical(activeTabVartical - 1)}
                    />
                    <AllButton label={activeTabVartical === 5 ? "Submit" : "Next"} width="80px"
                        color={activeTabVartical === 5 ? "success" : "primary"}
                        onClick={() => activeTabVartical === 5 ? handleSubmit() : toggleTabVertical(activeTabVartical + 1)}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default DealsModal;
