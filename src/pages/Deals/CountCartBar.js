import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

const DealCountCardBar = () => {

    return (
        <Card className="shadow-sm mt-3" style={{ border: "1px solid #dad1e0", borderRadius: "10px" }} >
            <CardBody>
                <Row className="text-center">
                    <Col>
                        <div className="text-muted">Total Count</div>
                        <h4 className="fw-bold mt-1">5</h4>
                    </Col>
                    <Col>
                        <div className="text-muted">Total Volume</div>
                        <h4 className="fw-bold mt-1">$2.8M</h4>
                    </Col>
                    <Col>
                        <div className="text-muted">Total GCI</div>
                        <h4 className="fw-bold mt-1">$69,313</h4>
                    </Col>
                    <Col>
                        <div className="text-muted">Total Net Commission</div>
                        <h4 className="fw-bold mt-1">$58,916</h4>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default DealCountCardBar;