import { NextJSContext } from "next-redux-wrapper";
import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { getHorseProfile } from "../redux/actions/horseProfileActions";
import { GET_HORSE_PROFILE_ENTITY } from "../redux/actionTypes";
import { IRootStore } from "../redux/reducers";
import { IHorseProfileStore } from "../redux/reducers/horseInfo";
import { NextReduxPage } from "../typings";
import { wait } from "../utils/reduxSagaSSRMiddleware";

const Horse: NextReduxPage<IHorseProfileStore, {}> = () => {
  const { horseProfile, getHorseInfoStatus } = useSelector(
    (store: IRootStore) => store.horseProfile
  );
  if (getHorseInfoStatus === "REQUEST" || !horseProfile) {
    return "로딩중임니다";
  }
  return (
    <Layout>
      <h1>
        {horseProfile.name}#{horseProfile.number}
      </h1>
      <div>
        경기 날짜: {horseProfile.gameDate[0]}년 {horseProfile.gameDate[1]}월{" "}
        {horseProfile.gameDate[2]}일 ({horseProfile.day})
      </div>
      <div>성별: {horseProfile.sex}</div>
      <div>소유주: {horseProfile.ownerName}</div>
    </Layout>
  );
};

Horse.getInitialProps = async (context: NextJSContext) => {
  const { store } = context;
  store.dispatch(getHorseProfile(38704));
  await wait(GET_HORSE_PROFILE_ENTITY.SUCCESS);
  return {};
};

export default Horse;
