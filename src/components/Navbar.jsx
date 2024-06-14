import React from 'react'

const Navbar = () => {
    const sections = ['home', 'about', 'shop', 'contact'];

    return (
        <div className='nav-container'>
            <div className='nav-sections'>
                {sections.map((section) => (
                    <h1 key={section}>{section}</h1>
                ))}
            </div>
        </div>
    )
}

export default Navbar;