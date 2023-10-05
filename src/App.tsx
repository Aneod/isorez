import './App.css';
import Edt from './edt/edt';
import Message from './message/message';
import Option from './option/option';
import ClassPanel from './classPanel/classPanel';
import { useState } from 'react';
import data from './monfichier.json'
import React, { TouchEvent } from 'react';

import regroupedUsefulData from './datax';

function App() {

  const [displayOption, setDisplayOption] = useState('none')
  const apply = () => setDisplayOption(displayOption === 'none' ? 'flex' : 'none')

  const [displayPanel, setDisplayPanel] = useState('none')
  const applyPanel = () => setDisplayPanel(displayPanel === 'none' ? 'flex' : 'none')

  const [whichCoursPanel, setWhichCoursPanel] = useState()
  const [colorPanel, setColorPanel] = useState('black')


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
        showClass = {(cours, color) => {
          setWhichCoursPanel(cours)
          setColorPanel(color)
          applyPanel()
        }}
      />
      <Message
        type = {'green'}
      />
      <Option
        displayOption = {displayOption}
        apply = {() => apply()}
      />
      <ClassPanel
        displayOption = {displayPanel}
        apply = {() => applyPanel()}
        data = {whichCoursPanel}
        color = {colorPanel}
      />
    </div>
  );
}

export default App;