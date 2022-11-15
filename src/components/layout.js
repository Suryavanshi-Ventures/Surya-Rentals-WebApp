import "../resources/layout.css";
import logo from "../resources/logo.png";
import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DollarCircleOutlined,
  UserOutlined,
  DingdingOutlined,
  HomeOutlined,
  PhoneOutlined,
  InsuranceOutlined,
  FileDoneOutlined,
  BellOutlined,
  LogoutOutlined,
  FileSyncOutlined
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export default class PracticeLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collasible collapsed={this.state.collapsed}>
          <div className="username">
            <div className="title">HELLO!</div>
            <h5>Akash suryavanshi</h5>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={window.location.pathname}
          >
            <Menu.Item key="/home" icon={<HomeOutlined />}>
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="/payments" icon={<DollarCircleOutlined />}>
              <Link to="/payments">Payment</Link>
            </Menu.Item>
            <Menu.Item key="/maintenance" icon={<DingdingOutlined />}>
              <Link to="/maintenance">Maintenance</Link>
            </Menu.Item>
            <Menu.Item key="/contact" icon={<PhoneOutlined />}>
              <Link to="/contact">Contact Us</Link>
            </Menu.Item>
            <Menu.Item key="/profile" icon={<UserOutlined />}>
              <Link to="/profile">Account Profile</Link>
            </Menu.Item>
            <Menu.Item key="/documents" icon={<FileSyncOutlined />}>
              <Link to="/documents">Shared Documents</Link>
            </Menu.Item>
            <Menu.Item key="/insurance" icon={<InsuranceOutlined />}>
              <Link to="/insurance">Insurance</Link>
            </Menu.Item>
            <Menu.Item key="/details" icon={<FileDoneOutlined />}>
              <Link to="/details">Property Details</Link>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              <Link to="/logout">Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <div className="logo d-flex">
              <img src={logo} width="80px"/>
            </div>
            <div className="logout d-flex">
              <BellOutlined />
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
