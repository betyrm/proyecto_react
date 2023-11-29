import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'

import { Character } from './componentes/Character/Character.jsx'

function App() {
    //utilizo useState y le asigno un arreglo vacío
    const [posts, setPosts] = useState([]);

    //utilizo fetch para solicitar la api
    
    //use .then para convertir los datos de formato json  a objeto
    //para poder leerlos con map

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            setPosts(data.results)
            
        })      
        
        .catch(error => {
            console.error('error al obtener los datos: ',error)
        })
    }, [])


    return (
        <>
            <section>
                <div className='container'>
                    
                    <Character characters={posts}/>
                </div>
            </section> 
        </>
    )
}

export { App }