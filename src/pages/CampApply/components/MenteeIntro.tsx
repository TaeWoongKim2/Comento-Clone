import React from 'react';

function MenteeIntro() {
  return (
    <div>
      <h1>MenteeIntro</h1>
      <h3>신청자 정보</h3>

      <label htmlFor="name">
        이름
        <input
          type="text"
          name="name"
          id="name"
          placeholder="코멘티"
        />
      </label>

      <label htmlFor="phone">
        연락처
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="010-1234-5678"
        />
      </label>

      <label htmlFor="email">
        이메일
        <input
          type="text"
          name="email"
          id="email"
          placeholder="colab@example.com"
        />
      </label>
    </div>
  );
}

export default MenteeIntro;
