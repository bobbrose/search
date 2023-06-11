import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      width: '500px', 
      height: '200px',
      margin: 'auto',
    },
  };
  
// Show a react modal about box with some info about the author and purpose.
const AboutBox = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>About</button>
            <Modal isOpen={isOpen} onRequestClose={handleCloseModal} style={customStyles} >
                <h2>Searchy</h2>
                <p>A simple search interface for wikipedida. <a href="https://bobbrose.com">Bob Rose</a></p>
                <button onClick={handleCloseModal}>Close</button>
            </Modal>
        </div>
    );
};

export default AboutBox;
