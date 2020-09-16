import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <div className="video-content">
          <video className="player" controls>
            <source src="assets/videos/video-demo.mp4"/>
          </video>
          <div className="video-description">
            <div className="description-header">
              <div className="video-user">
                <img src="assets/images/user-1.png" className="video-user-picture" alt="User"/>
                <div className="video-user-data">
                  <strong>Vipassana Yoga</strong>
                  <p>AULA - Juliana Goes</p>
                </div>
              </div>
              <span className="video-badge">Yoga</span>
            </div>
            <div className="description-body">
              <p className="description-content">
                Nesta meditação vamos buscar a purificação trabalhando a respiração por meio do foco e auto-observação.
              </p>
              <button className="description-action"></button>
            </div>
          </div>
        </div>

        <div className="schedule">
          <p className="title">Programação de Hoje</p>
          <div className="schedule-content">
            <div className="time-line">
              <div className="time-line-top">
                <span>07:30</span>
                <div className="line"></div>
              </div>
              <div className="time-line-content">
                <p className="item-title">Vipassana Yoga - Ao vivo</p>
                <span>07:30 ~ 08:30</span>
              </div>
            </div>
            <div className="time-line">
              <div className="time-line-top">
                <span>07:30</span>
                <div className="line"></div>
              </div>
            </div>
            <div className="time-line">
              <div className="time-line-top">
                <span>07:30</span>
                <div className="line"></div>
              </div>
              <div className="time-line-content gray">
                <p className="item-title">Vipassana Yoga - Reprise</p>
                <span>07:30 ~ 08:30</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
