import React from 'react';
import './Search.css';

// const handleChange = (event) => {
//     setName(event.target.value);
//   };

//  const filteredCharacters = filterCharacters(characters, name);
//  function filterCharacters(characters, name) {
//     return characters.filter((character) => {
//       return character.name.toLowerCase().includes(name.toLowerCase());
//     });
//   }

//   return (
//     <div className='buscador'>
//         <form className='seccion_buscador'>
//             <input
//                 type="text"
//                 placeholder="Buscar personaje"
//                 value={name}
//                 onChange={handleChange}
//             />
//         </form>
//             <ul>
//                 {filteredCharacters.map((character) => (
//                 <li key={character.id}>{character.name}</li>
//                 ))}
//             </ul>
//     </div>
//   );

 function Search() {

    return (
        <>
            <section>
                <div>
                    <form className='seccion_buscador'>
                        <input type='text' placeholder='Ingrese nombre del personaje'></input>
                        <button type='submit'>Buscar</button>
                    </form>
                    <hr />
                </div>
            </section> 
            
        </>

    )

}
export { Search }