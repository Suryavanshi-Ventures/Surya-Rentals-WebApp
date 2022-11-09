import React from "react";
import PracticeLayout from "../components/layout";
import DefaultContact from "../components/contact";
import "../resources/layout.css";
function Profile() {
  return (
    <PracticeLayout>
      <div>
      <h2>Contact Information</h2>
      </div>
      <div className="form-contact">
        
        <DefaultContact />
      </div>
    </PracticeLayout>
  );
}

export default Profile;
