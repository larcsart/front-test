import React from 'react';

import data from '../../data/data.json';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="logo"></div>
      <div>
        <input type="text" placeholder="Encontre o que você procura" />
      </div>
      <div className="user-header">
        <img src="assets/images/icon-bell.svg" alt="Bell"/>
        <div className="user">
          <img src={data.active_user.profile_picture} className="user-picture" alt="User"/>
          <p>{data.active_user.name}</p>
          <img src="assets/images/chevron-down.svg" alt="Down"/>
        </div>
      </div>
    </HeaderContainer> 
  );
}

export default Header;