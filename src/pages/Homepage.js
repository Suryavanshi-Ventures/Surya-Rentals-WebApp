import React from "react";
import PracticeLayout from "../components/layout";
import "../resources/layout.css";
import { HomeOutlined } from "@ant-design/icons";
import { Button } from "antd";
function Homepage() {
  return (
    <PracticeLayout>
      <h1>Homepage</h1>
      <div className="contentcontainer">
        <div className="mydiv1">
          <div className="currentBalance">
            <h4>Your Current Balance</h4>
            <h6>There is nothing for you to pay.</h6>
            <Button type="primary">Pay now</Button>
            <br />
            <br />
            <br />
            <h5>You have no current bills.</h5>
          </div>
          <div className="current-lease">
            <h5>Current Lease</h5>
            <br />
          
            <div className="lease-dates">  <p>Lease Dates	</p></div>
            <h7>09/10/2022 -	</h7> <Button type="dashed">View lease online</Button>
          </div>
          
        </div>
        <div className="mydiv1">
          <div className="renter-insurance">
            <h4>
              <HomeOutlined /> Renters Insurance
            </h4>
            <p>
              Renters insurance is now available for purchase in your online
              portal.
            </p>
            <br />
            <Button type="primary">Purchase Rental insurance</Button>&nbsp;
            &nbsp;
            <Button>Learn More</Button>
          </div>

          <div className="maintenence">
            <h5>Maintenance Requests</h5>
            <br />
            <p>You currently do not have any open maintenance requests.</p>
          </div>
        </div>
      </div>
    </PracticeLayout>
  );
}
export default Homepage;
