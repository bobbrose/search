import React, { useState } from 'react';
import Modal from 'react-modal';

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
            <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
                <h2>Searchy</h2>
                <p>A simple search interface prepared for <a href="https://you.com">You.com</a> by <a href="https://bobbrose.com">Bob Rose</a>.</p>
                <button onClick={handleCloseModal}>Close</button>
            </Modal>
        </div>
    );
};

export default AboutBox;
