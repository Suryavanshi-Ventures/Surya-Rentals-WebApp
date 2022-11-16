import React from "react";
import PracticeLayout from "../components/layout";

const Maintenance = () => {
  return (
    <div>
      <PracticeLayout>
        <h4>Maintenance</h4>

        <div className="contentcontainer">
          <div className="mydiv1">
            <div className="maintenence-card">
              <h4>Maintenance Requests</h4>
              <br />
              <h6>You currently do not have any open maintenance requests.</h6>
            </div>
          </div>{" "}
          <div className="mydiv1">
            <div className="maintenence-card">
              <h4>Closed Maintenance Requests</h4>

              <table className="payment-table">
                <tbody>
                  <tr>
                    <td>
                      <div className="circle-icon-two"></div>
                    </td>
                    <td>
                      Requested by Property Manager on <br />
                      03/28/2022 11:03AM Maintenance Request #49275-1
                      <br />
                      This request was completed on 04/07/2022
                    </td>
                    <td>
                      <div className="completed-button">
                        <p>Completed</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <div className="circle-icon-two"></div>
                    </td>
                    <td>
                      The bathroom door is not latching.<br/>Requested by
                      You <br/>on 12/06/2021 5:41PM Maintenance<br/> Request #43734-1 This
                      request was on 12/07/2021
                    </td>
                    <td>
                      <div className="completed-button">
                        <p>Completed</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr><td></td><td></td><td><a href="">Show more</a></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </PracticeLayout>
    </div>
  );
};

export default Maintenance;
