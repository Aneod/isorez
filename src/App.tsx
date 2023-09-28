import './App.css';
import Edt from './edt/edt';
import Message from './message/message';
import Option from './option/option';
import { useState } from 'react';
import data from './monfichier.json'

function App() {

  const [displayOption, setDisplayOption] = useState('none')

  const apply = () => {
    setDisplayOption(displayOption === 'none' ? 'flex' : 'none')
  }

  return (
    <div className="App">
      <Edt
        data = {data}
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