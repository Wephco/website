import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HotelIcon from "@material-ui/icons/Hotel";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import PropertyIcon from "@material-ui/icons/Business";
import ApartmentIcon from "@material-ui/icons/Apartment";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import EventIcon from "@material-ui/icons/Event";
import MessageIcon from "@material-ui/icons/Message";
import Tooltip from "@material-ui/core/Tooltip";

// import { StoreService } from '../../utils/storeService';
import "./styles.css";

const SideMenu = () => {

  return (
    <>
      <div>
        <ListItem button>
          <NavLink to="/dashboard">
            <Tooltip title="Dashboard">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
            </Tooltip>
          </NavLink>
          <NavLink
            to="/dashboard"
            activeClassName="active"
            className="side-menu-icons"
          >
            <ListItemText primary="Dashboard" />
          </NavLink>
        </ListItem>

        <ListItem button>
          <NavLink to="/hotel-reservation">
            <Tooltip title="Hotel Reservation">
              <ListItemIcon>
                <HotelIcon />
              </ListItemIcon>
            </Tooltip>
          </NavLink>
          <NavLink
            to="/hotel-reservation"
            activeClassName="active"
            className="side-menu-icons"
          >
            <ListItemText primary="Hotel Reservation" />
          </NavLink>
        </ListItem>

        <ListItem button>
          <NavLink to="/meeting-room">
            <Tooltip title="Meeting Room">
              <ListItemIcon>
                <MeetingRoomIcon />
              </ListItemIcon>
            </Tooltip>
          </NavLink>
          <NavLink
            to="/meeting-room"
            activeClassName="active"
            className="side-menu-icons"
          >
            <ListItemText primary="Meeting Room" />
          </NavLink>
        </ListItem>

        <ListItem button>
          <NavLink to="/office-space">
            <Tooltip title="Office Space">
              <ListItemIcon>
                <GroupWorkIcon />
              </ListItemIcon>
            </Tooltip>
          </NavLink>
          <NavLink
            to="/office-space"
            activeClassName="active"
            className="side-menu-icons"
          >
            <ListItemText primary="Office Space" />
          </NavLink>
        </ListItem>

        <ListItem button>
          <NavLink to="/property-management">
            <Tooltip title="Property Management">
              <ListItemIcon>
                <PropertyIcon />
              </ListItemIcon>
            </Tooltip>
          </NavLink>
          <NavLink
            to="/property-management"
            activeClassName="active"
            className="side-menu-icons"
          >
            <ListItemText primary="Property Management" />
          </NavLink>
        </ListItem>

        <ListItem button>
          <NavLink to="/event-booking">
            <Tooltip title="Event/Hall Booking">
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
            </Tooltip>
          </NavLink>
          <NavLink
            to="/event-booking"
            activeClassName="active"
            className="side-menu-icons"
          >
            <ListItemText primary="Event/Hall Booking" />
          </NavLink>
        </ListItem>

        <ListItem button>
          <NavLink to="/shortlet">
            <Tooltip title="Shortlets/Apartment">
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
            </Tooltip>
          </NavLink>
          <NavLink
            to="/shortlet"
            activeClassName="active"
            className="side-menu-icons"
          >
            <ListItemText primary="Shortlets/Apartment" />
          </NavLink>
        </ListItem>

        <ListItem button>
          <NavLink to="/blog-posts">
            <Tooltip title="Blog Posts">
              <ListItemIcon>
                <MessageIcon />
              </ListItemIcon>
            </Tooltip>
          </NavLink>
          <NavLink
            to="/blog-posts"
            activeClassName="active"
            className="side-menu-icons"
          >
            <ListItemText primary="Blog Posts" />
          </NavLink>
        </ListItem>
      </div>
    </>
  );
};

export default SideMenu;
