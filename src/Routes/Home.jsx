
// import { Link } from 'react-router-dom'
// import { routes } from '../routes'
// import { useContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
// import css from '../index.css'
// import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const { dentists } = useContextGlobal() 
  console.log(dentists)

  return (
    
    <div>
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>{/* Aqui deberias renderizar las cards */}
        {dentists.map((dentis => <Card key={dentis.id} name={dentis.name} dentis={dentis}
        username={dentis.username} id={dentis.id}/>))}
  

</div>
        
    </main>
    </div>
  )
}

export default Home