
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const { dentists } = useContextGlobal() 
  console.log(dentists)

  return (
    
    <div>
    <main className="" >
      <h1></h1>
      <div className='card-grid'>{/* Aqui deberias renderizar las cards */}
        {dentists.map((dentis => <Card key={dentis.id} name={dentis.name} dentis={dentis}
        username={dentis.username} id={dentis.id}/>))}
  

</div>
        
    </main>
    </div>
  )
}

export default Home