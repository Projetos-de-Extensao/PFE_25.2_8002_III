import React from 'react';

const Footer = () => (
    <footer style={{
        background: '#222',
        color: '#fff',
        padding: '1rem 0',
        textAlign: 'center',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
    }}>
        <div>
            &copy; {new Date().getFullYear()} Portal Monitor. All rights reserved.
        </div>
    </footer>
);

export default Footer;