import React from 'react';

import data from '../../data/data.json';

import { SidebarContainer } from './styles';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      {data.users_online.users.map(user => {
        if(user.picture) {
          return (<div className="user-online">
            <img src={user.picture} alt="User"/>
          </div>)
        } else {
          return <div className="user-online">{user.initials}</div>
        }
      })}
      <span className="online">{data.users_online.total + ' online'}</span>
    </SidebarContainer>
  );
}

export default Sidebar;