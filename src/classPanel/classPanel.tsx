import React from 'react'
import './classPanel.css'

type Props = {
    apply: () => void
    displayOption: string
    data: any
    color: string
}

const ClassPanel: React.FC<Props> = ({apply, displayOption, data, color}) => {

    console.log(data)

    return <div className="classPanel" style={{display: displayOption}}>
        <div className='panel'>

            <div className='headPanel' style={{backgroundColor: color}}></div>

            <h1 style={{fontSize: 20, marginTop: 15}}>{data?.summary.data}</h1>

            <p style={{fontSize: 18}}>{data?.start.hour}h{data?.start.minutes} - {data?.end.hour}h{data?.end.minutes}</p>
            <p style={{fontSize: 18, textAlign: 'center'}}>{data?.location.data}</p>

            <button className='buttonQuit' onClick={apply} style={{fontSize: 18, marginTop: 20}}>Retour</button>
        </div>
    </div>
}

export default ClassPanel