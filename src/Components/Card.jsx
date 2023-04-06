import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import Button from '@mui/material/Button';



const Card = ({ name, username, id, dentis }) => { 

  // const { dentists } = useContextGlobal ( ) 
  console.log(dentis.id)



  // const [favs, setFav]= useState([])

  

  // let favs = localStorage.getItem('favs');
  // console.log(favs)


  const addFav = ()=>{
    
  }
  //   if(favs){
  //     let parseFavs = JSON.parse(favs)
  //     favs = [...parseFavs, dentists]
  //   }else {
  //     favs = []
  //   }
  //   localStorage.setItem('favs', JSON.stringify(favs))
  // Aqui iria la logica para agregar la Card en el localStorage
  // const [poke, setPoke] = useState({})
 

  

  // localStorage.setItem("fav",  )

    

  return(

    <div className="card" key={id} >
    <h4 >{name}</h4>
    <h4 >{username}</h4>
    <h4>{id}</h4>
    <Link to={`/details/${id}`}><h4 style={{color: 'red'}}>Detail</h4></Link>
    


    <Button onClick={addFav} variant="contained" size="small">
    Add fav
        </Button>
    </div>
 
  )
}
export default Card;
  

// } )}

  
 
    
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
       

 



