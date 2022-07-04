import React from 'react'

import{Link, NavLink } from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent} from '@syncfusion/ej2-react-popups'

import {links} from '../data/dummy';

import { itemsToOrder } from '@syncfusion/ej2/treemap';

import { useStateContext } from '../contexs/ContextProvider';


function Sidebar() {

  const{activeMenu, setActiveMenu,screenSize} = useStateContext();
  // const activeMenu=true;
  const handleCloseSideBar = ()=>{
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }
  const activeLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-black text-md m-2';

  const normalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

 
  return (

      <div className='ml-3 h-screen
      md:overflow-hidden overflow-auto
      md:hover:overflow-auto pb-10'>
        {activeMenu && (<>

        {/* logo */}
        <div className='flex justify-between items-center'>
          <Link to="/ " onClick={()=> setActiveMenu(false)}
          className="items-center flex gap-3 ml-3 mt-4 text-xl font-extrabold
          tracking-tight dark:text-white text-slate-9000">
              <SiShopware /> <span>Shoppy</span>
          </Link>
          
          {/* cancel button */}
        <TooltipComponent content="Menu" position="BottomCenter">
          <button 
          type="button" 
          onClick={()=> setActiveMenu((prevActiveMenu)=>!prevActiveMenu) }
          className="text-xl rounded-full p-3 
          hover:bg-light-gray mt-4 block">
            <MdOutlineCancel/>
          </button>
        </TooltipComponent>

        </div>
        
        {/* menu items */}
        <div className='mt-10'>
          
          {links.map((item) => (
            <div 
            className='text-gray-400 m-3 uppercase'
            key={item.title}> 
            <p>
            {item.title}
            </p>
            {item.links.map((link) =>(
              <NavLink 
              to={`/${link.name}`}
              key={link.name}
              onClick={handleCloseSideBar}
              className={({isActive}) =>
                isActive ? activeLink : normalLink}
              >
                {link.icon}
                <span className="capitalize">
                  {link.name}
                </span>
              </NavLink>
            ))}
             </div>
          ))}
        </div>
        </>)
        }
      </div>
  )
}

export default Sidebar