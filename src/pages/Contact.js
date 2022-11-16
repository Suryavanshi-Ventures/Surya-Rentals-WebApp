import React from "react";
import PracticeLayout from "../components/layout";
import { Button } from "antd";
const Contact = () => {
  return (
    <div>
      <PracticeLayout>
        <h2>Contact Page</h2>

        <div className="contentcontainer">
          <div className="mydiv1">
            <div className="maintenence-card">
              <h4>
                Graystone Heights Apartments by Real Property Management Express
              </h4>
              <h6>Call</h6>
              <h6>
                <a href="">(605) 782-9500</a>
              </h6>
            </div>
          </div>
          <div className="mydiv1">
            <div className="maintenence-card">
              <h4>Contact Options</h4>
              <br /> <Button type="primary">Request Maintenance</Button>
            </div>
          </div>
        </div>
      </PracticeLayout>
    </div>
  );
};

export default Contact;
