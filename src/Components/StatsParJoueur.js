import '../Styles/StatsJoueurs.css'
import {DivPercent, SpanTextLegend, SpanLegende} from './StyledComponents'

function StatsParJoueur({statsParJoueurs}) {
    
    return (
        <>

        {statsParJoueurs.map((statJoueur)=>
        <>
        <div className="detail-item">{statJoueur.item}</div>
        <div className="detail-stats">
            
            <div className="div-item">
                
                <div className=" categ-absolute">
                    {statJoueur.valueType1!==0 && <DivPercent width={statJoueur.percentType1} color={statJoueur.color1}></DivPercent>}
                    {statJoueur.valueType2!==0 && <DivPercent width={statJoueur.percentType2} color={statJoueur.color2}></DivPercent>}
                    {statJoueur.type3 && statJoueur.valueType3!==0 &&
                    <DivPercent width={statJoueur.percentType3} color={statJoueur.color3}></DivPercent>
                    }
                </div>
                <p className="legende">
                    <SpanTextLegend textalign="left">{statJoueur.type1}<SpanLegende color={statJoueur.color1}></SpanLegende><br/>
                    {statJoueur.valueType1} {Number.isNaN(statJoueur.percentType1)===false && <>-- {statJoueur.percentType1}%</>}</SpanTextLegend>

                    {!statJoueur.type3&&
                    <SpanTextLegend textalign="right">{statJoueur.type2}<SpanLegende color={statJoueur.color2}></SpanLegende><br/>
                    {statJoueur.valueType2} {Number.isNaN(statJoueur.percentType2)===false && <>-- {statJoueur.percentType2}%</>}</SpanTextLegend>}

                    {statJoueur.type3&&
                    <>
                    <SpanTextLegend textalign="center">{statJoueur.type2}<SpanLegende color={statJoueur.color2}></SpanLegende><br/>
                    {statJoueur.valueType2} {Number.isNaN(statJoueur.percentType2)===false && <>-- {statJoueur.percentType2}%</>}</SpanTextLegend>
                    <SpanTextLegend textalign="right">{statJoueur.type3}<SpanLegende color={statJoueur.color3}></SpanLegende><br/>
                    {statJoueur.valueType3} {Number.isNaN(statJoueur.percentType3)===false && <>-- {statJoueur.percentType3}%</>}</SpanTextLegend>
                    </>}
                </p>
            </div>
            
        </div>

        </>
        )}


        </>
    )
}
export default StatsParJoueur