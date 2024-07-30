import React from 'react';


const Footer = () => {

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Скопировано: ' + text);
      })
      .catch(err => {
        console.error('Ошибка при копировании: ', err);
      });
  };
  return (
    <>
       <div className='footer'>
        <div className='footer-text normal-text'>Message me</div>
        <div 
        className='contact-email' 
        onClick={() => handleCopy('napolitano.polina@gmail.com')}
        style={{ cursor: 'pointer' }}
      >
        napolitano.polina@gmail.com
      </div>
      <div 
        className='contact-phone' 
        onClick={() => handleCopy('89017473384')}
        style={{ cursor: 'pointer' }}
      >
        89017473384
      </div>
      <div className='copyright'>© Copyright 2024. Made by Polina N.</div>
       </div>
    </>
  );
};

export default Footer;