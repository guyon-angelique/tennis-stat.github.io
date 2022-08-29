import '../Styles/Compteur.css'
import MajCompteur from './MajCompteur'
import {useEffect, useState} from 'react'
import balle from '../Assets/balle.png'
import Statistiques from './Statistiques'

function Compteur({setMatch}) {
    //enregistrer score et statistiques dans localStorage à chaque modification
    const [score, setScore]=useState(JSON.parse(localStorage.getItem('compteurScore')))
    useEffect(() => {
        localStorage.setItem('compteurScore', JSON.stringify(score))
    }, [score])
    const [statGagnant, setStatGagnant]=useState(JSON.parse(localStorage.getItem('compteurStatGagnant')))
    useEffect(()=> {
        localStorage.setItem('compteurStatGagnant', JSON.stringify(statGagnant))
    }, [statGagnant])
    const [statFaute, setStatFaute]=useState(JSON.parse(localStorage.getItem('compteurStatFaute')))
    useEffect(()=> {
        localStorage.setItem('compteurStatFaute', JSON.stringify(statFaute))
    }, [statFaute])
    const[scoreMatch, setScoreMatch]=useState(JSON.parse(localStorage.getItem('matchScore')))
    useEffect(() => {
        localStorage.setItem('matchScore', JSON.stringify(scoreMatch))
    }, [scoreMatch])
    const [serveur, setServeur] = useState(JSON.parse(localStorage.getItem('affichageServeur')))
    useEffect(() => {
        localStorage.setItem('affichageServeur', JSON.stringify(serveur))
    }, [serveur])

    const [statsService, setStatsService]=useState(JSON.parse(localStorage.getItem('compteurStatsService')))
    useEffect(() => {
        localStorage.setItem('compteurStatsService', JSON.stringify(statsService))
    }, [statsService])

    return (
        <>
        <div className="div-left">
            <div className="tableauScore">
                <div>Score</div>
                <table>
                    <tbody>
                    {score.map((joueur) =>
                    <tr>
                    <td key={`${joueur.name}-img`} className="service">{joueur.name===serveur && <img src={balle} alt=""/>}</td>
                    <td key={`${joueur.name}-{index}`}>{joueur.name}</td>

                        {scoreMatch[score.indexOf(joueur)].set1 !== '' ? 
                            <td key={`score-set1-${scoreMatch[score.indexOf(joueur)]}`}>{scoreMatch[score.indexOf(joueur)].set1}</td> : null}
                        {scoreMatch[score.indexOf(joueur)].set2 !== '' ? 
                            <td key={`score-set2-${scoreMatch[score.indexOf(joueur)]}`}>{scoreMatch[score.indexOf(joueur)].set2}</td> : null}
                        {scoreMatch[score.indexOf(joueur)].set3 !== '' ? 
                            <td key={`score-set3-${scoreMatch[score.indexOf(joueur)]}`}>{scoreMatch[score.indexOf(joueur)].set3}</td> : null}
                        {!score[0].resultat ?  
                        <>  
                            <td key={`${joueur.jeu}-jeu-{index}`}>{joueur.jeu}</td>
                            <td key={`${joueur.point}-point-{index}`}>{joueur.point}</td>
                        </> : null}
                    </tr>)}
                    </tbody>
                </table>
                </div>

            
            <MajCompteur 
                score={score} 
                setScore={setScore} 
                statGagnant={statGagnant} 
                setStatGagnant={setStatGagnant}
                statFaute={statFaute}
                setStatFaute={setStatFaute}
                scoreMatch={scoreMatch}
                setScoreMatch={setScoreMatch}
                serveur={serveur}
                setServeur={setServeur}
                setMatch={setMatch}
                statsService={statsService}
                setStatsService={setStatsService} />
            
        </div>   

        <div className="div-right">
            <Statistiques 
                statGagnant={statGagnant}
                statFaute={statFaute}
                statsService={statsService} />
        </div>
   
        </>
        
    )
}
export default Compteur