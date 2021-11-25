import React from 'react';
import Home from './home';
import Modal from './modal';
import Sidebar from './sidebar';
import { useCustomHooks } from './context';

function App() {
  const data = useCustomHooks();
  console.log(data);
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;
