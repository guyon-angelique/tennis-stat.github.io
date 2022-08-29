import '../Styles/StatsJoueurs.css'
import {DivPercent, SpanTextLegend, SpanLegende, JoueurColor} from './StyledComponents'

function StatsJoueurs({statMatch, statGagnant, statJoueur1, statJoueur2, donneesServiceJoueur1, donneesServiceJoueur2}) {
    const statsParJoueurs = [
        {
            item: "POINTS GAGNES",
                valueJ1: statMatch[0].valueJ1,
                percentJ1:statMatch[0].percentJ1,
                valueJ2:statMatch[0].valueJ2,
                percentJ2:statMatch[0].percentJ2,
                type1: "points gagnants",
                type1J1: statMatch[1].valueJ1,
                percentType1J1: Math.round((statMatch[1].valueJ1/statMatch[0].valueJ1*100)*100)/100,
                type1J2: statMatch[1].valueJ2,
                percentType1J2: Math.round((statMatch[1].valueJ2/statMatch[0].valueJ2*100)*100)/100,
                type2:"fautes de l'adversaire",
                type2J1: statMatch[5].valueJ2,
                percentType2J1: Math.round((statMatch[5].valueJ2/statMatch[0].valueJ1*100)*100)/100,
                type2J2:statMatch[5].valueJ1,
                percentType2J2 : Math.round((statMatch[5].valueJ1/statMatch[0].valueJ2*100)*100)/100,
                color1: '#87cefa',
                color2: '#0000cd',
                colorJoueur1:'#ccd731',
                colorJoueur2:'#FF3333'
        },
        {
            item: "POINTS GAGNANTS",
                valueJ1: statMatch[1].valueJ1,
                percentJ1:statMatch[1].percentJ1,
                valueJ2:statMatch[1].valueJ2,
                percentJ2:statMatch[1].percentJ2,
                type1: "Aces",
                type1J1: statMatch[2].valueJ1,
                percentType1J1: Math.round((statMatch[2].valueJ1/statMatch[1].valueJ1*100)*100)/100,
                type1J2: statMatch[2].valueJ2,
                percentType1J2: Math.round((statMatch[2].valueJ2/statMatch[1].valueJ2*100)*100)/100,
                type2:"Coups droit",
                type2J1: statMatch[3].valueJ1,
                percentType2J1: Math.round((statMatch[3].valueJ1/statMatch[1].valueJ1*100)*100)/100,
                type2J2:statMatch[3].valueJ2,
                percentType2J2 : Math.round((statMatch[3].valueJ2/statMatch[1].valueJ2*100)*100)/100,
                type3: "Revers",
                type3J1: statMatch[4].valueJ1,
                percentType3J1: Math.round((statMatch[4].valueJ1/statMatch[1].valueJ1*100)*100)/100,
                type3J2: statMatch[4].valueJ2,
                percentType3J2: Math.round((statMatch[4].valueJ2/statMatch[1].valueJ2*100)*100)/100,
                color1: '#c4a35a',
                color2: '#c66b3d',
                color3: '#e5e5cd',
                colorJoueur1:'#ccd731',
                colorJoueur2:'#FF3333'
        },
        {
            item: "FAUTES DIRECTES",
                valueJ1: statMatch[5].valueJ1,
                percentJ1:statMatch[5].percentJ1,
                valueJ2:statMatch[5].valueJ2,
                percentJ2:statMatch[5].percentJ2,
                type1: "Doubles fautes",
                type1J1: statMatch[6].valueJ1,
                percentType1J1: Math.round((statMatch[6].valueJ1/statMatch[5].valueJ1*100)*100)/100,
                type1J2: statMatch[2].valueJ2,
                percentType1J2: Math.round((statMatch[6].valueJ2/statMatch[5].valueJ2*100)*100)/100,
                type2:"Coups droit",
                type2J1: statMatch[7].valueJ1,
                percentType2J1: Math.round((statMatch[7].valueJ1/statMatch[5].valueJ1*100)*100)/100,
                type2J2:statMatch[7].valueJ2,
                percentType2J2 : Math.round((statMatch[7].valueJ2/statMatch[5].valueJ2*100)*100)/100,
                type3: "Revers",
                type3J1: statMatch[8].valueJ1,
                percentType3J1: Math.round((statMatch[8].valueJ1/statMatch[5].valueJ1*100)*100)/100,
                type3J2: statMatch[8].valueJ2,
                percentType3J2: Math.round((statMatch[8].valueJ2/statMatch[5].valueJ2*100)*100)/100,
                color1: '#e9967a',
                color2: '#dc143c',
                color3: '#8b0000',
                colorJoueur1:'#ccd731',
                colorJoueur2:'#FF3333'
        },
        {
            item: "SERVICES",
                valueJ1: donneesServiceJoueur1[0].amount,
                percentJ1: Math.round((donneesServiceJoueur1[0].amount/(donneesServiceJoueur1[0].amount + donneesServiceJoueur2[0].amount)*100)*100)/100,
                valueJ2: donneesServiceJoueur2[0].amount,
                percentJ2: Math.round((donneesServiceJoueur2[0].amount/(donneesServiceJoueur1[0].amount + donneesServiceJoueur2[0].amount)*100)*100)/100,
                type1: "1er Service",
                type1J1: statJoueur1[3].valueType1,
                percentType1J1: statJoueur1[3].percentType1,
                type1J2: statJoueur2[3].valueType1,
                percentType1J2: statJoueur2[3].percentType1,
                type2:"2ème Service",
                type2J1: statJoueur1[3].valueType2,
                percentType2J1: statJoueur1[3].percentType2,
                type2J2: statJoueur2[3].valueType2,
                percentType2J2 : statJoueur2[3].percentType2,
                color1: '#66cdaa',
                color2: '#3cb371',
                colorJoueur1:'#ccd731',
                colorJoueur2:'#FF3333'
        }
    ]
    return (
        <>
        <div className="joueurs">
            <div><JoueurColor color={'#ccd731'}>{statGagnant[0].name}</JoueurColor></div>
            <div><JoueurColor color={'#FF3333'}>{statGagnant[1].name}</JoueurColor></div>
        </div>

        {statsParJoueurs.map((statJoueur)=>
        <>
        <div className="div-item">      
            <div className="item">{statJoueur.item}</div>
            <div className="categ-flex">
                <div>{statJoueur.valueJ1} {Number.isNaN(statJoueur.percentJ1)===false && <>-- {statJoueur.percentJ1}%</>}</div>
                <div>{statJoueur.valueJ2} {Number.isNaN(statJoueur.percentJ2)===false && <>-- {statJoueur.percentJ2}%</>}</div>
            </div>
            <div className="categ-absolute">
                {Number.isNaN(statMatch[0].percentJ1)===false &&
                <>
                <DivPercent width={statJoueur.percentJ1} color={statJoueur.colorJoueur1}></DivPercent>
                <DivPercent width={statJoueur.percentJ2} color={statJoueur.colorJoueur2}></DivPercent>
                </>
                }
            </div>
        </div>
        <div className="detail-stats-joueurs">
        
            <div className="div-item">
                
                <div className=" categ-absolute">
                    {statJoueur.type1J1!==0 && <DivPercent width={statJoueur.percentType1J1} color={statJoueur.color1}></DivPercent>}
                    {statJoueur.type2J1!==0 && <DivPercent width={statJoueur.percentType2J1} color={statJoueur.color2}></DivPercent>}
                    {statJoueur.type3 && statJoueur.type3J1!==0 &&
                    <DivPercent width={statJoueur.percentType3J1} color={statJoueur.color3}></DivPercent>
                    }
                </div>
                <p className="legende">
                    <SpanTextLegend textalign="left">{statJoueur.type1}<SpanLegende color={statJoueur.color1}></SpanLegende><br/>
                    {statJoueur.type1J1!==0 && <div>{statJoueur.type1J1} {Number.isNaN(statJoueur.percentType1J1)===false && <>-- {statJoueur.percentType1J1}%</>}</div>}</SpanTextLegend>
                    
                    {!statJoueur.type3&&
                    <SpanTextLegend textalign="right">{statJoueur.type2}<SpanLegende color={statJoueur.color2}></SpanLegende><br/>
                    {statJoueur.type2J1!==0 && <div>{statJoueur.type2J1} {Number.isNaN(statJoueur.percentType2J1)===false && <>-- {statJoueur.percentType2J1}%</>}</div>}</SpanTextLegend>}
                    
                    {statJoueur.type3&&
                    <>
                    <SpanTextLegend textalign="center">{statJoueur.type2}<SpanLegende color={statJoueur.color2}></SpanLegende><br/>
                    {statJoueur.type2J1!==0 && <div>{statJoueur.type2J1} {Number.isNaN(statJoueur.percentType2J1)===false && <>-- {statJoueur.percentType2J1}%</>}</div>}</SpanTextLegend>
                    <SpanTextLegend textalign="right">{statJoueur.type3}<SpanLegende color={statJoueur.color3}></SpanLegende><br/>
                    {statJoueur.type3J1!==0 && <div>{statJoueur.type3J1} {Number.isNaN(statJoueur.percentType3J1)===false && <>-- {statJoueur.percentType3J1}%</>}</div>}</SpanTextLegend>
                    </>}
                </p>
            </div>
            <div className="div-item">
                
                <div className="categ-absolute">
                    {statJoueur.type3 && statJoueur.type3J2!==0 &&
                    <DivPercent width={statJoueur.percentType3J2} color={statJoueur.color3}></DivPercent>
                    }
                    {statJoueur.type2J2!==0 && <DivPercent width={statJoueur.percentType2J2} color={statJoueur.color2}></DivPercent>}
                    {statJoueur.type1J2!==0 && <DivPercent width={statJoueur.percentType1J2} color={statJoueur.color1}></DivPercent>}
                </div>
                <p className="legende">
                    {statJoueur.type3 &&
                    <>
                    <SpanTextLegend textalign="left"><SpanLegende color={statJoueur.color3}></SpanLegende>{statJoueur.type3}<br/>
                    {statJoueur.type3J2!==0 && <div>{statJoueur.type3J2} {Number.isNaN(statJoueur.percentType3J2)===false && <>-- {statJoueur.percentType3J2}%</>}</div>}</SpanTextLegend>
                    
                    <SpanTextLegend textalign="center"><SpanLegende color={statJoueur.color2}></SpanLegende>{statJoueur.type2}<br/>
                    {statJoueur.type2J2!==0 && <div>{statJoueur.type2J2} {Number.isNaN(statJoueur.percentType2J2)===false && <>-- {statJoueur.percentType2J2}%</>}</div>}</SpanTextLegend>
                    </>}
                    

                    {!statJoueur.type3&&
                    <SpanTextLegend textalign="left"><SpanLegende color={statJoueur.color2}></SpanLegende>{statJoueur.type2}<br/>
                    {statJoueur.type2J2!==0 && <div>{statJoueur.type2J2} {Number.isNaN(statJoueur.percentType2J2)===false && <>-- {statJoueur.percentType2J2}%</>}</div>}</SpanTextLegend>}
                    
                    <SpanTextLegend textalign="right"><SpanLegende color={statJoueur.color1}></SpanLegende>{statJoueur.type1}<br/>
                    {statJoueur.type1J2!==0 && <div>{statJoueur.type1J2} {Number.isNaN(statJoueur.percentType1J2)===false && <>-- {statJoueur.percentType1J2}%</>}</div>}</SpanTextLegend>
                </p>
            </div>
        </div>

        </>
        )}


        </>
    )
}
export default StatsJoueurs