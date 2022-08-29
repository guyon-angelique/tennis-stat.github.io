import {useEffect, useState} from 'react'
import NotLog from './NotLog'

function AllStat() {
    const[tableauScore, setTableauScore] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
    
    useEffect(() => {
        setDataLoading(true)
        fetch(`http://localhost/api/Score/lire.php?id=2`)
        .then((response) => response.json()
        .then((tableauScore) => {
            setTableauScore(tableauScore)
            setDataLoading(false)
        })
        .catch((error) => console.log(error))
        )
    }, [])
console.log(tableauScore.score)
if(tableauScore.score){
    console.log(tableauScore.score[0].score)
}
    //verifier si utilisateur deja identifie
    const verifLog=localStorage.getItem('name')
    //state utilisateur, si deja identifié extraire données du localStorage
    const[log, setLog] = useState(verifLog ? JSON.parse(verifLog) : [])

    return log.length===0 ?(
        <NotLog log={log} setLog={setLog} />
        ) : (
        <>
            <div>Contenu historique</div>
            {isDataLoading ? (
            <div>chargement</div>
        ) : (
            <>
            <div>chargé!!!</div>
            {tableauScore.score &&
            <div>{tableauScore.score[0].score}</div>
            }
            </>
            )}
        </>
    )
}
export default AllStat