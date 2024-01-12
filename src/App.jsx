import { Suspense, lazy, useState } from 'react'
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
import Propsdrilling from './Components/Functioncomp/Propsdrilling'
import CustomUSeFetch from './Components/Functioncomp/CustomUseFetch'
import CustomUSeFetch1 from './Components/Functioncomp/CustomUseFetch1'
import ErrorBoundary from './Components/ClassComp/ErrorBoundary'
import ReactRouter from './Components/Functioncomp/ReactRouter'
import ReactRouter1 from './Components/Functioncomp/ReactRouter1'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import DynamicImport from './Components/Functioncomp/DynamicImport'
import { withfetchapi } from './Components/Functioncomp/Hoc/withfetchapi'
import Datahoc from './Components/Functioncomp/Hoc/Datahoc'
import CounterProvider from './Components/ContextApi/CounterProvider/CounterProvider'
import HomeProvide from './Components/Functioncomp/HomeProvide'
import ProductProvide from './Components/Functioncomp/ProductProvide'


const Datalist=withfetchapi(Datahoc,'https://jsonplaceholder.typicode.com/todos/1')

//-----------------Lazy loading--------

// const ReactRouter=lazy(()=>import('./Components/Functioncomp/ReactRouter'))
// const ReactRouter1=lazy(()=>import('./Components/Functioncomp/ReactRouter1'))

function App() {
//   const [tr, settr] = useState(true)

//   const test = () => {
//     settr(false)
// }

 return (
    <>

<ErrorBoundary>
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
 
       {/* <CustomUSeFetch />
        <CustomUSeFetch1 /> */}
        {/* <DynamicImport/> */}
{/* <Reducercomp/> */}
{/* <Datalist/> */}

{/* <CounterProvider>
    <HomeProvide/>
    <ProductProvide/>
</CounterProvider> */}



      

{/* <Suspense fallback={ <h1>loading......</h1>  }>
<BrowserRouter>
<ul>
  <li> <Link to='/ReactRouter/4'>ReactRouter</Link> </li>
  <li>  <Link to='/ReactRouter1'>ReactRouter1</Link></li>
</ul>

<Routes>
  <Route path='/ReactRouter/:id' element={<ReactRouter/>}/>
  <Route path='/ReactRouter1' element={<ReactRouter1/>}/>
</Routes>
</BrowserRouter>
</Suspense> */}
      
</ErrorBoundary>

    {/* <Propsdrilling/> */}



 
    </>
  )
}

export default App
