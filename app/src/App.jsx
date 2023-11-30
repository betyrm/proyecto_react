import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'

// import { Character } from './componentes/Character/Character.jsx'
import { Search } from './componentes/Search/Search.jsx'

function App() {
    //utilizo useState y le asigno un arreglo vacío
    const [personaje, setPersonaje] = useState([]);
    const [loading, setLoading] = useState(true)
	const [filter, setFilter] = useState('')
    //utilizo fetch para solicitar la api
    
    //use .then para convertir los datos de formato json  a objeto
    //para poder leerlos con map

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            setPersonaje(data.results)
            
        })      
        
        .catch(error => {
            console.error('error al obtener los datos: ',error)
        })
    }, [])

    const personjesFiltrados = personaje.filter((personaje) =>
		personaje.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        
	)

    return (
        <>
        <div>
			
			
			<Search filter={filter} setFilter={setFilter} />
            {/* <Character key={personaje.id} personaje={personaje} /> */}
			<section>
				{/* {loading ? (
					<p>Cargando...</p>
				) : personjesFiltrados.length > 0 ? ( */}
					{personjesFiltrados.map((personaje) => (
						
                        <section className='personaje'>
                        <div className='personaje-header'>
                            <div className='estado'>
                                <span className={personaje.status}></span>
                                <h4>{personaje.status}</h4>
                            </div>
                        </div>
            
                        <div className='personaje-body'>
                            <figure>
                                <img src={personaje.image} alt={personaje.name} />
                            </figure>
            
                            <h2>{personaje.name}</h2>
                            <p>
                                {personaje.species} <span>-</span> {personaje.gender}
                            </p>
                        </div>
                        </section>
					))}
				{/* ) : (
					<p>
						No se encontro personajes con la busqueda{' '}
						<strong>"{filter}"</strong>.
					</p>
				)} */}
			</section>
			
		</div>
            
        </>
    )
}

export { App }