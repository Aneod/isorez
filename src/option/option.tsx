import React from 'react'
import './option.css'

type Props = {
    apply: () => void
    displayOption: string
}

const Option: React.FC<Props> = ({apply, displayOption}) => {

    return <div className="option" style={{display: displayOption}}>
        <div className='panel'>

            <h1 style={{fontSize: 18}}>Changement de lien : </h1>

            <p style={{fontSize: 18, marginBottom: 20}}>
                <span style={{fontWeight: 900, fontSize: 18}}>Si vous souhaitez avoir l'ensemble de vos cours sur l'appli</span>, vous pouvez obtenir le lien correspondant depuis un ordinateur
                (ctrl + clic pour sélectionner plusieurs fichier en même temps), puis l'ajouter dans le champs ci-dessous.
            </p>

            <input type="text"/>

            <button className='buttonApply' onClick={apply} style={{fontSize: 18}}>Appliquer</button>
        </div>
    </div>
}

export default Option