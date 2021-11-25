import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useCustomHooks } from './context';

const Home = () => {
  const { openModal, openSidebar } = useCustomHooks();
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        Show modal
      </button>
    </main>
  );
};

export default Home;
