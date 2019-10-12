import { NextPage } from "next";
import React from "react";
import Layout from "../components/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <div style={{ margin: "auto" }}>
        <p>다년간의 경험을 통한 전문적 분석으로</p>
        <p>최적의 해답을 찾아드립니다.</p>
      </div>
    </Layout>
  );
};

export default About;
