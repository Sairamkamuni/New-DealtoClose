import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import MetaTags from "react-meta-tags";
import CountCardBar from "./CountCartBar";
import MyTable from "./Table";

const Dashboard = () => {


  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | {process.env.REACT_APP_TITLE}</title>
        </MetaTags>
        <Container fluid>
          <Row>
            <CountCardBar />
          </Row>

          <Row>
            <Col>
              <Card className="p-3" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                <h5 className="mb-0 fw-bold">Tasks</h5>
                <MyTable />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
