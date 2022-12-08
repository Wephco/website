import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { TopNav } from "../common/TopNav";
import DashboardHome from "../screens/admin/dashboard/DashboardHome";
import EventTable from "../screens/admin/event/EventTable";
import HotelTable from "../screens/admin/hotel/HotelTable";
import MeetingRoomTable from "../screens/admin/meetingRoom/MeetingRoomTable";
import OfficeSpaceTable from "../screens/admin/officeSpace/OfficeSpaceTable";
import PropertyManagementTable from "../screens/admin/propertyManagement/PropertyManagementTable";
import RealEstateTable from "../screens/admin/realEstate/RealEstateTable";
import ShortletTable from "../screens/admin/shortlet/ShortletTable";

const Dashboard = () => {
  return (
    <div>
      <TopNav />
      <div className="p-3">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} className="sidemenu">
              <Nav variant="pills" className="flex-column">
                <Nav.Item style={{ cursor: "pointer" }}>
                  <Nav.Link eventKey="first">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ cursor: "pointer" }}>
                  <Nav.Link eventKey="second">Hotel Reservation</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ cursor: "pointer" }}>
                  <Nav.Link eventKey="third">Meeting Room</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ cursor: "pointer" }}>
                  <Nav.Link eventKey="fourth">Office Space</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ cursor: "pointer" }}>
                  <Nav.Link eventKey="fifth">Property Management</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ cursor: "pointer" }}>
                  <Nav.Link eventKey="sixth">Event/Hall Booking</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ cursor: "pointer" }}>
                  <Nav.Link eventKey="seventh">Shortlets/Apartment</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ cursor: "pointer" }}>
                  <Nav.Link eventKey="eigth">Real Estate</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <DashboardHome />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <HotelTable />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <MeetingRoomTable />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <OfficeSpaceTable />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <PropertyManagementTable />
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <EventTable />
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <ShortletTable />
                </Tab.Pane>
                <Tab.Pane eventKey="eigth">
                  <RealEstateTable />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Dashboard;
