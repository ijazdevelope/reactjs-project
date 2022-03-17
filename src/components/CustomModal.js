import React from 'react';
import './CustomModal.css';

const CustomModal = ({ openModal, closeModal, children }) => {
    // console.log(closeModal, 'closeModal in customModal.js')
    return <>
        {openModal && (
            <div className='modalWrapper' onClick={closeModal}>
                <div className='modalContentWrapper rounded-lg' onClick={e => e.stopPropagation()}>
                    {children}

                    <button onClick={closeModal} className='position-absolute bg-transparent shadow-none close-btn' >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                </div>

            </div>
        )}
    </>;
}

export default CustomModal;
