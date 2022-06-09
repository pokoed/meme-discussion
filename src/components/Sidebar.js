import React from 'react'
import styled from 'styled-components';

import bookmarkStar from './images/public_compoment/star_sideMenu.svg';
import profile from './images/public_compoment/profile.svg';
import crown from './images/public_compoment/crown.png';



function Sidebar() {
  return (
    <div>
      <SideMenuBar>
        <div id="UpSideMenu">
          <div id="head">
          <div id="BookMarkIcon">
            <img src={bookmarkStar} alt="북마크아이콘"></img>
          </div>
          <div id="tab-title">
            <ul> 
              <li>카페정보</li>
              <li>나의활동</li>
            </ul>
          </div>
          
          <div id="Userinfo"></div>
            <div id="Userprofile">
              <img src={profile} alt="프로필이미지"></img>
              <span id="gradeBox">매니저</span>주인짱
              <ul id="profile-info">
                <li>since 2002.02.02.</li>
                <li>카페소개</li>
              </ul>
            </div>
            <div id="CafeInfo">
              <div id="Queen"><img src={crown} alt="Queen아이콘"></img>퀸</div>

            </div>
          </div>
        </div>
      </SideMenuBar>
    </div>
  )
}

export default Sidebar