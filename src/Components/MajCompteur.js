import MajPoint from './MajPoint'
import ResultatMatch from './ResultatMatch'

function MajCompteur({score, setScore, statGagnant, setStatGagnant, statFaute, setStatFaute, scoreMatch, setScoreMatch, serveur, setServeur, setMatch, statsService, setStatsService}) {
    
    return (
        <>
            {!score[0].resultat ? 
            <MajPoint 
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
            statsService={statsService}
            setStatsService={setStatsService} />
            
            :
            
            <ResultatMatch 
            score={score}
            scoreMatch={scoreMatch}
            setScore={setScore} 
            setStatGagnant={setStatGagnant}
            setStatFaute={setStatFaute} 
            setScoreMatch={setScoreMatch} 
            setServeur={setServeur}
            setMatch={setMatch}
            setStatsService={setStatsService}
             /> 
            }
            
            
        </>
    )
}
export default MajCompteur