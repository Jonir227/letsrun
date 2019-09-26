import axios from "axios";
import { NextPage } from "next";
import React from "react";
import Layout from "../components/Layout";
import getCurrentUrl from "../utils/getCurrentUrl";

interface IAboutProps {
  data: any;
}

const About: NextPage<IAboutProps> = ({ data }) => {
  return (
    <Layout>
      <div style={{ margin: "auto" }}>
        <p>다년간의 경험을 통한 전문적 분석으로</p>
        <p>최적의 해답을 찾아드립니다.</p>
      </div>
    </Layout>
  );
};

About.getInitialProps = async context => {
  const res = await axios.get(getCurrentUrl("/api/todos/1"));
  return { data: res.data };
};

export default About;
