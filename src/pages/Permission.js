import React from "react";
import GradeDescribe from "../components/GradeBoardComponents/Atoms/GradeDescribe";
import GradeLine from "../components/GradeBoardComponents/Atoms/GradeLine";
import GradeTextGroup from "../components/GradeBoardComponents/Molecules/GradeTextGroup";
import GradeTitle from "../components/GradeBoardComponents/Atoms/GradeTitle";
import GradePinkArea from "../components/GradeBoardComponents/Molecules/GradePinkArea";
import GradeButtonGroup from "../components/GradeBoardComponents/Molecules/GradeButtonGroup";
import GradeBoardMainTitle from "../components/GradeBoardComponents/Molecules/GradeBoardMainTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/pages_Sidebar";
import styled from "styled-components";
import svg1 from "../images/Vector-3.svg";
import svg2 from "../images/Vector-6.svg";
import svg3 from "../images/Vector-5.svg";
import svg4 from "../images/Vector-4.svg";
import svg5 from "../images/Vector-7.svg";
import svg6 from "../images/Vector-8.svg";

import GlobalBackground from '../components/GlobalBackground'
import Background from "../components/GlobalBackground";

function Permission() {
  return (
    <GlobalBackground>
      <All>
        <Header />
        <Wrap>
          <SIDEBAR>
            <Sidebar />
          </SIDEBAR>
          <CONTENTS>
            <BackgroundColor>
              <GradeBoardMainTitle src={svg6} />
              <GradeDescribe />
              <GradeLine />
              <GradeTitle />
              <GradeTextGroup data={arr} />
              <GradePinkArea data={pinkArr} arr={strArr} />
              <GradeButtonGroup data={btnArr} />
            </BackgroundColor>
          </CONTENTS>
        </Wrap>
        <Footer />
      </All>
    </GlobalBackground>
  );
}
const All = styled.div`
  width: 1080px;
  margin: auto;
`
const Wrap = styled.div`
  width: 1080px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const SIDEBAR = styled.div`
  position: relative;
`;

const CONTENTS = styled.div`
  width: 855px;
  height: 615.5px;
  border: 4px solid #cfcfcf;
  position: relative;
  outline: 2px solid black;
`;

const BackgroundColor = styled.div`
  position: absolute;
  width: 847px;
  height: 608px;
  background: #fff;
`

const pinkArr = [
  { text: "????????????", subText: "???????????? ????????? ????????? ???????????? ?????? ?????? ????????? ?????????." },
  { text: "???????????????", subText: "???????????? ????????? ????????? ???????????? ?????????????????? ?????? ????????? ???????????????. ????????? ????????? ?????? ???????????????." },
];

const arr = [
  { text: "?????? ??????", subText: "???????????? ?????? ?????? ??? ??? 1??? ?????? ?????? ??????", img: "yes", src: svg1, type: "pink" },
  {
    text: "????????? ??????",
    subText: "????????? 1000???+????????? ??? 1000??? ?????? ???  NFT ?????? ?????? ?????? ??????",
    img: "yes",
    src: svg2,
    type: "black",
  },
  {
    text: "????????? ??????",
    subText: "????????? 2000???+????????? ??? 2000??? ?????? ??? ???????????? ?????????,  NFT ?????? ???????????? ?????? ??????",
    img: "yes",
    src: svg3,
    type: "black",
  },
  {
    text: "????????? ??????",
    subText: "????????? 5000???+????????? ??? 3000??? ?????? ??? ???????????? ?????? ?????? ?????? ??????",
    img: "yes",
    src: svg4,
    type: "black",
  },
  {
    text: "????????? ??????",
    subText: "??????/??????/?????? ?????? ???????????? ??????????????? ????????? ????????? ???/?????????",
    img: "yes",
    src: svg5,
    type: "black",
  },
];

const strArr = [
  "??? ????????? 0???",
  " | ",
  "????????? 0???",
  " | ",
  "????????? 45???",
  " | ",
  "????????? 2012.12.14",
];

const btnArr = [
  { text: "????????????", type: "white" },
  { text: "??? ????????????", type: "pink" },
];
export default Permission;
