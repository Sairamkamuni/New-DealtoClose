import React, { useState, useEffect } from "react";
import { Modal, Row, Col, TabContent } from "reactstrap";
import { DealTabs } from "AllDummyData/DealsDummyData";
import AllButton from "pages/utils/allButton";
import CreateNewDeal from "./Tabs/AddFile";
import PropertyDetails from "./Tabs/PropertyDetails";
import { FormHandlers } from "pages/InputFields/FormHandlers";

const DealsModal = ({ isOpen, toggle, deal, }) => {
    const [activeTabVartical, setActiveTabVartical] = useState(1);
    const [formType, setFormType] = useState("Buyer");

    const toggleTabVertical = (tab) => {
        if (tab >= 1 && tab <= 5) setActiveTabVartical(tab);
    };

    useEffect(() => {
        if (isOpen) {
            setActiveTabVartical(1);
            setFormType(deal?.type || "Seller");
        }
    }, [isOpen, deal]);

    const { formData, editMode, setEditMode, handleChange, handleSubmit, handleFilesData, handleRadioChange, handleSelectChange, handleDateChange, handleContactChange, collapseToggle, collapseOpen } =
        FormHandlers({ apiUrl: "/api/deals", toggle: toggle, entity: "Deal", });

    return (
        <Modal isOpen={isOpen} toggle={toggle} scrollable size="xl" centered>
            {/* Header */}
            <div className="modal-header d-block">
                <h4 className="modal-title fw-bolder"> {deal ? "Edit Deal" : "Create a New Deal"} </h4>
                <button type="button" onClick={toggle} className="close" aria-label="Close"> </button>
            </div>
            {/* Body */}
            <div id="modal-scroll-body" className="modal-body" style={{ maxHeight: "75vh", overflowY: "auto", overflowX: "hidden" }}>
                {/* <CreateNewDeal
                    formData={formData}
                    handleRadioChange={handleRadioChange}
                    handleFilesData={handleFilesData}
                    handleSelectChange={handleSelectChange}
                /> */}
                <PropertyDetails
                    collapseToggle={collapseToggle}
                    collapseOpen={collapseOpen}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    formData={formData}
                    handleChange={handleChange}
                />

                {/* Footer */}
                <div className="mt-4 d-flex justify-content-end">
                    <AllButton label="Cancel" width="80px" color="danger" className="me-2" onClick={toggle} />
                    {/* <AllButton label="Previous" width="80px" color="secondary" className="me-2" disabled={activeTabVartical === 1}
                        onClick={() => toggleTabVertical(activeTabVartical - 1)}
                    /> */}
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
