import { useEffect, useState } from 'react'
import '../Styles/MajPoint.css'
import {ButtonJoueur} from './StyledComponents'

function MajPoint({score, setScore, statGagnant, setStatGagnant, statFaute, setStatFaute, scoreMatch, setScoreMatch, serveur, setServeur, statsService, setStatsService}) {
    
    const savedTieBreak=localStorage.getItem('tieBreak')
    const[tieBreak, setTieBreak] = useState(savedTieBreak ? JSON.parse(savedTieBreak) : [])
    useEffect(() => {
        localStorage.setItem('tieBreak', JSON.stringify(tieBreak))
    }, [tieBreak])

    function majScore(nameJoueur) {
        //recuperer les infos du gagnant du point
        const currentJoueurAdded = score.find((currentJoueur)=>
        currentJoueur.name===nameJoueur)//trouver le gagnant
        const indexCurrent=score.indexOf(currentJoueurAdded)//trouver l'index du gagnant dans score
        const currentScore=currentJoueurAdded.point//trouver score avant de gagner
        //recuperer les infos de l'adversaire
        const adversaire = score.find((currentAdversaire) =>
        currentAdversaire.name!==nameJoueur)
        const indexAdversaire= score.indexOf(adversaire)
        const scoreAdversaire = adversaire.point

        if (tieBreak === true) {
            comptageTieBreak(currentJoueurAdded, indexCurrent, currentScore, adversaire, indexAdversaire, scoreAdversaire)
        } else {
            point(currentJoueurAdded, indexCurrent, currentScore, adversaire, indexAdversaire, scoreAdversaire)
        }
    }

    function point(currentJoueurAdded, indexCurrent, currentScore, adversaire, indexAdversaire, scoreAdversaire) {
        
        //mettre à jour le score
        const points=[0,15,30,40,'AV']
        const indexPoint = points.indexOf(points.find((point)=>
        point===currentScore))
        
        if (indexPoint===3) {
            if (scoreAdversaire===40) {
                //avantage
                score.splice(indexCurrent, 1, {name:currentJoueurAdded.name, set:currentJoueurAdded.set, jeu:currentJoueurAdded.jeu, point:'AV'})
                } else if (scoreAdversaire==='AV'){
                //retour 40a
                score.splice(indexCurrent, 1, {name:currentJoueurAdded.name, set:currentJoueurAdded.set, jeu:currentJoueurAdded.jeu, point:40})
                score.splice(indexAdversaire, 1, {name:adversaire.name, set:adversaire.set, jeu:adversaire.jeu, point:40})
            }
            else{ 
                //gagne jeu
                gagneJeu(indexCurrent, currentJoueurAdded, indexAdversaire, adversaire)
            }
                    
        }
        else if (indexPoint===4) {
            //gagne jeu
            gagneJeu(indexCurrent, currentJoueurAdded, indexAdversaire, adversaire)
        } else {
            //gagne point
            const nouveauScore=points[indexPoint +1]
            score.splice(indexCurrent, 1, {name:currentJoueurAdded.name, set:currentJoueurAdded.set, jeu:currentJoueurAdded.jeu, point:nouveauScore})
        }
        //mettre a jour state score
        setScore([...score])
    }
    
    function gagneJeu(indexCurrent, currentJoueurAdded, indexAdversaire, adversaire) {
        const nouveauScoreJeu = currentJoueurAdded.jeu+1

        if (nouveauScoreJeu===7) {
            gagneSet(indexCurrent, currentJoueurAdded, indexAdversaire, adversaire)
        }
        if (nouveauScoreJeu===6) {
            if (adversaire.jeu >= 5) {
                //joueur gagne le jeu mettre a jour score
                score.splice(indexCurrent, 1, {name:currentJoueurAdded.name, set:currentJoueurAdded.set, jeu:currentJoueurAdded.jeu+1, point:0})
                score.splice(indexAdversaire, 1, {name:adversaire.name, set:adversaire.set, jeu:adversaire.jeu, point:0})
                
                if (adversaire.jeu ===6) {
                //activer tie break pour le prochain jeu
                setTieBreak(true)
                }
            }
            else {
                //gagne le set
                gagneSet(indexCurrent, currentJoueurAdded, indexAdversaire, adversaire)
            }
        }
        else {
            //joueur gagne le jeu mettre a jour score
            score.splice(indexCurrent, 1, {name:currentJoueurAdded.name, set:currentJoueurAdded.set, jeu:currentJoueurAdded.jeu+1, point:0})
            score.splice(indexAdversaire, 1, {name:adversaire.name, set:adversaire.set, jeu:adversaire.jeu, point:0})
        }
    majServeur()
    }

    function gagneSet(indexCurrent, currentJoueurAdded, indexAdversaire, adversaire) {
        //mise a jour score set
        const nouveauScoreSet = currentJoueurAdded.set+1
        //sauvegarder score du set
        if(scoreMatch[indexCurrent].set1==='') {
            scoreMatch.splice(indexCurrent, 1, {name:currentJoueurAdded.name, set1:currentJoueurAdded.jeu+1, set2:'', set3:''})
            scoreMatch.splice(indexAdversaire, 1, {name:adversaire.name, set1:adversaire.jeu, set2:'', set3:''})
        } else if (scoreMatch[indexCurrent].set2===''){
            scoreMatch.splice(indexCurrent, 1, {name:currentJoueurAdded.name, set1:scoreMatch[indexCurrent].set1, set2:currentJoueurAdded.jeu+1, set3:''})
            scoreMatch.splice(indexAdversaire, 1, {name:adversaire.name, set1:scoreMatch[indexAdversaire].set1, set2:adversaire.jeu, set3:''})
        } else {
            scoreMatch.splice(indexCurrent, 1, {name:currentJoueurAdded.name, set1:scoreMatch[indexCurrent].set1, set2:scoreMatch[indexCurrent].set2, set3:currentJoueurAdded.jeu+1})
            scoreMatch.splice(indexAdversaire, 1, {name:adversaire.name, set1:scoreMatch[indexAdversaire].set1, set2:scoreMatch[indexAdversaire].set2, set3:adversaire.jeu})
        }
        setScoreMatch([...scoreMatch])

        //verifier situation après gain set
        if (nouveauScoreSet===2) {
            //gagne match
            score.splice(indexCurrent, 1, {name:currentJoueurAdded.name, resultat:'victoire'})
            score.splice(indexAdversaire, 1, {name:adversaire.name, resultat: 'défaite'})
        }
        else {
            //joueur gagnet set, mise a jour du score
            score.splice(indexCurrent, 1, {name:currentJoueurAdded.name, set:currentJoueurAdded.set+1, jeu:0, point:0})
            score.splice(indexAdversaire, 1, {name:adversaire.name, set:adversaire.set, jeu:0, point:0})
        }
        setTieBreak([])
    }
    function comptageTieBreak(currentJoueurAdded, indexCurrent, currentScore, adversaire, indexAdversaire, scoreAdversaire) {
        const nouveauScore=currentScore+1
        //verifier si changement serveur
        const verifImpair = nouveauScore+score[indexAdversaire].point
        if (verifImpair %2 !==0) {
            majServeur()}

        //verfier si gagne tie break et mise a jour du score
        if (nouveauScore >=7 && nouveauScore-scoreAdversaire >= 2) {
            gagneSet(indexCurrent, currentJoueurAdded, indexAdversaire, adversaire)
        }
        else {
            score.splice(indexCurrent, 1, {name:currentJoueurAdded.name, set:currentJoueurAdded.set, jeu:currentJoueurAdded.jeu, point:nouveauScore})
        }
        setScore([...score])
    }
    function majStat(nameJoueur,coup) {

        if (coup==='ace' || coup==='coupDroitGagnant' || coup==='reversGagnant') {
            const currentJoueur=statGagnant.find((joueur) =>
            joueur.name===nameJoueur)
            const indexCurrent=statGagnant.indexOf(currentJoueur)
            if(coup==='ace') {
                statGagnant.splice(indexCurrent, 1, {name:nameJoueur, ace:currentJoueur.ace+1, coupDroitGagnant:currentJoueur.coupDroitGagnant, reversGagnant:currentJoueur.reversGagnant})
            }
            else if(coup==='coupDroitGagnant') {
                statGagnant.splice(indexCurrent, 1, {name:nameJoueur, ace:currentJoueur.ace, coupDroitGagnant:currentJoueur.coupDroitGagnant+1, reversGagnant:currentJoueur.reversGagnant})
            }
            else {
                statGagnant.splice(indexCurrent, 1, {name:nameJoueur, ace:currentJoueur.ace, coupDroitGagnant:currentJoueur.coupDroitGagnant, reversGagnant:currentJoueur.reversGagnant+1})
            }
            setStatGagnant([...statGagnant])

        } else {
            const adversaire=statFaute.find((joueur) =>
            joueur.name!==nameJoueur)
            const indexAdversaire=statFaute.indexOf(adversaire)
            if(coup==='double') {
                statFaute.splice(indexAdversaire, 1, {name:adversaire.name, double:adversaire.double+1, fauteCoupDroit:adversaire.fauteCoupDroit, fauteRevers:adversaire.fauteRevers})
            }
            else if(coup==='fauteCoupDroit') {
                statFaute.splice(indexAdversaire, 1, {name:adversaire.name, double:adversaire.double, fauteCoupDroit:adversaire.fauteCoupDroit+1, fauteRevers:adversaire.fauteRevers})
            }
            else {
                statFaute.splice(indexAdversaire, 1, {name:adversaire.name, double:adversaire.double, fauteCoupDroit:adversaire.fauteCoupDroit, fauteRevers:adversaire.fauteRevers+1})
            }
            setStatFaute([...statFaute])
        }

    }

    //gérer changement serveur
    function majServeur() {
        if (serveur===score[0].name) {
            setServeur(score[1].name)
        }else {setServeur(score[0].name)}
    }

    //gérer l'affichage conditionnel
    const [affichage, setAffichage] = useState(JSON.parse(localStorage.getItem('affichageConditionnel')))
    useEffect(() => {
        localStorage.setItem('affichageConditionnel', JSON.stringify(affichage))
    }, [affichage])
    
    const [gagnant, setGagnant] = useState(localStorage.getItem('saveGagnant') ? JSON.parse(localStorage.getItem('saveGagnant')): '')
    useEffect(() => {
        localStorage.setItem('saveGagnant', JSON.stringify(gagnant))
    }, [gagnant])
    
    //valider le coup gagnant
    function handleClick(nameJoueur, coup) {
        majScore(nameJoueur)
        majStat(nameJoueur,coup)
        setAffichage('service')
        setGagnant('')
    }
    //valider le gagnant du point
    function gagnantClick(joueur) {
        setGagnant(joueur)
        setAffichage('detailPoint')
    }

    //valider le service
    function validService(type, nameServeur) {

        if(type==="ace1erService" || type==="ace2emeService") {
            pointService(nameServeur, "ace")
        }
        if(type==="doubleFaute") {
            if(nameServeur===score[0].name) {
                pointService(score[1].name, "double")
            } else {
                pointService(score[0].name, "double")
            }
        }
        if(type==="faute1erService") {
            setAffichage("2emeService")
        }
        if(type==="1erServiceOk" || type==="2emeServiceOk") {
            setAffichage("nouveauPoint")
        }
        majStatService(type, nameServeur)
    } 
    //valider point gagné au service
    function pointService(nameJoueur, coup) {
        setGagnant(nameJoueur)
        majScore(nameJoueur)
        majStat(nameJoueur, coup)

        //afficher message si le point est gagné au service
        setAffichage('pointGagneService')
        setTimeout(function(){setAffichage('service')},2000)
        setTimeout(function(){setGagnant('')},2000)
    }

    //mettre a jour les stats de service
    function majStatService(type, nameServeur) {
        //compter le nombre de service
        if (type==='ace1erService' || type==='faute1erService' || type==='1erServiceOk') {
        const indexService= statsService.indexOf(statsService.find((joueur)=>
        joueur.name===nameServeur && joueur.type==='nbService'))
        statsService.splice(indexService, 1, {type:'nbService', name:nameServeur, amount:statsService[indexService].amount+1})}

        const index = statsService.indexOf(statsService.find((joueur)=>
        joueur.name===nameServeur && joueur.type===type))
        statsService.splice(index, 1, {type:type, name:nameServeur, amount:statsService[index].amount+1})
        setStatsService([...statsService])
    }

    return (
    <div className="compteurScore">

        {affichage==='service' &&(
            <div>
                <h2>Serveur : {serveur===score[0].name ? 
                (<span className="joueur">{serveur}</span> 
                ) : (
                <span className="adversaire">{serveur}</span>)}</h2>
                
                <p className="service">1er service</p>

                <div className="detail-service">
                        <button onClick={()=>validService('ace1erService', serveur)}>Ace</button>
                        <button onClick={()=>validService('faute1erService', serveur)}>Faute</button>
                        <button onClick={()=>validService('1erServiceOk', serveur)}>Service OK</button>
                </div>
            </div>   
        )}

        {affichage=== '2emeService' && (
            <div>
                <h2>Serveur : {serveur===score[0].name ? 
                (<span className="joueur">{serveur}</span> 
                ) : (
                <span className="adversaire">{serveur}</span>)}</h2>
                <p className="service">2ème service</p>

                <div className="detail-service">
                    <button onClick={()=>validService('ace2emeService', serveur)}>Ace</button>
                    <button onClick={()=>validService('doubleFaute', serveur)}>Double faute</button>
                    <button onClick={()=>validService('2emeServiceOk', serveur)}>Service OK</button>
                </div>
            </div> 
        )}

        {affichage==='pointGagneService' && (
            <>
                {serveur === gagnant ? (
                    <>
                        <h2>Ace</h2>
                        <p className="gagnant-point-service">Gagnant du point : 
                            {gagnant===score[0].name ? (
                                <span className="joueur"> {gagnant}</span>
                            ) : (
                                <span className="adversaire"> {gagnant}</span>
                            )}
                        </p>
                    </>
                    ) : (
                    <>
                        <h2>double faute</h2>
                        <p className="gagnant-point-service">Gagnant du point : 
                        {gagnant===score[0].name ? (
                                <span className="joueur"> {gagnant}</span>
                            ) : (
                                <span className="adversaire"> {gagnant}</span>
                            )}
                        </p>
                    </>
                    )}
            </>
        )}

        {affichage === 'nouveauPoint' && 
        <>
            <h2>Gagnant du point</h2>
            <div className="div-flex">
                <ButtonJoueur color={'204,215,49'} onClick={()=>gagnantClick(score[0].name)}>{score[0].name}</ButtonJoueur>
                <ButtonJoueur color={'255,51,51'} onClick={()=>gagnantClick(score[1].name)}>{score[1].name}</ButtonJoueur>
            </div>
        </>} 
         
        {affichage ==='detailPoint' &&( 

            <div>
                <h2>Gagnant du point : {gagnant===score[0].name ? 
                (<span className="joueur">{gagnant}</span> 
                ) : (
                <span className="adversaire">{gagnant}</span>)}</h2>

                <div className="details">
                    <div className="details-center">
                        <p>Coup gagnant</p>
                        <button className="valid-coup" onClick={()=>handleClick(gagnant, 'coupDroitGagnant')}>Coup droit</button><br/>
                        <button className="valid-coup" onClick={()=>handleClick(gagnant, 'reversGagnant')}>Revers</button>
                    </div>
                    <div className="details-center">
                        <p>Faute de l'adversaire</p>
                        <button className="valid-coup" onClick={()=>handleClick(gagnant, 'fauteCoupDroit')}>Faute directe sur coup droit</button><br/>
                        <button className="valid-coup" onClick={()=>handleClick(gagnant, 'fauteRevers')}>Faute directe sur revers</button>
                    </div>
                </div>    
            </div>
        )}

        
            
    </div>
    )
    
}
export default MajPoint