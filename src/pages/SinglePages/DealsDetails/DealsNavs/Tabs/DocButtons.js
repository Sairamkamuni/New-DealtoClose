import React from "react";
import { Row, Col } from "reactstrap";
import { ShareButton, EmailButton, ScissorsButton, DownloadButton, PrintButton, CopyButton, MovetButton, CertificateButton, CancelButton, ArchiveButton, } 
from "pages/utils/allButton";

const DocButtons = () => {
    return (
        <Row style={{ margin: "5px", border: "1px solid #dad1e0", borderRadius: "10px", backgroundColor: "#ece4f1", }}>
            <Col>
                <div className="p-2 d-flex justify-content-between align-items-center gap-2" style={{ whiteSpace: "nowrap" }} >
                    <ShareButton label="Send to Review" width="170px" onClick={() => console.log("clicked")} />
                    <EmailButton label="Send Sign Request" width="180px" />
                    <ScissorsButton label="Split Docs" width="160px" />
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
    );
};

export default DocButtons;
