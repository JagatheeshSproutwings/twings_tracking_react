import React from 'react';
import './App.css';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import MenuPage from './components/menu';


function App() {
  return (
    <div>
      <StyleProvider>
      <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      <MenuPage/>
      </ConfigProvider>
      </StyleProvider>
    </div>
    );
}

export default App;
