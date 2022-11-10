import React from "react";
import { Button, Checkbox, Form, Input,  Select } from "antd";
import PracticeLayout from "../components/layout";
import DefaultContact from "../components/contact";
import "../resources/layout.css";
const { Option } = Select;
function Profile() {
  return (
    <PracticeLayout>
      <div>
        <h2>Profile Infromation</h2>
      </div>
      <div className="contentcontainer">
        <div className="mydiv1">
          <div className="form-contact">
            <h5>Contact Infromation</h5>
            <DefaultContact />
          </div>
        </div>
        <div className="mydiv1">
          <div className="form-contact">
            <h5>Contact Preferences</h5>
            <h6>Recurring Payment Reminders</h6>

            <div>
              <br />
              <Checkbox>Email (aksurya08@gmail.com)</Checkbox>
            </div>
            <div>
              <Checkbox>Mobile push notifications</Checkbox>
            </div>

            <div>
              <br />

              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </div>

          <div className="paymentMethod">
            <h5>Password</h5>
            <p>Akash please Create a password between 8 and 32</p>
            <Form.Item
              label="Current Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <div className="newPassword">
              <Form.Item
                name="password"
                label="New Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="ReType Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please retype new your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <div>
                <br />

                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div className="paymentMethod">
            <h5>Saved Payment Methods</h5>
            <h6>
              Saved Bank Account:
              <br />
              Akash Suryavanshi
              <br />
              Personal Checking Account Number 5300
            </h6>
          </div>
          <div className="paymentMethod">
            <h5>Choose Your Language</h5>
            <h6>Preferred Language</h6>
            <br/>
            <Form.Item
        name="select"
        label="Select Language"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please select your Language!',
          },
        ]}
      >
        <Select placeholder="Please select a Language">
          <Option value="English">English</Option>
          <Option value="Hindi">Hindi</Option>
        </Select>
      </Form.Item>
          </div>
        </div>
      </div>
    </PracticeLayout>
  );
}

export default Profile;
