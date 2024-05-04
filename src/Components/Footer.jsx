import React from 'react'

function Footer() {
    return (
        <div className='footer'>
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center', marginTop:'530vh'}}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ marginBottom: '10px' }}>&copy; 2024 Your News App</p>
                <p>All rights reserved</p>
            </div>
        </footer>
        </div>

    )
}

export default Footer
