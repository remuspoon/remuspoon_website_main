import React from 'react'
import Main from './components/(home)/main'
import About from './components/(home)/about'
import Blog from './components/(home)/blog'
import Contact from './components/(home)/contact'

const Home = () => {
    return (
        <div>
            <Main />
            <Blog />
            <About />
            <Contact />
        </div>
    )
}

export default Home