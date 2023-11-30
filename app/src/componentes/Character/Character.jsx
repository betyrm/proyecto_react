import React from 'react'
import './Character.css'


// const Character = ({characters}) => {    
//     return (
//        <>
       
//             <div className="row">
              
//                 {
                    
//                   characters.map((item, index) => (
//                       <div key={id} className="col">
//                         <div className="card" style={{width: '18rem'}}>
//                             <img src={item.image} class="card-img-top" alt='' />
//                             <div className='card-baby'>
//                                 <h5 class="card-title">{item.name}</h5>
//                                  <p class="card-text">species: {item.species}</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                        </div>
//                   ))
//                   }
//             </div>
//      </> 
      
//     )
// }
// export { Character }

 const Character = ({ personaje }) => {
	
	if (personaje.lenght === 0) return 
		<p>No encontro personaje</p>
	
	return (
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
	)
}
export  { Character }