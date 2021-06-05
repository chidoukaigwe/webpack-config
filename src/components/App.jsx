import "../styles/index.scss"
import Recipes from "./Recipes"
//  bring in png
import passport from "../images/image1.jpg"
//  bring in svg
import imagesvg from "../images/facebook-logo.svg"


import React from 'react'

const App = () => {
    return (
        <>
            <section className="hero"> </section>
                <main>
                    <section>
                        <h1>Oh Hi React</h1>
                    </section>
                    <img src={passport} alt="passport" width="250"/>
                    <img src={imagesvg} alt="passport" width="250"/>
                    <Recipes/>
                </main>
        </>
    )
}

export default App
