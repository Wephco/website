import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Route, Navigate } from "react-router-dom";
import SideMenu from "./SideMenu";

const AdminLayout = ({ Component, ...rest }) => {
  const { appState } = useContext(AppContext);

  const admin = appState.isAdmin;

  return (
    <div>
      {admin ? (
        <div>
          <div className="container-fluid">
            <div className="row">
              <SideMenu />
              <Route
                {...rest}
                render={(props) => (
                  <main
                    role="main"
                    id="main-view"
                    className="col-md-12 col-lg-12 ms-sm-auto px-md-4"
                    style={{ marginTop: "30px", marginBottom: "100px" }}
                  >
                    <Component {...props} />
                  </main>
                )}
              />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" replace/>
      )}
    </div>
  );
};

export default AdminLayout;
