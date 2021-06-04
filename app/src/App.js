import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
// redux
import { Provider } from 'react-redux';
import store from './redux/store';
// on importe les actions qu'on souhaite déclencher dans le store
import { getAllBottles } from "./redux/ListBottlesCellar/listBottleCellar.action";

function App() {
 
  // C'est comme si on dit au store :"déclenche l'action getAllBottles()" 
  // automatiquement le store se remplit state={} ==> state={toutes les bouteilles mis à jour}
  // dès le lancement de l'appli, 
  // la liste des bouteilles sont accessibles c pour ça qu'on a mis  store.dispatch(getAllBottles());  ici
// il va mettre à jour le state du store et tous les composants qui sont abonnés à ce store
  store.dispatch(getAllBottles());
   
  return (
    <Provider store={store}>

      <div className="App">
        
        <BrowserRouter>
          <BurgerMenu/>
          <Routes />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
