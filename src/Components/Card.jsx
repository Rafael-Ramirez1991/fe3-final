import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import doctor from "../images/doctor.jpg";

const Card = ({ name, username, id }) => {
  const [dentistState, setDentistState] = useState({});
  const [isFavorited, setIsFavorited] = useState(false);
  const navegar = useNavigate()

  const url = 'https://jsonplaceholder.typicode.com/users/' + id;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setDentistState(data))
  }, [])

  const addFav = () => {
    setIsFavorited(prev => !prev);
    const favs = JSON.parse(localStorage.getItem('favs')) || [];

    const existingFav = favs.findIndex(fav => fav.id === dentistState.id);
    
    if (existingFav === -1) {
      const newFavs = [...favs, dentistState];
      localStorage.setItem('favs', JSON.stringify(newFavs));
    } else {
      const newFavs = favs.filter((fav) => fav.id !== dentistState.id);
      localStorage.setItem('favs', JSON.stringify(newFavs));
    }
  }

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const existingFav = favs.findIndex(fav => fav.id === id);
    if (existingFav !== -1) {
      setIsFavorited(true);
    }
  }, [id])
  const remover  = 'Remove from Favorites'
  const agg = 'Add to Favorites'

  return (
    <div  className="card" >
    <div  className="intCard" key={id} onClick={()=> navegar(`/details/${id}`)}>
      {isFavorited && <p className="fav" >★</p>}
      <img className="imagen" src={doctor} alt="doctor"  />
      <h4>{name}</h4>
      <h4>{username}</h4>
      <h4>{id}</h4>
    </div> 
    <button onClick={addFav} className="favButton">
        {isFavorited ? remover  :  agg }
      </button>
    
    </div>
  );
}

export default Card;