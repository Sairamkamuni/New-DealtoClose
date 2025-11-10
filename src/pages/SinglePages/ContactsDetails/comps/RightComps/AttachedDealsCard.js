import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import AddTaskModal from "./AddTaskModal";
import { FaPlusButton } from "pages/utils/allButton";

const AttachedDealsCard = () => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <Card className="shadow-sm mb-4" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                <CardBody>
                    <h4 className="mb-3 fw-bold">Attached Deals</h4> <p className="mb-3">No deals attached yet.</p>
                    <FaPlusButton label="Add Deal" width="100%" onClick={() => setModalOpen(true)} outline={false} />
                </CardBody>
            </Card>

            <AddTaskModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />
        </>
    );
};

export default AttachedDealsCard;
