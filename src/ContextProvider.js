import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  // 여기에 필요한 상태 및 함수들을 정의합니다.
  const [someValue, setSomeValue] = useState('');

  return (
    <MyContext.Provider value={{ someValue, setSomeValue }}>
      {children}
    </MyContext.Provider>
  );
};
