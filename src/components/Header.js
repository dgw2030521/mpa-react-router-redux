import React from 'react';

const styles = {
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
  },
  nav: {
    display: 'flex',
    justifyContent: 'center' 
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex' 
  },
  li: {
    margin: '0 15px' 
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',
    transition: 'color 0.3s ease' 
  },
  aHover: {
    color: '#ff9900' 
  }
};

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <a href="/" style={styles.a} onMouseEnter={(e) => e.target.style.color = styles.aHover.color} onMouseLeave={(e) => e.target.style.color = styles.a.color}>Home</a>
          </li>
          <li style={styles.li}>
            <a href="/about" style={styles.a} onMouseEnter={(e) => e.target.style.color = styles.aHover.color} onMouseLeave={(e) => e.target.style.color = styles.a.color}>About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;