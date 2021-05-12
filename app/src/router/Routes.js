import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import WineCellar from '../components/WineCellar/WineCellar';
import NewBottle from '../components/NewBottle/NewBottle';

function Routes(props) {
    return (
        // Switch: les Routes sont testés une par une, si et seulement si, l'url ne correspond pas
        // on passe a la route suivante.
        <Switch>
            {/* Sans l'attribut Exact, si l'url correspond a deux ..<Route>...</Route>, les deux composants seront chargés */}
            <Route exact path="/" component={Landing}/>
            <Route exact path="/cave" component={WineCellar}/>
            <Route exact path="/new_bottle" component={ NewBottle }/>
        </Switch>
    )
}

export default Routes;