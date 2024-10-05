import React from 'react'
import Main from './homeComponents/main'
import About from './homeComponents/about'
import Blog from './homeComponents/blog'
import Contact from './homeComponents/contact'

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