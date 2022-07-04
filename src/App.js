import React,{useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {FiSettings } from 'react-icons/fi';
import {TooltipComponent } from '@syncfusion/ej2-react-popups';


import{Navbar,Sidebar,
    Footer,ThemeSettings} from './components';
import {Ecommerce,Kanban,Orders,Employees,Editor,Customers,ColorPicker,Calendar,Area,
    Bar,ColorMapping,Financial,Line,Pie
    ,Pyramid,Stacked} from './pages'

import { useStateContext } from './contexs/ContextProvider';

import './App.css'

const App = ()=>
{
    const {activeMenu, themeSettings, setThemeSettings, currentColor } = useStateContext();
    // const activeMenu = true;
    return(
       <BrowserRouter>
       <div className="flex relative  dark:bg-main-dark-bg">

        {/* Settings icon */}
        <div className="fixed right-4 bottom-4" style={{zIndex:'1000'}} >
            <TooltipComponent 
            content="Settings" position="Top">
                <button 
                type="button"
                bgColor={currentColor}
                style={{ zIndex:1000, background:currentColor,
                borderRadius:'50%'}}
                onClick={()=> setThemeSettings(true)}
                className='text-3xl p-3 
                hover:drop-shadow-xl  text-white'
                >
                    <FiSettings/>
                </button>
            </TooltipComponent>
        </div>

        {/* Side bar */}
        {activeMenu ?
        
        (<div className="w-72 fixed sidebar 
        dark:bg-secondary-dark-bg bg-white"> 
        <Sidebar/>
         </div>
         ) : (
        <div className='w-0 dark:bg-secondary-dark-bg'>
             {/* <Sidebar/> */}
        </div>
        )}

        <div className={`bg-main-bg  dark:bg-main-bg min-h-screen w-full
         ${activeMenu ? 'md:ml-72' : 'flex-2'}`
        }>
                
                <div className="fixed md:static bg-main-bg
                navbar w-full">
                        <Navbar/>
                </div>
        

        <div>

            {themeSettings && <ThemeSettings />}
            <Routes>
                {/* DashBoard */}
                <Route path="/" element={ <Ecommerce />} />
                <Route path="/ecommerce" element={ <Ecommerce />} />
               
                {/* Pages */}
                <Route path="/orders" element={ <Orders />} />
                <Route path="/employees" element={ <Employees />} />
                <Route path="/customers" element={ <Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={ <Kanban />} />
                <Route path="/editor" element={ <Editor />} />
                <Route path="/calendar" element={ <Calendar />} />
                <Route path="/color-picker" element={ <ColorPicker />} />

                {/*Charts  */}
                <Route path="/line" element={ <Line />} />
                <Route path="/area" element={ <Area />} />
                <Route path="/bar" element={ <Bar />} />  
                <Route path="/pie" element={ <Pie />} />
                <Route path="/financial" element={ <Financial />} />
                <Route path="/color-mapping" element={ <ColorMapping />} />
            </Routes>
        </div>
        </div>
    </div>
       </BrowserRouter>
    )
}

export default App