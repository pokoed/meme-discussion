import React from "react";
import styled from "styled-components";
import headerSrc from "../images/public_compoment/HeaderMain.png";
import ChennelA from "../images/public_compoment/Channel_A_Logo.png";
import GroundX from "../images/public_compoment/GroundX.jpg";
import dongA from "../images/public_compoment/dongA_daily.png";
import Digitech from "../images/public_compoment/Seoul_Digitech_High_School.png";

function Header(props) {
  return (
    <div>
      <HeaderMenuTop>
        <div id="logo">
          <img src={ChennelA} alt="채널A로고" class="chanelA"></img>&nbsp;|
          <img src={GroundX} alt="그라운드x로고"></img>&nbsp;|
          <img src={dongA} alt="동아일보로고"></img>&nbsp;|&nbsp;
          <img
            src={Digitech}
            alt="서울디지텍고등학교로고"
            class="Digitech"
          ></img>
        </div>

        <div id="header-top">
          <ul>
            <li>홈</li> |<li>이웃</li>|<li>가입카페 ▼</li>|<li>새글</li>|
            <li>내소식</li>|<li>채팅</li>|<li>쥔짱님 ▼</li>
          </ul>
        </div>
      </HeaderMenuTop>
      <HeaderStyleTest>
        <h1></h1>
      </HeaderStyleTest>
      {props.type === "noBlack" ? (
        <></>
      ) : (
        <HeaderBar>
          <div id="header-search">
            <input></input>
            <button>검색</button>
          </div>

          <div id="header-bar-menu">
            <ul>
              <li>
                <a href="http://localhost:3000/main">홈 화면</a>
              </li>
              <li>
                <a href="#">내가 제일 '짤' 나가</a>
              </li>
              <li>
                <a href="#">짤장터</a>
              </li>
              <li>
                <a href="http://localhost:3000/productlist">짤 찾아 삼만리</a>
              </li>
              <li>
                <a href="#">공지사항</a>
              </li>
            </ul>
          </div>
        </HeaderBar>)
      }
    </div>
  );
}
const HeaderMenuTop = styled.div`
  width: 1080px;
  margin: auto;
  justify-content: space-between;
  display: flex;
  color: #dbdbdb;
  font-size: 11px;

  ul {
    display: flex;
    margin: auto;
    list-style: none;
    width: 500px;
    padding: 10px;
  }
  li {
    margin: auto 5px;
    color: black;
  }
  img {
    height: 20px;
  }
  #logo {
    margin: 5px 0;
    font-size: 24px;
    display: flex;
    align-items: center;
    .chanelA {
      padding: 5px 0 0 0;
    }
    .Digitech {
      padding: 7px 0 0 0;
    }
  }
  #header-top {
    width: 330px;
  }
`;
const HeaderStyleTest = styled.header`
  width: 1080px;
  background: url(${headerSrc}) no-repeat;
  height: 130px;
  color: white;
  float: center;
  top: -20px;
  margin: 0 auto;
  /* margin-bottom: px; */
  position: relative;
  /* margin-top: 40px; */
`;
const HeaderBar = styled.div`
  width: 1080px;
  height: 45px;
  background: #000;
  position: relative;
  margin: -18px auto;

  a {
    text-decoration: none;
    color: #fff;
  }
  #header-search {
    height: 30px;
    padding: 10px;
    width: 35 0px;
    float: right;
    display: flex;
    /* margin-right:px; */
  }
  button {
    border-radius: 0%;
    height: 24px;
    border: 0;
    top: 0px;
    position: relative;
    width: 61px;
    background-color: #ff50e2;
    color: #fff;
    font-size: 10px;
  }
  input {
    height: 22px;
    border-radius: 0%;
    border: 0;
    width: 238px;
    margin-right: 1.5px;
    box-shadow: 0.2px 0.2px 4px 0px #ff50e2 inset;
  }
  ul {
    display: flex;
    color: white;
    list-style: none;
    padding: 3px;
    margin-left: 8px;
    margin-top: 4px;
  }
  li {
    padding: 12px;
    font-size: 12px;
  }
`;
export default Header;
