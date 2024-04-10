"use client"
import React, { useState } from "react";
import { Button, Layout, Menu, Input, Avatar, Badge } from "../../node_modules/antd";
import {
  HomeOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  FieldTimeOutlined,
  LineChartOutlined,
  FireOutlined,
  GoldOutlined,
  LogoutOutlined,
  SettingOutlined,
  BellOutlined,
  WechatWorkOutlined,
} from "../../node_modules/@ant-design/icons";
import { DashboardHome } from "../components/Dash";
 import { LogoLink } from "../components/Logo";
 import { LogoIcon } from "../components/Icon";
import { cn } from "../lib/utils";


const { Search } = Input;
const { Content, Sider, Header } = Layout;
const items = [
  {
    key: "/",
    icon: <HomeOutlined className="white-icon" />, // Apply custom class to icon
    label: <div className="text-white">Home</div>,
  },
  {
    key: "/activities",
    icon: <FieldTimeOutlined className="white-icon" />, // Apply custom class to icon
    label: <div className="text-white">Activities</div>,
  },
  {
    key: "/analytics",
    icon: <LineChartOutlined className="white-icon" />, // Apply custom class to icon
    label: <div className="text-white">Analytics</div>,
  },
  {
    key: "/transformation",
    icon: <FireOutlined className="white-icon" />, // Apply custom class to icon
    label: <div className="text-white">Transformation</div>,
  },
  {
    key: "/library",
    icon: <GoldOutlined className="white-icon" />, // Apply custom class to icon
    label: <div className="text-white">Library</div>,
  },
];

const bottomItems = [
  {
    key: "/Settings",
    icon: <SettingOutlined className="white-icon" />, // Apply custom class to icon
    label: <div className="text-white">Setting</div>,
  },
  {
    key: "/logout",
    icon: <LogoutOutlined className="white-icon" />, // Apply custom class to icon
    label: <div className="text-white">Logout</div>,
  },
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh"}}>
      <Sider
      width={300}
        collapsed={collapsed}
        
        onCollapse={(value) => setCollapsed(value)}
        style={{
          background: "#2F667F",
          paddingTop: "2rem",
          marginTop: "1rem",
          marginBottom: "4rem",
          paddingRight: "1rem",
          borderRadius: "2.5rem",
          width: collapsed ? "80px" : "300px",
        
        
        }}
      >
        <Button
          icon={collapsed ? <RightCircleOutlined /> : <LeftCircleOutlined />}
          type="text"
          shape="circle"
          onClick={() => setCollapsed((prev) => !prev)}
          className={cn(
            "absolute top-0",
            collapsed ? "left-10" : "left-[250px]"
          )}
          style={{ color: "#ffffff" }}
        />

        <div className="flex flex-col justify-between h-[60vh] text-[#ffff] ">
          <div className="text-white">
            <div className="my-6 flex items-center pr-2">
              {collapsed ? <LogoIcon className="size-6" /> : <LogoLink />}
            </div>
            <Menu
              defaultSelectedKeys={["/"]}
              mode="inline"
              items={items}
              style={{ border: "none", background: "#2F667F", color: "#ffffff" }}
              className="text-white"
            />
          </div>
          <div className="border-t border-gray-400 text-[#ffff]">
            <Menu
              defaultSelectedKeys={["/"]}
              mode="inline"
              items={bottomItems}
              style={{ border: "none", background: "#2F667F", color: "#ffffff" }}
            />
          </div>
        </div>
      </Sider>
      <Layout  >
        <Header
          style={{
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Search
            placeholder="Search by profile, setting, artifact etc..."
            allowClear
            onSearch={() => {}}
            style={{ width: 500 }}
          />
          <div className="flex items-center justify-center space-x-4">
            <Button shape="circle">
              <Badge dot={true} overflowCount={9} style={{ backgroundColor: "green" }}>
                <BellOutlined />
              </Badge>
            </Button>
            <Button shape="circle">
              <Badge dot={true} overflowCount={9} style={{ backgroundColor: "green" }}>
                <WechatWorkOutlined />
              </Badge>
            </Button>
            <Button icon={<SettingOutlined />} shape="circle" />
            <Avatar className="rounded-2" src="https://s3-alpha-sig.figma.com/img/0198/7e91/bd98ea2594a62a77ed0b46ad32d0015a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cXX8lKK5QImy2ViUrjIKtgkVXny8rCt9J17b--nWbk9ISRl4~RHQiNHS6oeoUDcZVxZ-wt7APZE2juH2X9rhGXA-MkV9N3paNEpA4ekgwvQQMUCbQebpr5lH~kVxSY1QIwIvgJIyeCX4djKlsC4JBGxDqwjopz9G7AV8anIohFrr478TKv1qWnxRGX0ZI4skk7xRV9G00q6OZ-yIacCIAM8ZuDntNKrSPdz6SvGgf3g7njV-dNqr0OlXUAq8eUnnksrPDr-RgCed3~NEFDoOnBgcJAk2Cftprfw~1poocTzmwYAnxRBzFyG8MBmxwkPpQXdmKAhjUsl0RkMPkVeNhQ__">
              P
            </Avatar>
          </div>
        </Header>
        <Content
          style={{ margin: "0 16px", width: "100wh" }}
          className="h-[calc(100vh_-200px)] overflow-auto"
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <DashboardHome />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
