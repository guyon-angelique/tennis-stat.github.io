import {useState} from 'react'
import {DivMid, NotSelectLink, SelectLink} from './StyledComponents'

function Nav() {
    const[section, setSection]=useState('nouveauMatch')

    return section === 'nouveauMatch' ? (
            <nav>
                <SelectLink to="/accueil" onClick={()=>setSection('nouveauMatch')}>Nouveau match</SelectLink>
                <DivMid isMatch></DivMid>
                <NotSelectLink to="/statistiques" onClick={()=>setSection('historique')}>Voir toutes les statistiques</NotSelectLink>
            </nav>
            ) : (
            <nav>
                <NotSelectLink to="/accueil" onClick={()=>setSection('nouveauMatch')}>Nouveau match</NotSelectLink>
                <DivMid isHistorique></DivMid>
                <SelectLink to="/statistiques" onClick={()=>setSection('historique')}>Voir toutes les statistiques</SelectLink>
        </nav>
                 
    )
}
export default Nav