"use client";

import Link from "next/link";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const Nav = () => {
  return (
    <Header className="bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Menu mode="horizontal" theme="dark" className="flex items-center">
          <Menu.Item key="home" className="text-lg">
            <Link
              href="/"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              HOME
            </Link>
          </Menu.Item>
          <Menu.Item key="admin" className="text-lg">
            <Link
              href="/admin/users"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              USERS
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default Nav;
