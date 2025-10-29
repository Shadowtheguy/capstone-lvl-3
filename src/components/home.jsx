import { useState } from 'react'

function Home() {
    return (
        <>
        <section className='container background-title'>
            <h1 className='pokefont-title text-center'>PokeMix!</h1>
        </section>
        <section className='container background-description text-white'>
            <h2 className='text-center'>Welcome to the website</h2>
            <p className='text-center'>Hello! Here you can mix and match all kind of Pokemon types, Abilities, and Stats to make your ideal pokemon, or even roll random combinations for fantasy fun! And if you have a good idea yourself, or want to see what other people submit, just go down below and make your own! Have fun!</p>
            <p className='text-center small opacity-50'>This website was made as a Capstone Project for my online classes.</p>
        </section>
        <section className='container background-mixes'>
            <div className='row'>
                <div className='col-5'>
                    <h4 className='pokefont-mixes text-center'>Pokemix 1</h4>
                    <p>placeholder</p>
                </div>
                <div className='col-2'>
                    <h2 className='pokefont-mixes text-center'>VS</h2>
                </div>
                <div className='col-5'>
                    <h4 className='pokefont-mixes text-center'>Pokemix 2</h4>
                    <p>placeholder</p>
                </div>
            </div>
        </section>
        <section className='container background-submit'>
            <h1 className='text-center'>Make Your Own Here!</h1>
            <p className='text-center'>Here you can submit your own ideas! Just click the button below and the form should pop up, fill it out then BAM! Your idea will be added and in the pool for selection if people turn on custom ideas!</p>
            <button className='btn btn-success mx-auto d-grid'>Click Here To Add Custom Ideas!</button>
        </section>
        </>
    )
}

export default Home