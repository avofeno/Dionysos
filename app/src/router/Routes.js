import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WineCellar from '../components/WineCellar/WineCellar';
import NewBottle from '../components/NewBottle/NewBottle';
import ListAddedBottle from '../components/ListAddedBottle/ListAddedBottle';
import Dashboard from '../components/Dashboard/Dashboard';
import CreateCellar from '../components/CreateCellarAndZones/CreateCellar'
import CreateZones from '../components/CreateCellarAndZones/CreateZones';
import CreateCellarsAndZones from '../components/CreateCellarAndZones/CreateCellarAndZones';

function Routes(props) {
    return (
        // Switch: les Routes sont testés une par une, si et seulement si, l'url ne correspond pas
        // on passe a la route suivante.
        <Switch>
            {/* Sans l'attribut Exact, si l'url correspond a deux ..<Route>...</Route>, les deux composants seront chargés */}
            <Route exact path="/create_cellar_and_zones" component={CreateCellarsAndZones}/>
            <Route exact path="/create_cellar" component={CreateCellar}/>
            <Route exact path="/create_zones" component={CreateZones}/>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/cave" component={WineCellar}/>
            <Route exact path="/new_bottle" component={ NewBottle }/>
            <Route exact path="/liste" component={ListAddedBottle}/>  
        </Switch>
    )
}

export default Routes;