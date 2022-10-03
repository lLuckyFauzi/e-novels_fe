import React, { ChangeEvent, useState } from "react";
import Text from "../../../component/Typography/Text";
import { Input } from "antd";
import Link from "next/link";
import Styling from "./RightContent.module.scss";
import { Formik } from "formik";
import BtnPrimary from "../../../component/Button/Primary/Primary";

interface signupForm {
  fullname?: string;
  email?: string;
  password?: string;
}

const RightContent = () => {
  const signupValue: signupForm = {
    fullname: "",
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={signupValue}
      onSubmit={(values) => {
        console.log({ values });
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ paddingLeft: "146px", paddingRight: "147px" }}>
            <form onSubmit={handleSubmit}>
              <div style={{ textAlign: "center" }}>
                <Text size={55} style={{ fontWeight: 400 }}>
                  Sign Up
                </Text>
                <br />
                <Text size={25} style={{ fontWeight: 200, opacity: "50%" }}>
                  Masukkan detail anda di bawah ini
                </Text>
              </div>
              <div style={{ marginTop: "70px" }}>
                <div style={{ marginBottom: "9px" }}>
                  <label
                    htmlFor="fullname"
                    style={{ fontSize: 25, fontWeight: 200 }}
                  >
                    Nama Lengkap
                  </label>
                  <Input
                    onChange={handleChange}
                    value={values.fullname}
                    style={{
                      borderRadius: "8px",
                      height: "49px",
                      fontSize: 20,
                      fontWeight: 300,
                    }}
                    placeholder="Masukkan nama lengkap"
                    name="fullname"
                  />
                </div>
                <div style={{ marginBottom: "9px" }}>
                  <label
                    htmlFor="email"
                    style={{ fontSize: 25, fontWeight: 200 }}
                  >
                    Email
                  </label>
                  <Input
                    onChange={handleChange}
                    value={values.email}
                    style={{
                      borderRadius: "8px",
                      height: "49px",
                      fontSize: 20,
                      fontWeight: 300,
                    }}
                    placeholder="Masukkan Email anda"
                    name="email"
                  />
                </div>
                <div style={{ marginBottom: "9px" }}>
                  <label
                    htmlFor="password"
                    style={{ fontSize: 25, fontWeight: 200 }}
                  >
                    Password
                  </label>
                  <Input
                    onChange={handleChange}
                    value={values.password}
                    style={{
                      borderRadius: "8px",
                      height: "49px",
                      fontSize: 20,
                      fontWeight: 300,
                    }}
                    placeholder="Masukkan Password anda"
                    name="password"
                  />
                </div>
                <div style={{ marginTop: "9px" }}>
                  <Text size={18} style={{ fontWeight: 200 }}>
                    Sudah mempunyai akun?{" "}
                  </Text>
                  <Link href={"#"}>
                    <Text
                      size={18}
                      style={{
                        fontWeight: 400,
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      color="darkGray"
                    >
                      Login
                    </Text>
                  </Link>
                </div>
              </div>
              <div
                className={Styling.signupBtn}
                style={{ textAlign: "center", marginTop: "51px" }}
              >
                <BtnPrimary
                  onClick={() => handleSubmit()}
                  disabled={isSubmitting}
                >
                  Daftar
                </BtnPrimary>
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default RightContent;
