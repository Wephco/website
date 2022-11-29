import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseInitialisation";
import { useNavigate, Link } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  const setActiveNav = (event) => {
    //remove all active navs
    let navLinks = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
    //set active for the current one
    event.target.classList.add("active");

    //scroll to top.  <span id='scroll-here'></span> is found in index.tsx
    let scrollHere = document.getElementById("scroll-here");
    scrollHere.scrollIntoView();

    //close side menu if open
    let sideBar = document.getElementById("sidebarMenu");
    sideBar.classList["toggle"]("show");

    let mainView = document.getElementById("main-view");
    mainView.classList.remove("col-md-9", "col-lg-10");
    mainView.classList.add("col-md-12", "col-lg-12");
  };

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 sidebar collapse">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {/* <li>
            <div className='card home-card name-card mt-2'>
              <div className='card-body'>
                <div className='row card-text mb-3'>
                  <div className='col-3 align-items-middle'>
                    <span className='name-abbr'>{appState.firstName[0]?.toUpperCase()}</span>
                  </div>
                  <div className='col-9 align-grid-items-middle'>
                    <div className='fs-7'>
                      {appState.firstName?.toLocaleString()} {appState.lastName?.toLocaleString()}
                    </div>
                    <div className='fs-9'>Online</div>
                  </div>
                </div>
              </div>
            </div>
          </li> */}
          <li className="nav-item sidebar-item">
            <Link to="/home" className="nav-link active" onClick={setActiveNav}>
              <span className="bi bi-house me-2"></span>Home
            </Link>
          </li>
          <li className="nav-item sidebar-item">
            <Link
              to="/subscriptions/add"
              className="nav-link"
              onClick={setActiveNav}
            >
              <span className="bi bi-person-plus me-2"></span>Add Subscription
            </Link>
          </li>
          <li className="nav-item sidebar-item">
            <Link
              to="/subscriptions"
              className="nav-link"
              onClick={setActiveNav}
            >
              <span className="bi bi-people me-2"></span>View Subscriptions
            </Link>
          </li>

          <hr />

          <hr />
          <li className="nav-item sidebar-item">
            <Link to="/profile" className="nav-link" onClick={setActiveNav}>
              <span className="bi bi-gear me-2"></span>Settings
            </Link>
          </li>
          <li className="nav-item sidebar-item">
            <div
              style={{ cursor: "pointer" }}
              onClick={logOut}
              className="nav-link"
            >
              <span className="bi bi-box-arrow-left me-2"></span> Logout
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideMenu;
