import { useContext } from 'react';
import './App.css';
import GifModal from './component/GifModal';
import Input from './component/Input';
import { AppContext } from './context/AppContext';

function App() {

  const { gifModalStatus } = useContext(AppContext)

  return (
    <div className="App">
      <Input />
      { gifModalStatus && <GifModal />}
    </div>
  );
}

export default App;
