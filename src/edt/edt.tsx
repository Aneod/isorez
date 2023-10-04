import dayjs from 'dayjs'
import './edt.css'
import { useState } from 'react'

type Props = {
    showOption: () => void
    data: any
}

const Edt: React.FC<Props> = ({showOption, data}) => {

    let [weekNumber, setWeekNumber] = useState(0)

    const JSXOfDay = (year: string, month: string, day: string) => {

        let summerHour: boolean = true
        if(parseInt(month) >= 10 || parseInt(month) <= 3){
            if(parseInt(month) === 10 && parseInt(day) >= 29){
                summerHour = false
            }
            else if(parseInt(month) === 3 && parseInt(day) <= 26){
                summerHour = false
            }
            else if(parseInt(month) > 10 || parseInt(month) < 3){
                summerHour = false
            }
        }

        const dayClasses = (year: string, month: string, day: string) => {
            return data.filter(
                (d: { day: { year: string; month: string; day: string } }) =>
                d.day.year === year && d.day.month === month && d.day.day === day)
            }
        
        let mondayClassesList = dayClasses(year, month, day)

        let summerMondayClassesList: any[] = []
        if(!summerHour){
            mondayClassesList.map((c: any) => {

                summerMondayClassesList.push({
                    start: {hour: (parseInt(c.start.hour) - 1).toString(), minutes: c.start.minutes},
                    end: {hour: (parseInt(c.end.hour) - 1).toString(), minutes: c.end.minutes},
                    summary: c.summary,
                    location: c.location,
                    day: c.day,
                })
            })

            mondayClassesList = summerMondayClassesList
        }

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


        const makeClassColor = (name: string) => {
            switch (name){
                case 'ALG2': return '#cd9657'
                case 'AlgLin': return '#e1933a'
                case 'RES': return '#c7b7a4'
                case 'OFI': return '#f6cc98'
                case 'PO': return '#bc8037'
                case 'Anglais': return '#d1b13c'
                case 'WEB': return '#5da3c3'
                case 'EN2': return '#2eb97d'
                default: return '#F4CFA5'
            }
        }


        const coursJSX: any = (i: number) => {
            const color = makeClassColor(sortedClasses[i].summary.data.split(' ')[0])
            return <div className='cours' style={{backgroundColor: color, height: `calc(((100% - 7vw) / (11 * 4)) * ${fifteenMondayClasseTimes[i]} + (2px * ${fifteenMondayClasseTimes[i] - 1} - 1px))`}}>
                {sortedClasses[i].summary.data}
                <br />
                {sortedClasses[i].location.data}
            </div>
        }

        const arrayOfSpaceNumber = (startTime: {hour: string, minutes: string}, endTime: {hour: string, minutes: string}) => {

            if(parseInt(endTime.hour) < parseInt(startTime.hour) || (endTime.hour === startTime.hour && parseInt(endTime.minutes) < parseInt(startTime.minutes))) console.log(startTime, endTime)

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

            if(sortedClasses.length === 0){
                return <>
                    {arrayOfSpaceNumber({hour: '08', minutes: '00'}, {hour: '19', minutes: '00'}).map(() => <div className='case'></div>)}
                </>
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

    let day: any = dayjs()

    day = day.add(weekNumber, 'week')

    let monday: any = day
    if(day.$W >= 1 && day.$W <= 5){
        monday = day.add(-(day.$W - 1), 'day')
    }
    else{
        if(day.$W == 0){
            monday = day.add(1, 'day')
        }
        else{
            monday = day.add(2, 'day')
        }
    }

    const stringifyDay = (day: any) => {
        return {
            year: day.$y.toString(),
            month: (day.$M + 1).toString(),
            day: day.$D < 10 ? '0' + day.$D : day.$D.toString()
        }
    }

    const daysOfWeek = []
    for(let i = 0; i < 5; i++){
        daysOfWeek.push(stringifyDay(monday.add(i, 'day')))
    }

    const whichDay = (i: number) => {
        return ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'][i]
    }

    const twoNumberForString = (numberString: string) => parseInt(numberString) < 10 ? '0' + numberString : numberString

    const getTitleDay = (i: number, daysOfWeek: any) => `${whichDay(i)} ${daysOfWeek[i].day} / ${twoNumberForString(daysOfWeek[i].month)}`

    const getDays = (i: number, daysOfWeek: any) => {
        return JSXOfDay(daysOfWeek[i].year, daysOfWeek[i].month, daysOfWeek[i].day)
    }

    const getTitleWeek = (daysOfWeek: any) => {
        return `Semaine du ${daysOfWeek[0].day} / ${twoNumberForString(daysOfWeek[0].month)} au ${daysOfWeek[4].day} / ${twoNumberForString(daysOfWeek[4].month)}`
    }

    return (
    <div className="edt">
        <div className='infoBarre'>
            <button className='filter' onClick={showOption}>Filtrage</button>

            <div className='weekSelector'>
                <button className='changeWeek lastWeek'>
                    <div className='arrow arrowLeft' onClick={() => setWeekNumber(--weekNumber)}></div>
                </button>
                {getTitleWeek(daysOfWeek)}
                <button className='changeWeek nextWeek'>
                    <div className='arrow arrowRight' onClick={() => setWeekNumber(++weekNumber)}></div>
                </button>
            </div>
            <button className='currentWeek' onClick={() => setWeekNumber(0)}>Aujourd'hui</button>
        </div>
        <div className='week'>
            <div className='hours'>
                <div className='case' style={{backgroundColor: 'white', zIndex: -1}}></div>
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
                    <p  className='dateText' style={{backgroundColor: '#F3DE8A'}}>{getTitleDay(0, daysOfWeek)}</p>
                </div>
                {getDays(0, daysOfWeek)}
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F4D796'}}>{getTitleDay(1, daysOfWeek)}</p>
                </div>
                {getDays(1, daysOfWeek)}
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F4CFA5'}}>{getTitleDay(2, daysOfWeek)}</p>
                </div>
                {getDays(2, daysOfWeek)}
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F4CFA5'}}>{getTitleDay(3, daysOfWeek)}</p>
                </div>
                {getDays(3, daysOfWeek)}
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: 'inherit'}}>
                    <p  className='dateText' style={{backgroundColor: '#F4CBAB'}}>{getTitleDay(4, daysOfWeek)}</p>
                </div>
                {getDays(4, daysOfWeek)}
            </div>
        </div>
    </div>
    );
}

export default Edt;