import React from "react";
import PracticeLayout from "../components/layout";
import "../resources/layout.css";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
function Payments() {
  return (
    <PracticeLayout>
      <h1>Payments</h1>

      <div className="contentcontainer">
        <div className="mydiv1">
          <div className="payment-card">
            <h4>Your Current Balance</h4>
            <h6>There is nothing for you to pay.</h6>
            <Button type="primary">Pay now</Button>
            <br />
            <br />
            <br />
            <h5>You have no current bills.</h5>
          </div>
        </div>

        <div className="mydiv1">
          <div className="payment-card">
            <h4>Account Ledger</h4>
            <h6>Need more help understanding your balance?</h6>
            <Button>View full accoutn ledger</Button>
          </div>
          <div className="payment-card">
            <h6>
              Past Payments <InfoCircleOutlined />
            </h6>

            <table className="payment-table">
              <tbody>
                <tr>
                  <td><div className="circle-icon"></div></td>
                  <td>
                    Paid on 04/27/2022<br/> Confirmation #: <br/>518D-AE40 Paid by You
                  </td>
                  <td>$350.40</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Includes 1. Full 1 Bedroom Heavy Clean - Cleaning of the following including but not limited to: Kitchen sink, Cupboards, fridge, stove, microwave, dishwasher, dust fan, baseboards, blinds, window sills, clean toilet, shower, bathroom sink, bathroom vanity, clean , 3. Maintenance - Cost represents 1 hour of labor. - Living Room - 1. 4 small nail holes on the West wall. 2. The area under the outlet right by the bathroom door will need to be repainted as it is stained with a red liquid. - Kitchen - 3. Missing drain pl, 2. Sales Tax - Move Out Heavy Cleaning, 4. Tax - Maintenance Labor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PracticeLayout>
  );
}

export default Payments;
