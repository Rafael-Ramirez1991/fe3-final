
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import { useContextGlobal } from './utils/global.context'
import { useState } from 'react'




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const condicionalFav = localStorage.getItem("favs")

  const [showFav, setShowFav] = useState( condicionalFav )

  const {themeState, themeDispatch } = useContextGlobal()

  // console.log(themeDispatch)
  // console.log(themeState)

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type:'LIGHT'})
    }else{
      themeDispatch({type:'DARK'})
    }
  }
  

  return (
    <nav>
      <Link style={{color: themeState.color}} to={routes.home}><h3>Home</h3></Link>
      {/* <Link style={{color: themeState.color}} to={routes.details}><h3>Detail</h3></Link> */}
      <Link style={{color: themeState.color}} to={routes.contact}><h3>Contact</h3></Link>
      {showFav && <Link style={{color: themeState.color}} to={routes.favs}><h3>Favs</h3></Link>}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      <button className='botonTheme' onClick={switchTheme}>{themeState.theme ? '☀️'  : '🌘'}</button>
      
    </nav>

  )
}

export default Navbar