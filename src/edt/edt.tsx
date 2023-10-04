import './edt.css'

type Props = {
    showOption: () => void
    data: any
}

const Edt: React.FC<Props> = ({showOption, data}) => {


    const JSXOfDay = (year: string, month: string, day: string) => {

        const dayClasses = (year: string, month: string, day: string) => {
            return data.filter(
                (d: { day: { year: string; month: string; day: string } }) =>
                d.day.year === year && d.day.month === month && d.day.day === day)
            }
        
        const mondayClassesList = dayClasses(year, month, day)

        const sortedClasses = mondayClassesList.toSorted((a: any, b: any) =>
            a.start.hour === b.start.hour ? a.start.minutes - b.start.minutes : a.start.hour - b.start.hour
        )

        const mondayClasseTimes = sortedClasses.map((c: any) => {
            const startTime: {hour: string, minutes: string} = c.start
            const endTime: {hour: string, minutes: string} = c.end

            if(parseInt(endTime.hour) < parseInt(startTime.hour) || (endTime.hour == startTime.hour && parseInt(endTime.minutes) < parseInt(startTime.minutes))) console.error('mondayClassesFifteens')

            const oneHourLess: boolean = endTime.minutes < startTime.minutes
            let hour = parseInt(endTime.hour) - parseInt(startTime.hour)
            if(oneHourLess) hour--

            const minutes = oneHourLess ? 60 - parseInt(startTime.minutes) + parseInt(endTime.minutes) : parseInt(endTime.minutes) - parseInt(startTime.minutes)

            const stringHour = hour.toString()
            const stringMinutes = minutes.toString()

            return {stringHour, stringMinutes}
        })

        const fifteenInTimes = (listOfClasses: any) => listOfClasses.map((c: {stringHour: string, stringMinutes: string}) => {
            return parseInt(c.stringHour) * 4 + Math.floor(parseInt(c.stringMinutes) / 15)
        })

        const fifteenMondayClasseTimes = fifteenInTimes(mondayClasseTimes)


        const coursJSX: any = (i: number) => {
            return <div className='cours' style={{height: `calc(((100% - 7vw) / (11 * 4)) * ${fifteenMondayClasseTimes[i]} + (2px * ${fifteenMondayClasseTimes[i] - 1} - 1px))`}}>
                {sortedClasses[i].summary.data}
                <br />
                {sortedClasses[i].location.data}
            </div>
        }

        const arrayOfSpaceNumber = (startTime: {hour: string, minutes: string}, endTime: {hour: string, minutes: string}) => {

            if(parseInt(endTime.hour) < parseInt(startTime.hour) || (endTime.hour == startTime.hour && parseInt(endTime.minutes) < parseInt(startTime.minutes))) console.error('mondayClassesFifteens')

            const oneHourLess: boolean = endTime.minutes < startTime.minutes
            let hour = parseInt(endTime.hour) - parseInt(startTime.hour)
            if(oneHourLess) hour--

            const minutes = oneHourLess ? 60 - parseInt(startTime.minutes) + parseInt(endTime.minutes) : parseInt(endTime.minutes) - parseInt(startTime.minutes)

            const stringHour = hour.toString()
            const stringMinutes = minutes.toString()

            const fifteenInTimes = parseInt(stringHour) * 4 + Math.floor(parseInt(stringMinutes) / 15)

            let numberList = []
            for(let i = 0; i < fifteenInTimes; i++){
                numberList.push(i)
            }
            return numberList
        }

        const timeLapse = (i: number) => {
            const firstHour = i <= 0 ? {hour: '08', minutes: '00'} : sortedClasses[i - 1].end

            return <>
                {arrayOfSpaceNumber(firstHour, sortedClasses[i].start).map(() => <div className='case'></div>)}
                {coursJSX(i)}
            </>
        }

        const allHours = () => {
            let numberList = []
            for(let i = 0; i < sortedClasses.length; i++){
                numberList.push(i)
            }

            return <>
                {numberList.map(i => timeLapse(i))}
                {arrayOfSpaceNumber(sortedClasses[sortedClasses.length - 1].end, {hour: '19', minutes: '00'}).map(() => <div className='case'></div>)}
            </>
        }
        
        return <>
            {allHours()}
        </>
    }

    return (
    <div className="edt">
        <div className='infoBarre'>

            <div className='weekSelector'>
                <button className='changeWeek lastWeek'>
                    <div className='arrow arrowLeft'></div>
                </button>
                Semaine du 25 septembre au 1 octobre
                <button className='changeWeek nextWeek'>
                    <div className='arrow arrowRight'></div>
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
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F3DE8A'}}>Lundi 25/09</p>
                </div>
                {JSXOfDay('2023', '09', '25')}
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F4D796'}}>Mardi 26/09</p>
                </div>
                {JSXOfDay('2023', '09', '26')}
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F4CFA5'}}>Mercredi 27/09</p>
                </div>
                {JSXOfDay('2023', '09', '27')}
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F4CFA5'}}>Jeudi 28/09</p>
                </div>
                {JSXOfDay('2023', '09', '28')}
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F4CBAB'}}>Vendredi 29/09</p>
                </div>
                {JSXOfDay('2023', '09', '29')}
            </div>
        </div>
    </div>
    );
}

export default Edt;