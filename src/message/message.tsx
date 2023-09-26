import './message.css'

type Props = {
    type: string,
}

const Message: React.FC<Props> = ({type}) => {
    return <div className="message" style={{opacity: opacityForColor(type), backgroundColor: colorMessage(type)[0]}}>
        {contentMessage(type)}
        <div className='timerMessage' style={{backgroundColor: colorMessage(type)[1]}}></div>
    </div>
}

const contentMessage = (type: string) => {
    switch (type){
        case 'green':
            return 'Données correctement mises à jour.'
        
        case 'orange':
            return 'Dernière mise à jour il y a 1 heure.'

        case 'red':
            return 'Impossible de charger les données. Vérifier votre connexion ou réessayer plus tard.'

        default:
            return ''
    }
}

const colorMessage = (type: string) => {
    switch (type){
        case 'green':
            return ['rgb(164, 208, 153)', 'rgb(3, 97, 21)']
        
        case 'orange':
            return ['rgb(216, 217, 186)', 'rgb(198, 182, 57)']

        default:
            return ['rgb(210, 156, 145)', 'rgb(156, 42, 19)']
    }
}

const opacityForColor = (type: string) => {
    const colors = ['green', 'orange', 'red']
    return colors.includes(type) ? '1' : '0'
}


export default Message;