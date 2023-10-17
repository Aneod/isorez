import './App.css';
import Edt from './edt/edt';
import Message from './message/message';
import Option from './option/option';
import ClassPanel from './classPanel/classPanel';
import { useState } from 'react';
import data from './data.js'
import React, { TouchEvent } from 'react';

import regroupedUsefulData from './datax';
import { resolve } from 'path';
import axios from 'axios';
import { promises } from 'dns';

function App() {

  const [displayOption, setDisplayOption] = useState('none')
  const apply = () => { setDisplayOption(displayOption === 'none' ? 'flex' : 'none') }

  const changeData = () => {
    const link = (document.querySelector('input[type=text]') as HTMLInputElement).value
    //on appelle downloadICSFile sur link
    downloadICSFile(link).then((data) => {
      const regroupedUsefulData = data
      console.log(regroupedUsefulData)
      //on met à jour regroupedUsefulData
    })
  }

  const [displayPanel, setDisplayPanel] = useState('none')
  const applyPanel = () => setDisplayPanel(displayPanel === 'none' ? 'flex' : 'none')

  const [whichCoursPanel, setWhichCoursPanel] = useState()
  const [colorPanel, setColorPanel] = useState('black')


  // const url = 'https://planning.univ-rennes1.fr/jsp/custom/modules/plannings/6YPq81nv.shu'




  // function downloadICSFile(url: string): Promise<string> {
  //   const express = require('express');
  //   const cors = require('cors');

  //   const app = express();

  //   app.use(cors());

  //   app.get('/', (req: any, res: any) => {
  //     res.send(url);
  //   });

  //   app.listen(3000, () => {
  //     console.log('Server started!');
  //   });
  //   return axios.get('http://localhost:3001').then((res: any) => res.data)

  // }

  const https = require('https');

  async function downloadICSFile(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      https.get(url, (res: any) => {
        let data = '';
        res.on('data', (chunk: string) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve(data);
        });
      }).on('error', (err: any) => {
        reject(err);
      });
    });
  }














  return (
    <div className="App">
      <Edt
        data={regroupedUsefulData}
        showOption={() => apply()}
        showClass={(cours, color) => {
          setWhichCoursPanel(cours)
          setColorPanel(color)
          applyPanel()
        }}
      />
      <Message
        type={'green'}
      />
      <Option
        displayOption={displayOption}
        apply={() => {
          apply()
          changeData()
        }
        }
      />
      <ClassPanel
        displayOption={displayPanel}
        apply={() => applyPanel()}
        data={whichCoursPanel}
        color={colorPanel}
      />
    </div>
  );
}

export default App;