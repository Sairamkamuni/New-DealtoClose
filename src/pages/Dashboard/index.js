import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import MetaTags from "react-meta-tags";

import CountCardBar from "./CountCartBar";
import TaskBar from "./TaskBar";
import DealBar from "./DealBar";
import PreDealBar from "./PreDealBar";
import ClosingBar from "./ClosingBar";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | {process.env.REACT_APP_TITLE}</title>
        </MetaTags>

        <Container fluid>

          <Row>
            <Col>
              <CountCardBar />
            </Col>
          </Row>

          <Row>
            <Col>
              <TaskBar />
            </Col>
          </Row>

          <Row>
            <Col>
              <DealBar />
            </Col>
          </Row>

          {/* ⚡ FIXED: ADDED SPACING BETWEEN THE 2 COLUMNS */}
          <Row className="gy-3 gx-4">
            <Col md={6}>
              <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                <CardBody>
                  <PreDealBar />
                </CardBody>
              </Card>
            </Col>

            <Col md={6}>
              <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                <CardBody>
                  <ClosingBar />
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
