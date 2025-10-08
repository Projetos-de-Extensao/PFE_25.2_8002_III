import React from 'react';

const Header = () => {
    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        boxSizing: 'border-box',
        background: '#282c34',
        padding: '1rem 2rem',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1000
    };

    return (
        <header style={headerStyle}>
            <h1 style={{ margin: 0, fontSize: '2rem' }}>Portal Monitor</h1>
            <nav>
                <a href="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '1rem' }}>Home</a>
                <a href="/about" style={{ color: '#fff', textDecoration: 'none', marginRight: '1rem' }}>About</a>
                <a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
            </nav>
        </header>
    );
};

export default Header;