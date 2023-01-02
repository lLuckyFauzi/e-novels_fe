import { Layout } from "antd";
import React from "react";
import ListBook from "./Partials/ListBook";
import SiderFilter from "./Partials/SiderFilter";

const Shop = () => {
  return (
    <Layout>
      <SiderFilter />
      <Layout>
        <div
          style={{
            minHeight: "100vh",
            paddingTop: "150px",
            paddingBottom: "800px",
            backgroundColor: "#F2F2F2",
            paddingLeft: "50px",
          }}
        >
          <ListBook />
        </div>
      </Layout>
    </Layout>
  );
};

export default Shop;
