
import doctor from "../images/doctor.jpg"
import { useNavigate } from "react-router-dom";







//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context






const Favs = () => {
  let favs = localStorage.getItem('favs')
  let parsedFavs = JSON.parse(favs)
  
  

  const navegar = useNavigate()

  const borrar = () => {
    localStorage.removeItem('favs')
    navegar('/')
    
    }


  
  return (
    <>
      <h1>Dentists Favs</h1>
       

      <div className="card-grid">
      
      
      
      {parsedFavs.map(dentis => (
          <div className="cardFav">
            
           <div className="card" key={dentis.id} onClick={()=> navegar(`/details/${dentis.id}`) }>
            <img className="imagen" src={doctor} alt="doctor" />
           <h2>{dentis.id}</h2>
           <h2>{dentis.name}</h2>
           <h2>{dentis.username}</h2>
           
             
      </div>
     
      
      </div>
            
       ))}


        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      {/* </div> */}
      
      </div> 
      <div className="contEliminar"> 
        <button className="eliminarFav" onClick={borrar}>Eliminar Favoritos</button>
      </div>
    
    </>
  );
};

export default Favs;
