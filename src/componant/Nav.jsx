import React from 'react'

const Nav = () => {
    const h1Style = {
        fontSize: '25px',
        fontWeight: 'semibold',
        color: 'darkgreen', 
        textAlign: 'center',
    };
    const sStyle = {
        display: 'flex',
    };
    const navStyle = {
        fontSize: '20px',
        color: 'darkblue',
        textAlign: 'center',
    };
    const tStyle = {
        display: 'flex',
        gap: '40px',
    }; 
    const buttonStyle = {
        fontSize: '20px',
        color: 'darkblue',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    };
    

    return (
        <div style={sStyle}>
            <h1 style={h1Style}>
                Rivo
            </h1>
            <div style={tStyle}>
                <h2 style={navStyle}>
                    HOME
                </h2>
                <h2 style={navStyle}>
                    SHOP
                </h2>
                <h2 style={navStyle}>
                    FEATURES
                </h2>
                <h2 style={navStyle}>
                    CONTACT
                </h2>
            </div>
            <button style={buttonStyle}>
                Log In
            </button>
        </div>
    )
}

export default Nav