import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";
import { EmailButton, DownloadButton, PrintButton, CopyButton, MovetButton, CertificateButton, CancelButton, ArchiveButton, ScissorsButton } from "pages/utils/allButton";

const ActionButtons = () => {

    return (
        <Row style={{ margin: "5px", border: "1px solid #dad1e0", borderRadius: "10px", backgroundColor: "#ffffff", }} >
            <Col>
                <div className="p-2 d-flex justify-content-between align-items-center gap-2" style={{ whiteSpace: "nowrap" }} >
                    <EmailButton label="Send Sign Request" width="180px" />
                    <DownloadButton label="Download" width="160px" />
                    <PrintButton label="Print" width="160px" onClick={() => window.print()} />
                    <CopyButton label="Copy" width="160px" />
                    <MovetButton label="Move" width="160px" />
                    <CertificateButton label="Create Auth Cert" width="180px" />
                    <CancelButton label="Cancel Sign Request" width="190px" />
                    <ArchiveButton label="Archive" width="150px" />
                </div>
            </Col>
        </Row>
    )
};

export default ActionButtons;