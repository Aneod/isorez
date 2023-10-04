import './App.css';
import Edt from './edt/edt';
import Message from './message/message';
import Option from './option/option';
import { useState } from 'react';
import data from './monfichier.json'

import regroupedUsefulData from './datax';

function App() {

  const [displayOption, setDisplayOption] = useState('none')

  const apply = () => setDisplayOption(displayOption === 'none' ? 'flex' : 'none')


  // const url = 'https://planning.univ-rennes1.fr/jsp/custom/modules/plannings/6YPq81nv.shu'

  // fetch(url)
  //   .then(response => {
  //     if(!response.ok){
  //       throw new Error('Erreur loors du téléchargement des données')
  //     }
  //     return response.text()
  //   })
  //   .then(data => {
  //     const ics_content = data
  //     console.log(ics_content)
  //   })

  return (
    <div className="App">
      <Edt
        data = {regroupedUsefulData}
        showOption = {() => apply()}
      />
      <Message
        type = {'green'}
      />
      <Option
        displayOption = {displayOption}
        apply = {() => apply()}
      />
    </div>
  );
}

export default App;