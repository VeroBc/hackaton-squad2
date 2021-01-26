import React, { useState } from 'react';
import { Category } from './category';
// import { Delivered } from './delivered';
// import { subscribeDelivery } from '../services/backend'; 
import '../App.css';

export const Home = () => {

  const [currentCategory, setCurrentcategory] = useState('maquillaje');
  // const [menuView, setMenuView] = useState('orderView');
  // const [deliveryList, setDeliveryList] = useState([]);

  // const selectMenuView = () => 
  // setMenuView( menuView === 'deliveredView' ? 'orderView' : 'deliveredView');

  // useEffect(() => subscribeDelivery(setDeliveryList), []) 
 
  return (
    <div>
      <section >
        <div className='subheader'>
          <h1 className='filters'>
            <a href="#" onClick={()=> setCurrentcategory('maquillaje')}>Maquillaje</a>
            <a href="#" onClick={()=> setCurrentcategory('fragancias')}>Fragancias</a>
            <a href="#" onClick={()=> setCurrentcategory('accesorios cosméticos')}>Accesorios cosméticos</a>
            <a href="#" onClick={()=> setCurrentcategory('cuidado personal')}>Cuidado personal</a>
            <a href="#" onClick={()=> setCurrentcategory('tratamiento corporal')}>Tratamiento corporal</a>
            <a href="#" onClick={()=> setCurrentcategory('tratamiento facial')}>Tratamiento facial</a>
          </h1>
          {/* <h1 className='notifications' onClick={selectMenuView}>{ menuView === 'deliveredView' ? <div><FontAwesomeIcon className ='icon' icon={faBell}/></div> : <div><FontAwesomeIcon className ='icon' icon={faBell}/> <div className ='quantity'>{deliveryList.length}</div> </div>}</h1> */}
        </div>
        <div>
       
          <Category categoryType={currentCategory}/>
      

        {/* { menuView === 'deliveredView' &&
          <Delivered orderToDeliver={deliveryList}/>
        }
           */}
        </div>
      </section>
    </div>
  );
}