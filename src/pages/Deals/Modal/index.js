import React, { useState, useEffect } from "react";
import { Modal, TabContent, TabPane } from "reactstrap";
import AllButton from "pages/utils/allButton";
import CreateNewDeal from "./Tabs/AddFile";
import Index from "./Tabs/PropertyDetails";
import { FormHandlers } from "pages/InputFields/FormHandlers";

const DealsModal = ({ isOpen, toggle, deal }) => {
    const [activeTabVartical, setActiveTabVartical] = useState(1);

    const toggleTabVertical = (tab) => {
        const newTab = Number(tab);
        if (newTab >= 1 && newTab <= 2) {
            setActiveTabVartical(newTab);
        }
    };

    useEffect(() => {
        if (isOpen) {
            setActiveTabVartical(1);
        }
    }, [isOpen, deal]);

    const { formData, editMode, setEditMode, handleChange, handleSubmit, handleFilesData, handleRadioChange, handleSelectChange, handleDateChange, collapseToggle, collapseOpen } = FormHandlers({ apiUrl: "/api/deals", toggle, entity: "Deal" });

    return (
        <Modal isOpen={isOpen} toggle={toggle} scrollable centered style={{ maxWidth: "1300px" }}>
            {/* Header */}
            <div className="modal-header d-block">
                <h4 className="modal-title fw-bolder"> {deal ? "Edit Deal" : "Create a New Deal"} </h4>
                <button type="button" onClick={toggle} className="close" aria-label="Close"></button>
            </div>

            <div className="modal-body" style={{ maxHeight: "75vh", overflowY: "auto" }}>
                <TabContent activeTab={activeTabVartical}>
                    <TabPane tabId={2}>
                        <CreateNewDeal
                            formData={formData}
                            handleRadioChange={handleRadioChange}
                            handleFilesData={handleFilesData}
                            handleSelectChange={handleSelectChange}
                        />
                    </TabPane>

                    <TabPane tabId={1}>
                        <Index
                            collapseToggle={collapseToggle}
                            collapseOpen={collapseOpen}
                            editMode={editMode}
                            setEditMode={setEditMode}
                            formData={formData}
                            handleChange={handleChange}
                            handleDateChange={handleDateChange}
                            handleSelectChange={handleSelectChange}
                        />
                    </TabPane>

                </TabContent>

                <div className="mt-4 d-flex justify-content-end">
                    <AllButton label="Cancel" width="80px" color="danger" outline={false} className="me-2" onClick={toggle} />
                    <AllButton label="Previous" width="80px" color="secondary" outline={false} className="me-2" disabled={activeTabVartical === 1}
                        onClick={() => toggleTabVertical(activeTabVartical - 1)} />
                    <AllButton label={activeTabVartical === 2 ? "Submit" : "Next"} width="80px" outline={false} color={activeTabVartical === 2 ? "success" : "primary"}
                        onClick={() => activeTabVartical === 2 ? handleSubmit() : toggleTabVertical(activeTabVartical + 1)} />
                </div>

            </div>
        </Modal>
    );
};

export default DealsModal;
