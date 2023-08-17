import React from 'react';
import './Statistics.css'; // 추가할 CSS 스타일 파일을 import
import statisticsImg from './statisticsImg.png';

function Statistics() {
  return (
    <div className="statistics-container">
      <div className="image-container">
        <img src={statisticsImg} alt="Statistics" className="statistics-image" />
      </div>
    </div>
  );
}

export default Statistics;
