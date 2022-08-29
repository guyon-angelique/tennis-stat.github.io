import {useState, useEffect} from 'react'
import '../Styles/Main.css'

function NotLog({log, setLog}) {
    // enregistrer l'identification de l'utilisateur
    const[inputValueName, setInputValueName] = useState('')

    function validerCompte() {
        localStorage.setItem('name', JSON.stringify(inputValueName))
        setLog(...[inputValueName])
    }

    return (
        <div className="not-log">
            <div className="contenu">
                <p>Bienvenue sur TenniStat<br/>
                Enregistrez-vous pour découvrir nos services.</p>
                <div className="valid">
                    <input
                    className="input-log"
                    placeholder="Entrez votre nom"
                    value={inputValueName}
                    onChange={(e)=>setInputValueName(e.target.value)}></input>

                    <button className="button-log" onClick={()=>validerCompte()}>Valider</button>
                </div>
            </div>

        </div>
    )
}
export default NotLog