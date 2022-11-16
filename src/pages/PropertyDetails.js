import React from "react";
import PracticeLayout from "../components/layout";
import { Button } from "antd";
const PropertyDetails = () => {
  return (
    <div>
      <PracticeLayout>
        <h3>Property Details</h3>
        <div className="contentcontainer">
          
          <div className="mydiv1">
            <div className="property-detils">
              <h4>Address</h4>
              <h5>5100 S Graystone Ave. -213<br/>
Sioux Falls, SD 57108</h5>
              <br />
            </div>
            <div className="current-lease">
            <h5>Current Lease</h5>
            <br />
          
            <div className="lease-dates">  <p>Lease Dates	</p></div>
            <h7>09/10/2022 -	</h7> <Button type="dashed">View lease online</Button>
          </div>



          </div>
          <div className="mydiv1">
            <div className="property-detils">
              <h3>Contact Info</h3>
              <h5>
                Graystone Heights Apartments by Real Property Management Express
              </h5>
              <h6>Call</h6>
              <h6>
                <a href="">(605) 782-9500</a>
              
              </h6>
              <h6>    <a href="">Visit Our Website</a></h6>
            </div>
          </div>
        </div>
      </PracticeLayout>
    </div>
  );
};

export default PropertyDetails;
