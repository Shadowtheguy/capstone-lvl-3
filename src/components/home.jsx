import { useState } from 'react'

function Home() {
    return (
        <>
        <section className='container background-title'>
            <h1 className='pokefont-title text-center'>PokeMix!</h1>
        </section>
        <section className='container background-description'>
            <h2 className='text-center'>Welcome to the website</h2>
            <p className='text-center'>Hello! Here you can mix and match all kind of Pokemon types, Abilities, and Stats to make your ideal pokemon, or even roll random combinations for fantasy fun! And if you have a good idea yourself, or want to see what other people submit, just go down below and make your own! Have fun!</p>
            <p className='text-center small opacity-50'>This website was made as a Capstone Project for my online classes.</p>
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