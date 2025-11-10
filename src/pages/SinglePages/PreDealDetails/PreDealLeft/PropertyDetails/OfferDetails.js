import React from "react";
import { Row, Col } from "reactstrap";
import AccordionSection from "./AccordionSection";
import { PurchasePrice, Deposit1st, Deposit1stDueIn, Deposit2nd, Deposit2ndDueIn, LoanToValue, BalanceToClose, LoanCommitmentPeriod, InspectionPeriod, CompensationToBuyersBroker } from "AllDummyData/PreDealDummyData";

const OfferDetails = ({ isOpen, toggle }) => {
    const data = { purchasePrice: PurchasePrice[0], deposit1st: Deposit1st[0], deposit1stDue: Deposit1stDueIn[0], deposit2nd: Deposit2nd[0], deposit2ndDue: Deposit2ndDueIn[0], loanToValue: LoanToValue[0], balanceToClose: BalanceToClose[0], loanCommitmentPeriod: LoanCommitmentPeriod[0], inspectionPeriod: InspectionPeriod[0], buyersBrokerComp: CompensationToBuyersBroker[0] };

    const infoItems = [
        { label: "Purchase Price", value: data.purchasePrice },
        { label: "1st Deposit", value: data.deposit1st },
        { label: "1st Deposit Due In", value: data.deposit1stDue },
        { label: "2nd Deposit", value: data.deposit2nd },
        { label: "2nd Deposit Due In", value: data.deposit2ndDue },
        { label: "Loan to Value", value: data.loanToValue },
        { label: "Balance to Close", value: data.balanceToClose },
        { label: "Loan Commitment Period", value: data.loanCommitmentPeriod },
        { label: "Inspection Period", value: data.inspectionPeriod },
        { label: "Compensation to Buyer’s Broker", value: data.buyersBrokerComp },
    ];

    return (
        <AccordionSection title="Offer Details" isOpen={isOpen} toggle={toggle}>
            <div className="px-1 py-1">
                <Row className="mb-1">
                    <Col>
                        <p className="mb-0 fw-semibold  ">{data.address}</p>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                        <p className="mb-0  ">{data.city}</p>
                    </Col>
                </Row>

                {infoItems.map((item, index) => (
                    <Row key={index} className="align-items-center mb-1">
                        <Col xs="auto">
                            <p className="fw-bold mb-0">{item.label}:</p>
                        </Col>
                        <Col className="ps-0 text-muted">{item.value}</Col>
                    </Row>
                ))}
            </div>
        </AccordionSection>
    );
};

export default OfferDetails;
