import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #63688A;
  padding: 18px 120px;
  z-index: 99999;

  .logo {
    width: 122px;
    height: 55px;
    background-color: #000000;
    border-radius: 28px;
  }

  .user-header {
    display: flex;
    align-items: center;
    justify-content: center;

    .user {
      display: flex;
      align-items: center;

      .user-picture {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        margin-left: 45px;
      }

      p {
        margin-left: 24px;
        margin-right: 8px;
        font-size: 18px;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }
`;