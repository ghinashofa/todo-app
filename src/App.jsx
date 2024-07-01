import './App.css'
import { TodoWrapper } from './components/TodoWrapper'
import NavigationBar from './components/NavigationBar'

function App() {
  

  return (
    <>
    <NavigationBar />
      <div style={{textAlign:"center", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"90vh"}}>
        <div style={{
            display:"flex",  
            justifyContent:"center", 
            alignItems:"center", 
            padding:"24px", 
            border:"1px solid #E7FE54",
            borderRadius:"12px",
            marginBottom:"30px",
            gap:"32px"
        }}>
          <div style={{textAlign:"left", color:"white"}}>
            <h2 style={{marginBottom:"6px"}}>Todo Done</h2>
            <p>A simple todo app <br /> built with React</p>
          </div>
          <div className='circle'>
            <h1>1/3</h1>
          </div>
        </div>
        <TodoWrapper />
      </div>
    </>
  )
}

export default App
