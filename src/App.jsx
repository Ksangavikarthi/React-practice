import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Components/Welcome'
import Intro from './Components/ClassComp/intro'
import Diffmethodprops from './Components/ClassComp/Diffmethodprops'
import Exerciseprops from './Components/ClassComp/Exerciseprops'
import Datafetch from './Components/ClassComp/Datafetch'
import Birthday from './Components/ClassComp/Birthdaylist'
import Accorian from './Components/ClassComp/Accorian'
import Introfun from './Components/Functioncomp/introfun'
import Lifecycle from './Components/ClassComp/Lifecycle'
import Counterfun from './Components/Functioncomp/Counterfun'
import Birthdayfun from './Components/Functioncomp/Birthdayfun'
import Datafetchfun from './Components/Functioncomp/datafetchfun'
import Lifecycle1 from './Components/ClassComp/Lifecycle1'
import Lifecyclefun from './Components/Functioncomp/Lifecyclefun'
import Reactform from './Components/Functioncomp/Reactform'
import Reacthookform from './Components/Functioncomp/Reacthookform'
import YupValid from './Components/Functioncomp/YupValid'
import TodoListfun from './Components/Functioncomp/TodoListfun'
import Axiostodolistfun from './Components/Functioncomp/Axiostodolistfun'

function App() {
//   const [tr, settr] = useState(true)

//   const test = () => {
//     settr(false)
// }

 return (
    <>
    {/* <Welcome/> */}
    {/* <Intro title={'kavi'} /> */}
    {/* <Diffmethodprops  movie={'irugapatru'}/> */}
    {/* <Exerciseprops/> */}
    {/* <Datafetch/> */}
    {/* <Birthday/> */}
    {/* <Accorian/> */}
    {/* <Lifecycle/> */}
    {/* <Lifecycle1/> */}


    {/* <Introfun alter={'sasi is given props'}/> */}
    {/* <Counterfun moviename={'jailer'}/>
    <Counterfun moviename={'leo'}/> */}
    {/* <Birthdayfun/> */}
    {/* <Datafetchfun/> */}
    {/* <Reactform/> */}
    {/* <YupValid/> */}
    {/* <Reacthookform/> */}
    <TodoListfun/>
    {/* <Axiostodolistfun/> */}
    {/* {tr && <Lifecyclefun/>} 
    <button onClick={test}>click</button> */}
 
    </>
  )
}

export default App
