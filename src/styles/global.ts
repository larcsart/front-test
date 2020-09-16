import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Baloo Tammudu 2', cursive;
    line-height: 16px !important;
  }

  html,
  body {
    background-color: #ECF1FA;
    color: #9A9A9A;
  }

  main {
    width: calc(100vw - 88px);
    height: calc(100vh - 90px);
    margin-top: 90px;
    margin-left: 88px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    font-size: 18px;
    padding: 3px 40px;
    border: none;
    border-radius: 50px;
    background: url('assets/images/icon-search.svg') no-repeat center;
    background-color: rgba(255, 255, 255, .3);
    color: #ffffff;
    outline: none;
    line-height: 16px !important;
  }

  .video-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .player {
      width: 100%;
      max-width: 880px !important;
      background-color: #a6a6a6;
      border-radius: 14px;
    }

    .video-description {
      max-width: 880px;
      background-color: #ffffff;
      border: none;
      border-radius: 14px;
      padding: 21px;
      box-shadow: 0 3 33 #000000;

      .description-header {
        padding-bottom: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .video-user {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          .video-user-picture {
            width: 49px;
            height: 49px;
            border: none;
            border-radius: 50%;
          }

          .video-user-data {
            display: flex;
            flex-direction: column;
            margin-left: 8px;

            strong {
              font-size: 24px;
              font-weight: 600;
              color: #63688A;
            }

            p {
              font-size: 14px;
              font-weight: 500;
              color: #C3CBD5;
            }
          }
        }

        .video-badge {
          display: block;
          background-color: #D5DEEA;
          font-weight: 500;
          font-size: 15px;
          color: #ffffff;
          padding: 8px 15px;
          border-radius: 50px;
          text-align: center;
        }
      }

      .description-body {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .description-content {
          font-size: 16px;
          font-weight: 400;
          color: #C3CBD5;
          padding-right: 80px;
        }

        .description-action {
          border: 1px solid #D5DEEA;
          background-color: #ffffff;
          padding: 20px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          background: url('assets/images/icon-export.svg') no-repeat center;
        }
      }
    }
  }

  .schedule {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 760px;
    width: 100%;
    margin-top: 20px;

    .title {
      font-size: 16px;
      font-weight: 500;
      color: #9A9A9A;
      text-align: left;
    }

    .schedule-content {
      display: flex;
      flex-direction: column;
      width: 100%;

      .time-line {
        display: flex;
        width: 100%;
        flex-direction: column;
        margin: 5px 0;

        .time-line-top {
          display: flex;
          width: 100% !important;
          align-items: baseline;
          position: relative;

          span {
            color: #C3CBD5;
            font-weight: 600;
          }

          .line {
            position: relative;
            width: 100% !important;
            height: 1px;
            border: 1px solid #C3CBD5;
            margin-left: 10px;
          }
        }

        .time-line-content {
          width: 100%;
          padding: 9px 20px;
          background-color: #E06D6D8F;
          border-radius: 14px;
          margin-top: 6px;

          &.gray {
            background: #63688A8F;
          }

          .item-title {
            color: #ffffff;
            font-size: 17px;
            font-weight: 600;
          }

          span {
            color: rgba(255, 255, 255, .33);
            font-size: 14px;
            font-weight: 500;
            padding-top: 8px;
          }
        }
      }
    }
  }
`;