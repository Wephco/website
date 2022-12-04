import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Navigate } from "react-router-dom";
import SideMenu from "./SideMenu";
import { TopNav } from "../common/TopNav";
import { Row, Col } from "react-bootstrap";

const AdminLayout = ({ children }) => {
  const { appState } = useContext(AppContext);

  const admin = appState.isAdmin;

  return (
    <div>
      {/* {admin ? ( */}
      <div>
        <TopNav />
        <div className="container-fluid">
          <span
            id="request-spinner"
            className="spinner-border spinner-border-sm text-success request-spinner d-none"
            role="status"
            aria-hidden="true"
          ></span>
          <Row>
            <Col md={2}>
              <SideMenu />
            </Col>
            <Col md={10}>
              <main
                role="main"
                id="main-view"
                className="col-md-12 col-lg-12 ms-sm-auto px-md-4"
                style={{ marginTop: "30px", marginBottom: "100px" }}
              >
                {children}
              </main>
            </Col>
          </Row>
          {/* <div className="row">
              <SideMenu />

              <main
                role="main"
                id="main-view"
                className="col-md-12 col-lg-12 ms-sm-auto px-md-4"
                style={{ marginTop: "30px", marginBottom: "100px" }}
              >
                {children}
              </main>
            </div> */}
        </div>
      </div>
      {/* ) : ( */}
      {/* <Navigate to="/" replace /> */}
      {/* )} */}
    </div>
  );
};

export default AdminLayout;
