import React, {Component} from "react";
import Personne from "./components/Personne/Personne"
import Horloge from "./containers/Horloge/Horloge"
import "./App.css"
import agePersonne from "./components/Personne/AgePersonne";


class App extends Component {

    state = {
        personnes: [
            {nom: "Lamine", age: 39, sexe: true},
            {nom: "Julie", age: 33, sexe: false},
            {nom: "Aya", age: 8, sexe: false},

        ]
    }

    anniversaireHandler = (numPersonne) => {

        const newPersonne = {...this.state.personnes[numPersonne]};  // génère une copie de la personne sur laquel on a cliqué
        newPersonne.age++;                                          // on augmente l'age de la personne copiée

        const newTable = [...this.state.personnes]; // on duplique le tableaude personnes
        newTable[numPersonne] = newPersonne;       // on remplace la personne a l'indice du tableau sur lequel on a cliqué
        this.setState({personnes : newTable});  //on remplace dans le state le tableau de personnes par le nouveau newTable

        //alert(numPersonne);
        // sans la fonction slice() newPersonnes sera un pointeur vers personnes
        //avec slice() c'est une copie
        //const newPersonnes = this.state.personnes.map(personne => {

        //    return {
        //        nom: personne.nom,
        //        age: personne.age++,
        //        sexe: personne.sexe

        //     };
        // })
        //   for (let i = 0; i < newPersonnes.length; i++){
        //    newPersonnes[i].age ++;
        // }

        //newPersonnes[0].age ++;
        //newPersonnes[1].age ++;
        //newPersonnes[2].age ++;

        //this.setState({newPersonnes});
    }

    render() {
        return (
            <>
                <button onClick={this.anniversaireHandler}> Anniversaire</button>
                <Horloge/>
                <Personne {...this.state.personnes[0]} clic={() => this.anniversaireHandler(0)}/>
                <Personne {...this.state.personnes[1]} clic={this.anniversaireHandler.bind(this, 1)}/>
                <Personne nom={this.state.personnes[2].nom} age={this.state.personnes[2].age}
                          sexe={this.state.personnes[2].sexe} clic={() => this.anniversaireHandler(2)}/>
            </>

        );
    }

}

export default App;