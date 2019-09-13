import React from 'react';
import ReactDOM from 'react-dom';

const LoginModal = props => {
  return ReactDOM.createPortal(
    <div style={{
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.3)',
    }}>
      {props.children}
        
    </div>,
    document.querySelector('#login')
  );
};

export default LoginModal;