import React, { useState } from "react";
import { Checkbox, Layout, Radio } from "antd";
import Text from "../../../component/Typography/Text";
import Image from "next/image";
import FilterIcon from "../../../public/icons/Filter.png";
import ShopStyle from "../ShopStyle.module.scss";

const SiderFilter = () => {
  const { Sider } = Layout;
  const [filter, setFilter] = useState(0);

  return (
    <>
      {filter === 0 && (
        <div
          className={ShopStyle.floatAction}
          onClick={() => {
            setFilter(300);
          }}
        >
          <div
            style={{
              width: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={FilterIcon} alt="" />
          </div>
        </div>
      )}
      <Sider style={{ backgroundColor: "#F2F2F2" }} width={filter}>
        <div
          style={{
            height: "575px",
            backgroundColor: "white",
            position: "relative",
            top: "160px",
            padding: "27px 42px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <div
              style={{ width: "25px", cursor: "pointer" }}
              onClick={() => setFilter(0)}
            >
              <Image src={FilterIcon} alt="" />
            </div>
            <Text
              size={45}
              bold
              style={{ display: "block", textAlign: "center" }}
            >
              Filter
            </Text>
          </div>
          <div>
            <Text
              style={{
                fontWeight: "500",
              }}
              size={25}
            >
              Diskon
            </Text>
            <div style={{ paddingTop: "7px" }}>
              <Radio.Group>
                <div>
                  <Radio value={"50%"}>
                    <Text size={20} style={{ fontWeight: 300 }}>
                      50%
                    </Text>
                  </Radio>
                </div>
                <div>
                  <Radio value={"35%"}>
                    <Text size={20} style={{ fontWeight: 300 }}>
                      35%
                    </Text>
                  </Radio>
                </div>
                <div>
                  <Radio value={"15%"}>
                    <Text size={20} style={{ fontWeight: 300 }}>
                      15%
                    </Text>
                  </Radio>
                </div>
                <div>
                  <Radio value={"10%"}>
                    <Text size={20} style={{ fontWeight: 300 }}>
                      10%
                    </Text>
                  </Radio>
                </div>
              </Radio.Group>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <Text
              style={{
                fontWeight: "500",
              }}
              size={25}
            >
              Categories
            </Text>
            <div style={{ paddingTop: "15px" }}>
              <div>
                <Checkbox>
                  <Text size={20} style={{ fontWeight: 300 }}>
                    Romance
                  </Text>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <Text size={20} style={{ fontWeight: 300 }}>
                    Adventure
                  </Text>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <Text size={20} style={{ fontWeight: 300 }}>
                    Documentary
                  </Text>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <Text size={20} style={{ fontWeight: 300 }}>
                    Mystery
                  </Text>
                </Checkbox>
              </div>
            </div>
          </div>
        </div>
      </Sider>
    </>
  );
};

export default SiderFilter;
