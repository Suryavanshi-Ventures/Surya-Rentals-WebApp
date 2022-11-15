import React from "react";
import PracticeLayout from "../components/layout";
import "../resources/layout.css";
import { FilePdfOutlined,
    DownloadOutlined } from "@ant-design/icons";
const SharedDocuments = () => {
  return (
    <div>
      <PracticeLayout>
        <h2>Shared Documents</h2>
        <div className="ShareDocumentsCard">
          <h5>Shared with you</h5>
          <div>

          <table className="headDoc">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Shared</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><FilePdfOutlined /><a href="">deposit_disposition_amount_due_akash_suryavanshi_041922.pdf</a></td>
                  <td>04/19/2022</td>
                  <td><a href="">Download</a> <DownloadOutlined /></td>
                </tr>
                <tr>
                  <td><FilePdfOutlined /><a href="">tenant_ledger-akash_suryavanshi-20220419.pdf</a></td>
                  <td>04/19/2022</td>
                  <td><a href="">Download</a> <DownloadOutlined /></td>
                </tr>
                
                
              </tbody>
            </table>
          </div>
        
        </div>
      </PracticeLayout>
    </div>
  );
};

export default SharedDocuments;
