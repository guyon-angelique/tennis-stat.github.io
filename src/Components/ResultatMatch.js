import '../Styles/ResultatMatch.css'

function ResultatMatch({score, scoreMatch, setScore, setStatGagnant, setStatFaute, setScoreMatch, setServeur, setMatch, setStatsService}) {
    //verifier qui est le vainqueur
    const vainqueur=score.indexOf(score.find((joueur) =>
    joueur.resultat==='victoire'))
    const perdant=score.indexOf(score.find((joueur) =>
    joueur.resultat==='défaite'))

    //function sauvegardeDonnees() a gérer avec base données
    //function remise à 0 des states et du localStorage
    function initCompteur() {
        //mise a 0 des donnees relatives au match
        setMatch('')
        setScore('')
        localStorage.removeItem('compteurScore')
        setStatGagnant('')
        localStorage.removeItem('compteurStatGagnant')
        setStatFaute('')
        localStorage.removeItem('compteurStatFaute')
        setScoreMatch('')
        localStorage.removeItem('matchScore')
        setServeur('')
        localStorage.removeItem('affichageServeur')
        setStatsService('')
        localStorage.removeItem('compteurStatsService')
        localStorage.removeItem('tieBreak')
        localStorage.removeItem('affichageConditionnel')
        localStorage.removeItem('saveGagnant')
        
    }
    function saveAndContinue() {
        //sauvegardeDonnes()
        initCompteur()
    }
    return(
        <div className="compteurScore">
            <h2>Victoire 
                {vainqueur ===0 ? (
                    <span className="joueur"> {scoreMatch[vainqueur].name}</span>
                ) : (
                    <span className="adversaire"> {scoreMatch[vainqueur].name}</span>
                )}
            </h2>
            <p className="detail-score">
                {scoreMatch[vainqueur].set1}/{scoreMatch[perdant].set1} {scoreMatch[vainqueur].set2}/{scoreMatch[perdant].set2}
                {scoreMatch[0].set3!=='' ?
                <>{scoreMatch[vainqueur].set3}/{scoreMatch[perdant].set3}</> : null
                }
            </p>
            <div className="action-fin-match">
                <button className="button-fin-match" onClick={()=>saveAndContinue()}>Enregistrer le match</button>
                <button className="button-fin-match" onClick={()=>initCompteur()}>Continuer sans enregistrer</button>
            </div>
        </div>
    )
}
export default ResultatMatch