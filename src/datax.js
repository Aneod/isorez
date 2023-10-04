import stringData from './data.js'

const data = stringData.split('\n')
const normaliseData = data.map(d => {
    const [dName, dData] = d.split(':')
    return {name: dName, data: dData}
})

const usefullData = normaliseData.filter(nd => ['DTSTART', 'DTEND', 'SUMMARY', 'LOCATION'].includes(nd.name))

const usefullDataDTSTART = usefullData.filter(ud => ud.name == 'DTSTART')
const usefullDataDTEND = usefullData.filter(ud => ud.name == 'DTEND')
const usefullDataSUMMARY = usefullData.filter(ud => ud.name == 'SUMMARY')
const usefullDataLOCATION = usefullData.filter(ud => ud.name == 'LOCATION')

const add2hours = (stringHour) => {
    const intHour = parseInt(stringHour)
    const realHour = intHour + 2
    const newStringHour = realHour.toString()

    return newStringHour
}

const normaliseDTSTART = usefullDataDTSTART.map(d => {
    return {
    hour: add2hours(d.data.slice(9, 11)),
    minutes: d.data.slice(11, 13),
    }})

const normaliseDTEND = usefullDataDTEND.map(d => {
    return {
    hour: add2hours(d.data.slice(9, 11)),
    minutes: d.data.slice(11, 13),
    }})

const days = usefullDataDTSTART.map(d => {
    return {
    year: d.data.slice(0, 4),
    month: d.data.slice(4, 6),
    day: d.data.slice(6, 8),
    }
})

const regroupedUsefulData = usefullDataSUMMARY.map((d, i) => {
    return {
    start: normaliseDTSTART[i],
    end: normaliseDTEND[i],
    summary: usefullDataSUMMARY[i],
    location: usefullDataLOCATION[i],
    day: days[i]
    }})

export default regroupedUsefulData