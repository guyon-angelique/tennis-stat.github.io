import '../Styles/Statistiques.css'
import {useState} from 'react'
import StatsParJoueur from './StatsParJoueur'
import StatsJoueurs from './StatsJoueurs'
import {DivPercent, JoueurColor} from './StyledComponents'

function Statistiques({statGagnant, statFaute, statsService}) {

    const statsPointsGagnants =[
        {pointsGagnants:statGagnant[0].ace+statGagnant[0].coupDroitGagnant+statGagnant[0].reversGagnant},
        {pointsGagnants:statGagnant[1].ace+statGagnant[1].coupDroitGagnant+statGagnant[1].reversGagnant}
    ]
    
    const totalFaute =[
        {fautes:statFaute[0].double+statFaute[0].fauteCoupDroit+statFaute[0].fauteRevers},
        {fautes:statFaute[1].double+statFaute[1].fauteCoupDroit+statFaute[1].fauteRevers}
    ]
    const stats=[
        {pointsGagnes:statsPointsGagnants[0].pointsGagnants+totalFaute[1].fautes},
        {pointsGagnes:statsPointsGagnants[1].pointsGagnants+totalFaute[0].fautes}
    ]
    const donneesServiceJoueur1 = statsService.filter(
        (joueur)=> joueur.name===statGagnant[0].name)
    const donneesServiceJoueur2 = statsService.filter(
        (joueur)=> joueur.name===statGagnant[1].name)

    const statMatch=[
        {item:'POINTS GAGNES', 
            valueJ1: stats[0].pointsGagnes, 
            percentJ1: Math.round((stats[0].pointsGagnes/(stats[0].pointsGagnes + stats[1].pointsGagnes)*100)*100)/100,
            valueJ2: stats[1].pointsGagnes,
            percentJ2:Math.round((stats[1].pointsGagnes/(stats[0].pointsGagnes + stats[1].pointsGagnes)*100)*100)/100},
        {item:'POINTS GAGNANTS',
            valueJ1: statsPointsGagnants[0].pointsGagnants,
            percentJ1: Math.round((statsPointsGagnants[0].pointsGagnants/(statsPointsGagnants[0].pointsGagnants + statsPointsGagnants[1].pointsGagnants)*100)*100)/100,
            valueJ2: statsPointsGagnants[1].pointsGagnants,
            percentJ2: Math.round((statsPointsGagnants[1].pointsGagnants/(statsPointsGagnants[0].pointsGagnants + statsPointsGagnants[1].pointsGagnants)*100)*100)/100},
        {item:'Aces',
            valueJ1: statGagnant[0].ace,
            percentJ1: Math.round((statGagnant[0].ace/(statGagnant[0].ace + statGagnant[1].ace)*100)*100)/100,
            valueJ2: statGagnant[1].ace,
            percentJ2: Math.round((statGagnant[1].ace/(statGagnant[0].ace + statGagnant[1].ace)*100)*100)/100},
        {item:'Coups droit gagnants',
            valueJ1: statGagnant[0].coupDroitGagnant,
            percentJ1: Math.round((statGagnant[0].coupDroitGagnant/(statGagnant[0].coupDroitGagnant + statGagnant[1].coupDroitGagnant)*100)*100)/100,
            valueJ2: statGagnant[1].coupDroitGagnant,
            percentJ2: Math.round((statGagnant[1].coupDroitGagnant/(statGagnant[0].coupDroitGagnant + statGagnant[1].coupDroitGagnant)*100)*100)/100},
        {item:'Revers gagnants',
            valueJ1: statGagnant[0].reversGagnant,
            percentJ1: Math.round((statGagnant[0].reversGagnant/(statGagnant[0].reversGagnant + statGagnant[1].reversGagnant)*100)*100)/100,
            valueJ2: statGagnant[1].reversGagnant,
            percentJ2: Math.round((statGagnant[1].reversGagnant/(statGagnant[0].reversGagnant + statGagnant[1].reversGagnant)*100)*100)/100},
        {item:'FAUTES DIRECTES',
            valueJ1: totalFaute[0].fautes,
            percentJ1: Math.round((totalFaute[0].fautes/(totalFaute[0].fautes + totalFaute[1].fautes)*100)*100)/100,
            valueJ2: totalFaute[1].fautes,
            percentJ2: Math.round((totalFaute[1].fautes/(totalFaute[0].fautes + totalFaute[1].fautes)*100)*100)/100},
        {item:'Doubles faute',
            valueJ1: statFaute[0].double,
            percentJ1: Math.round((statFaute[0].double/(statFaute[0].double + statFaute[1].double)*100)*100)/100,
            valueJ2: statFaute[1].double,
            percentJ2: Math.round((statFaute[1].double/(statFaute[0].double + statFaute[1].double)*100)*100)/100},
        {item:'Fautes sur coup droit',
            valueJ1: statFaute[0].fauteCoupDroit,
            percentJ1: Math.round((statFaute[0].fauteCoupDroit/(statFaute[0].fauteCoupDroit + statFaute[1].fauteCoupDroit)*100)*100)/100,
            valueJ2: statFaute[1].fauteCoupDroit,
            percentJ2: Math.round((statFaute[1].fauteCoupDroit/(statFaute[0].fauteCoupDroit + statFaute[1].fauteCoupDroit)*100)*100)/100},
        {item:'Fautes sur revers',
            valueJ1: statFaute[0].fauteRevers,
            percentJ1: Math.round((statFaute[0].fauteRevers/(statFaute[0].fauteRevers + statFaute[1].fauteRevers)*100)*100)/100,
            valueJ2: statFaute[1].fauteRevers,
            percentJ2: Math.round((statFaute[1].fauteRevers/(statFaute[0].fauteRevers + statFaute[1].fauteRevers)*100)*100)/100}   

    ]

    const statJoueur1 = [
        {
            item: "POINTS GAGNES",
                type1: "points gagnants",
                valueType1: statMatch[1].valueJ1,
                percentType1: Math.round((statMatch[1].valueJ1/statMatch[0].valueJ1*100)*100)/100,
                type2:"fautes de l'adversaire",
                valueType2: statMatch[5].valueJ2,
                percentType2: Math.round((statMatch[5].valueJ2/statMatch[0].valueJ1*100)*100)/100,
                color1: '#87cefa',
                color2: '#0000cd'
        },
        {
            item: "POINTS GAGNANTS",
                type1: "Aces",
                valueType1: statMatch[2].valueJ1,
                percentType1: Math.round((statMatch[2].valueJ1/statMatch[1].valueJ1*100)*100)/100,
                type2:"Coups droit",
                valueType2: statMatch[3].valueJ1,
                percentType2: Math.round((statMatch[3].valueJ1/statMatch[1].valueJ1*100)*100)/100, 
                type3: "Revers",
                valueType3: statMatch[4].valueJ1,
                percentType3: Math.round((statMatch[4].valueJ1/statMatch[1].valueJ1*100)*100)/100,
                color1: '#c4a35a',
                color2: '#c66b3d',
                color3: '#e5e5cd'
        },
        {
            item: "FAUTES DIRECTES",
                type1: "Doubles fautes",
                valueType1: statMatch[6].valueJ1,
                percentType1: Math.round((statMatch[6].valueJ1/statMatch[5].valueJ1*100)*100)/100,
                type2:"Coups droit",
                valueType2: statMatch[7].valueJ1,
                percentType2: Math.round((statMatch[7].valueJ1/statMatch[5].valueJ1*100)*100)/100,
                type3: "Revers",
                valueType3: statMatch[8].valueJ1,
                percentType3: Math.round((statMatch[8].valueJ1/statMatch[5].valueJ1*100)*100)/100,
                color1: '#c9967a',
                color2: '#dc143c',
                color3: '#8b0000'
        },
        {
            item: "SERVICES",
                type1: "1er Services",
                valueType1: donneesServiceJoueur1[3].amount + donneesServiceJoueur1[1].amount,
                percentType1: Math.round(((donneesServiceJoueur1[3].amount + donneesServiceJoueur1[1].amount)/donneesServiceJoueur1[0].amount*100)*100)/100,
                type2:"2ème Services",
                valueType2: donneesServiceJoueur1[2].amount,
                percentType2: Math.round(((donneesServiceJoueur1[2].amount)/donneesServiceJoueur1[0].amount*100)*100)/100,
                color1: '#66cdaa',
                color2: '#3cb371'
        },
        {
            item: "1er SERVICES",
                type1: "Aces",
                valueType1: donneesServiceJoueur1[1].amount,
                percentType1: Math.round((donneesServiceJoueur1[1].amount/donneesServiceJoueur1[0].amount*100)*100)/100,
                type2:"1er service ok",
                valueType2: donneesServiceJoueur1[3].amount,
                percentType2: Math.round((donneesServiceJoueur1[3].amount/donneesServiceJoueur1[0].amount*100)*100)/100,
                type3: "Fautes",
                valueType3: donneesServiceJoueur1[2].amount,
                percentType3: Math.round((donneesServiceJoueur1[2].amount/donneesServiceJoueur1[0].amount*100)*100)/100,
                color1: '#ffd700',
                color2: '#f0e68c',
                color3: '#ffe4b5'
        },
        {
            item: "2ème SERVICES",
                type1: "Aces",
                valueType1: donneesServiceJoueur1[4].amount,
                percentType1: Math.round((donneesServiceJoueur1[4].amount/donneesServiceJoueur1[2].amount*100)*100)/100,
                type2:"2ème service ok",
                valueType2: donneesServiceJoueur1[5].amount,
                percentType2: Math.round((donneesServiceJoueur1[5].amount/donneesServiceJoueur1[2].amount*100)*100)/100,
                type3: "Double faute",
                valueType3: donneesServiceJoueur1[6].amount,
                percentType3: Math.round((donneesServiceJoueur1[6].amount/donneesServiceJoueur1[2].amount*100)*100)/100,
                color1: '#da70d6',
                color2: '#d8bfd8',
                color3: '#9370db'
        }
    ]
    
    const statJoueur2 = [
         {
             item: "POINTS GAGNES",
                 type1: "points gagnants",
                 valueType1: statMatch[1].valueJ2,
                 percentType1: Math.round((statMatch[1].valueJ2/statMatch[0].valueJ2*100)*100)/100,
                 type2:"fautes de l'adversaire",
                 valueType2:statMatch[5].valueJ1,
                 percentType2 : Math.round((statMatch[5].valueJ1/statMatch[0].valueJ2*100)*100)/100,
                 color1: '#87cefa',
                 color2: '#0000cd'
         },
         {
             item: "POINTS GAGNANTS",
                 type1: "Aces",
                 valueType1: statMatch[2].valueJ2,
                 percentType1: Math.round((statMatch[2].valueJ2/statMatch[1].valueJ2*100)*100)/100,
                 type2:"Coups droit",
                 valueType2:statMatch[3].valueJ2,
                 percentType2 : Math.round((statMatch[3].valueJ2/statMatch[1].valueJ2*100)*100)/100,
                 type3: "Revers",
                 valueType3: statMatch[4].valueJ2,
                 percentType3: Math.round((statMatch[4].valueJ2/statMatch[1].valueJ2*100)*100)/100,
                 color1: '#c4a35a',
                 color2: '#c66b3d',
                 color3: '#e5e5cd'
         },
         {
             item: "FAUTES DIRECTES",
                 type1: "Doubles fautes",
                 valueType1: statMatch[2].valueJ2,
                 percentType1: Math.round((statMatch[6].valueJ2/statMatch[5].valueJ2*100)*100)/100,
                 type2:"Coups droit",
                 valueType2:statMatch[7].valueJ2,
                 percentType2 : Math.round((statMatch[7].valueJ2/statMatch[5].valueJ2*100)*100)/100,
                 type3: "Revers",
                 valueType3: statMatch[8].valueJ2,
                 percentType3: Math.round((statMatch[8].valueJ2/statMatch[5].valueJ2*100)*100)/100,
                 color1: '#c9967a',
                 color2: '#dc143c',
                 color3: '#8b0000'
         },
         {
            item: "SERVICES",
                type1: "1er Services",
                valueType1: donneesServiceJoueur2[3].amount + donneesServiceJoueur2[1].amount,
                percentType1: Math.round(((donneesServiceJoueur2[3].amount + donneesServiceJoueur2[1].amount)/donneesServiceJoueur2[0].amount*100)*100)/100,
                type2:"2ème Services",
                valueType2: donneesServiceJoueur2[2].amount,
                percentType2: Math.round(((donneesServiceJoueur2[2].amount)/donneesServiceJoueur2[0].amount*100)*100)/100,
                color1: '#66cdaa',
                color2: '#3cb371'
        },
        {
            item: "1er SERVICES",
                type1: "Aces",
                valueType1: donneesServiceJoueur2[1].amount,
                percentType1: Math.round((donneesServiceJoueur2[1].amount/donneesServiceJoueur2[0].amount*100)*100)/100,
                type2:"1er service ok",
                valueType2: donneesServiceJoueur2[3].amount,
                percentType2: Math.round((donneesServiceJoueur2[3].amount/donneesServiceJoueur2[0].amount*100)*100)/100,
                type3: "Fautes",
                valueType3: donneesServiceJoueur2[2].amount,
                percentType3: Math.round((donneesServiceJoueur2[2].amount/donneesServiceJoueur2[0].amount*100)*100)/100,
                color1: '#ffd700',
                color2: '#f0e68c',
                color3: '#ffe4b5'
        },
        {
            item: "2ème SERVICES",
                type1: "Aces",
                valueType1: donneesServiceJoueur2[4].amount,
                percentType1: Math.round((donneesServiceJoueur2[4].amount/donneesServiceJoueur2[2].amount*100)*100)/100,
                type2:"2ème service ok",
                valueType2: donneesServiceJoueur2[5].amount,
                percentType2: Math.round((donneesServiceJoueur2[5].amount/donneesServiceJoueur2[2].amount*100)*100)/100,
                type3: "Double faute",
                valueType3: donneesServiceJoueur2[6].amount,
                percentType3: Math.round((donneesServiceJoueur2[6].amount/donneesServiceJoueur2[2].amount*100)*100)/100,
                color1: '#da70d6',
                color2: '#d8bfd8',
                color3: '#9370db'
        }
     ]
    
    const[affichageStats, setAffichageStats]=useState('statsDuMatch')

    return(
        <div className="compteur-stat">

            <div className="select-style">
                <select value={affichageStats} name="affichageStats" id="choiceAffichage" onChange={(e)=>setAffichageStats(e.target.value)}>
                    <option value="statsDuMatch">Statistiques du match</option>
                    <option value="statsJoueur1">Statistiques de {statGagnant[0].name}</option>
                    <option value="statsJoueur2">Statistiques de {statGagnant[1].name}</option>
                    <option value="statsJoueurs">Statistiques des 2 joueurs</option>
                </select>
            </div>

        {affichageStats==='statsDuMatch' &&
            <div>
                <div className="joueurs">
                    <div><JoueurColor color={'#ccd731'}>{statGagnant[0].name}</JoueurColor></div>
                    <div><JoueurColor color={'#FF3333'}>{statGagnant[1].name}</JoueurColor></div>
                </div>
                {statMatch.map((mapStat) => 
                <>
                
                <div className="div-item">
                
                    <div className="item">{mapStat.item}</div>
                
                    <div className="categ-flex">
                        <div>{mapStat.valueJ1} {Number.isNaN(mapStat.percentJ1)===false && <>-- {mapStat.percentJ1}%</>}</div>
                        <div>{mapStat.valueJ2} {Number.isNaN(mapStat.percentJ2)===false && <>-- {mapStat.percentJ2}%</>}</div>
    
                    </div>
                    <div className="categ-absolute">
                        {Number.isNaN(mapStat.percentJ1)===false &&
                        <>
                        <DivPercent width={mapStat.percentJ1} color={'#ccd731'}></DivPercent>
                        <DivPercent width={mapStat.percentJ2} color={'#FF3333'}></DivPercent>
                        </>
                        }
                    </div>
                </div>
                </>)}

                    
                
            </div>  
        }

        {affichageStats==="statsJoueur1" &&
            <StatsParJoueur
            statsParJoueurs={statJoueur1}
            />
        }

        {affichageStats==="statsJoueur2" &&
            <StatsParJoueur 
            statsParJoueurs={statJoueur2}/>
        }

        {affichageStats==="statsJoueurs" &&
            <StatsJoueurs 
            statMatch={statMatch}
            statGagnant={statGagnant}
            statJoueur1={statJoueur1}
            statJoueur2={statJoueur2}
            donneesServiceJoueur1={donneesServiceJoueur1}
            donneesServiceJoueur2={donneesServiceJoueur2} />
        }

        </div>
        
    )

}

export default Statistiques