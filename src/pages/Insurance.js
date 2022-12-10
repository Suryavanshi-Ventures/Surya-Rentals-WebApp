import React from "react";
import PracticeLayout from "../components/layout";
import "../resources/layout.css";
import { HomeOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Insurance = () => {
  return (
    <div>
      <PracticeLayout>
        <div class="wrapper">
          <header>
            <h1>hello</h1>
           
          </header>
          
          <aside class="aside aside1">
            <h4>Your Current Balance</h4>
            <h6>There is nothing for you to pay.</h6>
            <Button type="primary">Pay now</Button>
            <br />
            <br />
            <br />
            
            
            <h5>You have no current bills.</h5>
          </aside>

          <aside class="aside aside2">
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
          </aside>
        </div>
        <div class="wrapper">
          <aside class="aside aside3">
            <h5>Current Lease</h5>
            <br />
            <div className="lease-dates">
              {" "}
              <p>Lease Dates </p>
            </div>
            <h7>09/10/2022 - </h7>{" "}
            <Button type="dashed">View lease online</Button>
          </aside>

          <aside class="aside aside4">
            <h5>Maintenance Requests</h5>
            <br />
            <p>You currently do not have any open maintenance requests.</p>
          </aside>
        </div>
      </PracticeLayout>
      Insurance
    </div>
  );
};

export default Insurance;
