import { useState } from 'react'

function Home() {
    return (
        <>
        <section>
            <h1 className='pokefont-title text-center'>PokeMix!</h1>
        </section>
        <section>
            <h2>Welcome to the website</h2>
            <p>This is a description of the website and what you can do here</p>
        </section>
        <section>
            <div className='row'>
                <div className='col-5'>
                    <h4>Pokemix 1</h4>
                </div>
                <div className='col-2'>
                    <h2>VS</h2>
                </div>
                <div className='col-5'>
                    <h4>Pokemix 2</h4>
                </div>
            </div>
        </section>
        <section>
            <h1>Make Your Own Here!</h1>
            <p>Description leading to a form to fill out either on another page or as a pop up</p>
        </section>
        </>
    )
}

export default Home