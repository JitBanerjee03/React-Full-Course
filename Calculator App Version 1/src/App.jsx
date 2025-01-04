import styles from './App.module.css'
import ButtonComponent from './Components/ButtonComponent'
import DisplayComponent from './Components/DisplayComponent'
function App() {

  return (
    <>
    <div className={`${styles.outerDiv}`}>
    <DisplayComponent></DisplayComponent>
    <ButtonComponent></ButtonComponent>
    </div>
    </>
  )
}

export default App
