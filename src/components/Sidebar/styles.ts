import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background: #ffffff;
  width: 88px;
  height: calc(100% - 90px);
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 90px;
  box-shadow: 0 0 33 #000000;
  border: none;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  z-index: 99999;

  .user-online {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 53px;
    height: 53px;
    background-color: rgba(195, 203, 213, .21);
    border-radius: 50px;
    color: #ffffff;
    font-size: 22px;
    font-weight: 500;
    margin: 7px 0;

    img {
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .online {
    padding: 8px 12px;
    text-align: center;
  }
`;
