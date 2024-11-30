import data from './data.js'
import AnimalCard from '../AnimalCard/AnimalCard.js'
import './App.css';

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
  .map(information => `${information[0]}: ${information[1]}`)
  .join('\n')

  alert(alertInformation)
}

function App() {
  return (
  <div className="wrapper">
    {
      data.map(animal => {
        return (<AnimalCard
          additional={animal.additional}
          diet={animal.diet} 
          key={animal.name} 
          name={animal.name}
          scientificName={animal.scientificName}
          showAdditional={showAdditional}
          size={animal.size}
        />)

      }) 
    }
  </div>
  )
}

export default App;

