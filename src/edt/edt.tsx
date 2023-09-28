import './edt.css'

type Props = {
    showOption: () => void
    data: any
}

const Edt: React.FC<Props> = ({showOption, data}) => {

    const monday = () => {
        let mondayListCours = []
        let currentTime = [8, 0]
        let index = 0

        for(let cours of data){
            if(cours.day == 'lundi') mondayListCours.push(cours)
        }

        let trenteSixList = []
        for(let i = 0; i < 36; i++){
            trenteSixList.push(i)
        }

        return <div className='day'>
            <div className='case' style={{backgroundColor: 'inherit'}}>
                <p  className='dateText' style={{backgroundColor: '#F3DE8A'}}>Lundi 25/09</p>
            </div>
            {JSXCours(
                data[0].cours,
                data[0].location,
                data[0].start,
                data[0].end,
                data[0].day,
            )}
            {JSXCase()}
            {JSXCase()}

            {trenteSixList.map(() => {
                return JSXCase()
            })}
            
        </div>
    }

    const nextPeriod = (mondayListCurrentIndex: number, currentTime: number[]) => {
        
    }


    const JSXCours = (
        cours: string,
        location: string,
        start: number[],
        end: number[],
        day: string
    ) => {
        const fift = howMuchFifteenInCours(start, end)

        return <div className='cours' style={{height: `calc(((100% - 7vw) / (11 * 4)) * ${fift} + (2px * ${fift - 1} - 1px))`}}> {cours} {location} </div>
    }

    const howMuchFifteenInCours = (start: number[], end: number[]) => {

        const minuteStart = start[1]
        const hourStart = start[0]

        const minuteEnd = end[1]
        const hourEnd = end[0]

        if(
            isNaN(minuteEnd) ||
            isNaN(minuteStart) ||
            isNaN(hourEnd) ||
            isNaN(hourStart)
        ) return 0

        if(hourEnd < hourStart){
            return 0
        }
        if(hourEnd == hourStart){
            if(minuteEnd < minuteStart) return 0
            
            const fifteenBetween = Math.floor(minuteEnd - minuteStart / 15)
            return fifteenBetween
        }

        const bonusHours = minuteEnd < minuteStart ? 1 : 0
        const hoursBetween = hourEnd - hourStart - bonusHours

        const minutesBetween = bonusHours == 1 ? minuteEnd + 60 - minuteStart : minuteEnd - minuteStart

        const minutesFifteened = Math.floor(minutesBetween / 15)
        const hoursFifteened = Math.floor(hoursBetween * 60 / 15)

        return hoursFifteened + minutesFifteened
    }

    const JSXCase = () => {
        return <div className='case'></div>
    }

    return (
    <div className="edt">
        <div className='infoBarre'>

            <div className='weekSelector'>
                <button className='changeWeek lastWeek'>
                    <div className='arrowLeft'></div>
                </button>
                Semaine du 25 septembre au 1 octobre
                <button className='changeWeek nextWeek'>
                    <div className='arrowRight'></div>
                </button>
            </div>
            
            
            <button className='filter' onClick={showOption}>Filtrage</button>
        </div>
        <div className='week'>
            <div className='hours'>
                <div className='case' style={{backgroundColor: 'white'}}></div>
                <div className='thehour'>8h00</div>
                <div className='hour' style={{backgroundColor: '#F3DE8A'}}></div>
                <div className='thehour'>9h00</div>
                <div className='hour' style={{backgroundColor: '#F4D796'}}></div>
                <div className='thehour'>10h00</div>
                <div className='hour' style={{backgroundColor: '#F4D29F'}}></div>
                <div className='thehour'>11h00</div>
                <div className='hour' style={{backgroundColor: '#F4CFA5'}}></div>
                <div className='thehour'>12h00</div>
                <div className='hour' style={{backgroundColor: '#F4CBAB'}}></div>
                <div className='thehour'>13h00</div>
                <div className='hour' style={{backgroundColor: '#F4C9AE'}}></div>
                <div className='thehour'>14h00</div>
                <div className='hour' style={{backgroundColor: '#F4C3B7'}}></div>
                <div className='thehour'>15h00</div>
                <div className='hour' style={{backgroundColor: '#E6B9B6'}}></div>
                <div className='thehour'>16h00</div>
                <div className='hour' style={{backgroundColor: '#DBB3B3'}}></div>
                <div className='thehour'>17h00</div>
                <div className='hour' style={{backgroundColor: '#B9A0AA'}}></div>
                <div className='thehour'>18h00</div>
                <div className='hour' style={{backgroundColor: '#9C90A2'}}></div>
            </div>
            {monday()}
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F4D796'}}>Mardi 26/09</p>
                </div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F4CFA5'}}>Mercredi 28/09</p>
                </div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F4CFA5'}}>Jeudi 28/09</p>
                </div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F4CBAB'}}>Vendredi 29/09</p>
                </div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
            </div>
        </div>
    </div>
    );
}

export default Edt;
