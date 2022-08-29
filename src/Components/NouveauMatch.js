import {useState} from 'react'
import Compteur from './Compteur'
import '../Styles/NouveauMatch.css'
import NotLog from './NotLog'

function NouveauMatch() {

    //verifier si utilisateur deja identifie
    const verifLog=localStorage.getItem('name')
    //state utilisateur, si deja identifié extraire données du localStorage
    const[log, setLog] = useState(verifLog ? JSON.parse(verifLog) : '')

    //vérifier si un match est en cours
    const verif = JSON.parse(localStorage.getItem('compteurScore'))
    const[match, setMatch] =useState(verif ? true : false)

    //enregistrer données de l'adversaire
    const[inputValueAdversaire, setAdversaire]=useState('')
    
    function debutMatch() {
        //mettre a jour les données de l'adversaire
        setAdversaire(inputValueAdversaire)
        //enregistrer score et stats à 0 dans localStorage pour un nouveau match
        const initCompteurScore=[
        {name:log,set:0, jeu:0, point:0 },
        {name:inputValueAdversaire,set:0, jeu:0, point:0}
        ]
        localStorage.setItem('compteurScore', JSON.stringify(initCompteurScore))
        
        const initCompteurStatGagnant=[
        {name:log, ace:0, coupDroitGagnant:0,reversGagnant:0},
        {name:inputValueAdversaire, ace:0, coupDroitGagnant:0,reversGagnant:0}
        ]
        localStorage.setItem('compteurStatGagnant', JSON.stringify(initCompteurStatGagnant))
        
        const initCompteurStatFaute=[
            {name:log,double:0,fauteCoupDroit:0, fauteRevers:0},
            {name:inputValueAdversaire,double:0,fauteCoupDroit:0, fauteRevers:0}
            ]
        localStorage.setItem('compteurStatFaute', JSON.stringify(initCompteurStatFaute))
        
        const initScoreMatch = [{name:log, set1:'', set2:'', set3:''},{name:inputValueAdversaire, set1:'', set2:'', set3:''}]
        localStorage.setItem('matchScore', JSON.stringify(initScoreMatch))
        
        const initStatsService = [{type:'nbService', name:log, amount:0}, {type:'nbService',name:inputValueAdversaire, amount:0},
        {type:'ace1erService', name:log, amount:0}, {type:'ace1erService', name:inputValueAdversaire, amount:0},
        {type:'faute1erService', name:log, amount:0}, {type:'faute1erService', name:inputValueAdversaire, amount:0},
        {type:'1erServiceOk', name:log, amount:0}, {type:'1erServiceOk', name:inputValueAdversaire, amount:0},
        {type:'ace2emeService',name:log, amount:0}, {type:'ace2emeService',name:inputValueAdversaire, amount:0},
        {type:'2emeServiceOk', name:log, amount:0}, {type:'2emeServiceOk', name:inputValueAdversaire, amount:0},
        {type:'doubleFaute', name:log, amount:0}, {type:'doubleFaute', name:inputValueAdversaire, amount:0}]
        localStorage.setItem('compteurStatsService', JSON.stringify(initStatsService))
        
        localStorage.setItem('tieBreak', [])
        localStorage.setItem('affichageConditionnel', JSON.stringify('service'))
        
        //remettre a 0 les states pour affichage nouveau match
        setAfficheAdversaire('')
        setAfficheServeur('')
        setButton1('button-log-unselected')
        setButton2('button-adversaire-unselected')
        setAdversaire('')
        setAfficheCommencer('')
        //mettre a jour State pour affichage dans NouveauMatch
        setMatch(true)
    }
    //gérer affichage conditionnel
    const [afficheAdversaire, setAfficheAdversaire]=useState('')
    const[afficheServeur, setAfficheServeur] = useState('')
            
    function validAdversaire() {
        setAfficheAdversaire(true)
        setAfficheServeur(true)
    }
    const[button1, setButton1]=useState('button-log-unselected')
    const[button2, setButton2]=useState('button-adversaire-unselected')

    const[afficheCommencer, setAfficheCommencer]=useState('')
        
    function validServeur(choixServeur, choix, other) {
        localStorage.setItem('affichageServeur', JSON.stringify(choixServeur))
        setButton1(choix)
        setButton2(other)
        setAfficheCommencer(true)
    }

    return log==='' ?(
        <NotLog log={log} setLog={setLog} />
        ) : ( match === false ? (
        <div className="saisie-donnees">
            <p>Format de jeu : avantages, 2 sets gagnants, 3ème set</p>
            <p>Adversaire</p>
                {!afficheAdversaire ?
                (
                <div className="valid">
                    <input className="input-adversaire"
                        placeholder="Entrez le nom de votre adversaire"
                        value={inputValueAdversaire}
                        onChange={(e)=>setAdversaire(e.target.value)}
                        >
                    </input>
                    {/*verifier si les noms des joueurs sont différents*/}
                    {inputValueAdversaire===log ? (<div>Les noms des deux adversaires sont identiques</div>
                    ) : (
                        <button className="button-adversaire" onClick={()=>validAdversaire()}>Valider</button>
                    )
                    }
                </div>) : (
                    <div className="adversaire">{inputValueAdversaire}</div>
                )}

                {afficheServeur && 
                <div className="valid-serveur"><p>Qui sert en premier?</p>

                    <button className={button1} onClick={()=>validServeur(log, 'button-log', 'button-adversaire-unselected')}>{log}</button>
                    <button className={button2} onClick={()=>validServeur(inputValueAdversaire, 'button-log-unselected', 'button-adversaire')}>{inputValueAdversaire}</button>
                </div>}

                {afficheCommencer &&
                <div className="debut-match">
                    <button className="button-debut-match" onClick={()=>debutMatch()}>Commencer le match</button>
                </div>}
            </div>
        ) : (
        <Compteur 
        setMatch={setMatch} />
        )
    )
}
export default NouveauMatch