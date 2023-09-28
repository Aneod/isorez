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

            <h1>Sélection : </h1>

            <div className='classSelector'>
                <h2>Groupe principale : </h2>

                <div className='choicesSelector'>
                    {createRadioChoice('G1', 'mainGroup')}
                    {createRadioChoice('G2', 'mainGroup')}
                    {createRadioChoice('G3', 'mainGroup')}
                    {createRadioChoice('G4', 'mainGroup')}
                    {createRadioChoice('G5', 'mainGroup')}
                    {createRadioChoice('Parcours amménagé', 'mainGroup')}
                </div>
            </div>

            <hr />

            <div className='classSelector'>
                <h2>LV1 Anglais : </h2>

                <div className='choicesSelector'>
                    {createLV1RadioChoice('G1', 'LV1Group')}
                    {createLV1RadioChoice('G2', 'LV1Group')}
                    {createLV1RadioChoice('G3', 'LV1Group')}
                    {createLV1RadioChoice('G4', 'LV1Group')}
                    {createLV1RadioChoice('G5', 'LV1Group')}
                    {createLV1RadioChoice('G6', 'LV1Group')}
                    {createLV1RadioChoice('G7', 'LV1Group')}
                </div>
            </div>

            <hr />

            <div className='classSelector'>
                <h2>LV2 : </h2>

                <div className='choicesSelector'>
                    {createRadioChoice('Espagnol', 'LV2Group')}
                    {createRadioChoice('Allemand', 'LV2Group')}
                    {createRadioChoice('Aucun', 'LV2Group')}
                </div>
            </div>

            <hr />

            <div className='classSelector'>
                <h2>Mineures S3 : </h2>

                <div className='choicesSelector'>
                    {createRadioChoice('CRA', 'mineureS3')}
                    {createRadioChoice('IGCF', 'mineureS3')}
                    {createRadioChoice('INTM', 'mineureS3')}
                    {createRadioChoice('NEC2', 'mineureS3')}
                    {createRadioChoice('SECM', 'mineureS3')}
                    {createRadioChoice('SPO', 'mineureS3')}
                </div>
            </div>

            <hr />

            <div className='classSelector'>
                <h2>Mineures S4 : </h2>

                <div className='choicesSelector'>
                    {createRadioChoice('ARIC', 'mineureS4')}
                    {createRadioChoice('FMA', 'mineureS4')}
                    {createRadioChoice('IA', 'mineureS4')}
                    {createRadioChoice('INS', 'mineureS4')}
                    {createRadioChoice('PTR', 'mineureS4')}
                    {createRadioChoice('SPA', 'mineureS4')}
                </div>
            </div>

            <button className='buttonApply' onClick={apply}>Appliquer</button>
        </div>
    </div>
}

export default Option