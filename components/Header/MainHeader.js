import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FiShoppingCart, FiHeart, FiMenu, FiX } from "react-icons/fi";

import { Layout, Menu, Drawer, Button, Badge } from "antd";
const { Header, Content, Footer } = Layout;

import LangBtn from "./LangBtn";
import MainMenu from "./MainMenu";

const MainHeader = (props) => {
  const [visible, setVisible] = useState(false);

  const router = useRouter();
  return (
    <Header className="bg-white main-header z-10 flex">
      <div className="container flex   justify-between flex-wrap">
        <div className="menu--btn flex items-center lg:hidden me-6">
          <Button type="text" onClick={() => setVisible(true)}>
            <FiMenu size={22} />
          </Button>
          <Drawer
            title="BuilderZ"
            placement={router.locale == "ar" ? "right" : "left"}
            closable={false}
            onClose={() => setVisible(false)}
            visible={visible}
            className="main-header-drawer"
          >
            <Button
              size="small"
              type="text"
              className="absolute   end-4 top-4 flex items-center justify-center hover:text-secondary hover:border-secondary"
              onClick={() => setVisible(false)}
            >
              <FiX size={18} />
            </Button>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col">
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <Button
                    type="primary"
                    className="block w-full"
                    onClick={() => router.push("/signup")}
                  >
                    Log in
                  </Button>
                  <Button
                    type="primary"
                    className="block w-full mt-4 bg-secondary border-secondary hover:bg-secondary-dark hover:border-secondary-dark focus:border-secondary-dark focus:bg-secondary-dark"
                    onClick={() => router.push("/signup")}
                  >
                    Register
                  </Button>
                </div>
                <MainMenu />
              </div>
              <div className="py-4 border-t border-gray-100">
                <LangBtn />
              </div>
            </div>
          </Drawer>
        </div>
        <div className="header__brand flex items-center">
          <Link href="/">
            <a className="header__brand--logo">
              <img
                src="/images/main-logo.svg"
                alt="Logo"
                className="h-10 object-contain "
              />
            </a>
          </Link>
        </div>

        <div className="flex ">
          <div className="hidden lg:flex">
            <MainMenu />
          </div>
          <div className="flex items-center">
            <Link href="/">
              <a className="hover:text-secondary">
                <FiHeart size={22} />
              </a>
            </Link>

            <Badge
              count={4}
              className="cursor-pointer hover:text-secondary ms-4"
              onClick={() => router.push("/")}
            >
              <FiShoppingCart size={22} />
            </Badge>
          </div>
          <div>
            <Button
              type="primary"
              size="large"
              className="ms-6 hidden lg:inline-block"
              onClick={() => router.push("/signup")}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default MainHeader;
