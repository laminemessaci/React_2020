import React, {Component} from "react";
import Personne from "./components/Personne/Personne"
import Horloge from "./containers/Horloge/Horloge"
import "./App.css"


class App extends Component {

    state = {
        personnes :[
            {nom: "Lamine", age: 39, sexe: true},
            {nom: "Julie", age: 33, sexe: false},
            {nom: "Aya", age: 8, sexe: false},

        ]
    }


    render() {
        return (
            <>
                <Horloge />
                <Personne {...this.state.personnes[0]} />
                <Personne {...this.state.personnes[1]} />
                <Personne nom= {this.state.personnes[2].nom} age = {this.state.personnes[2].age } sexe ={this.state.personnes[2].sexe}/>
            </>

        );
    }

}

export default App;