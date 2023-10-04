import React from 'react'
import './option.css'

type Props = {
    apply: () => void
    displayOption: string
}

const Option: React.FC<Props> = ({apply, displayOption}) => {

    const createRadioChoice = (title: string, name: string) => {
        return <div className='choice'>
            <input type="radio" id={title} name={name} value={title}/>
            <label htmlFor={title}>{title}</label>
        </div>
    }

    const createLV1RadioChoice = (title: string, name: string) => {

        const id: string = title + 'LV1'

        return <div className='choice'>
            <input type="radio" id={id} name={name} value={title}/>
            <label htmlFor={id}>{title}</label>
        </div>
    }

    return <div className="option" style={{display: displayOption}}>
        <div className='panel'>

            <h1>Changement de lien : </h1>

            <input type="text"/>

            <button className='buttonApply' onClick={apply}>Appliquer</button>
        </div>
    </div>
}

export default Option