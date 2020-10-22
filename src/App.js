import React, {Component} from "react";
import Personne from "./components/Personne/Personne"
import Horloge from "./containers/Horloge/Horloge"
import "./App.css"


class App extends Component {
    render() {
        return (
            <>
                <Horloge />
                <Personne nom="Lamine" age = "40" sexe ="Homme" />
                <Personne nom= "aya" age = "7" sexe ="Femme"/>
                <Personne nom="julie" age = "30" sexe ="Femme"/>
            </>

        );
    }

}

export default App;