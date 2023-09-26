import './App.css';
import Edt from './edt/edt';
import Message from './message/message';

function App() {

  return (
    <div className="App">
      <Edt/>
      <Message
        type = {'green'}
      />
    </div>
  );
}

export default App;