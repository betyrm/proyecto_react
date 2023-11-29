import React from 'react'
import './Character.css'


const Character = ({characters}) => {    
    return (
       <>
       
            <div className="row">
              
                {
                    
                  characters.map((item, index) => (
                      <div key={index} className="col">
                        <div className="card" style="width: 18rem">
                            <img src={item.image} class="card-img-top" alt='' />
                            <div className='card-baby'>
                                <h5 class="card-title">{item.name}</h5>
                             
                                <p class="card-text">location: {item.location.name}</p>
                                <p class="card-text">species: {item.species}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                       </div>
                  ))
                  }
            </div>
     </> 
      
    )
}
export { Character }