import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";
import { FileSignatureButton, DownloadButton, PrintButton, CopyButton, MovetButton, CertificateButton, CancelButton, ArchiveButton } from "pages/utils/allButton";

const ActionButtons = () => {

    return (
        <Row>
            <Col>
                <Card>
                    <div className="rounded-5 p-2 d-flex justify-content-center gap-2 text-center w-100">
                        <FileSignatureButton label="Send Sign Request" width="240px" onClick={() => console.log('Button Clicked')} />
                        <DownloadButton label="Download" width="200px" onClick={() => console.log('Button Clicked')} />
                        <PrintButton label="Print" width="200px" onClick={() => window.print()} />
                        <CopyButton label="Copy" width="200px" onClick={() => console.log('Button Clicked')} />
                        <MovetButton label="Move" width="200px" onClick={() => console.log('Button Clicked')} />
                        <CertificateButton label="Create Auth Cert" width="240px" onClick={() => console.log('Button Clicked')} />
                        <CancelButton label="Cancel Sign Request" width="280px" onClick={() => console.log('Button Clicked')} />
                        <ArchiveButton label="Archive" width="200px" onClick={() => console.log('Button Clicked')} />
                    </div>
                </Card>
            </Col>
        </Row>
    )
};

export default ActionButtons;