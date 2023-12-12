import {useState} from 'react'
import Converter from './converter';
import Converter2 from './converter2';

function App() {
    const [index, setIndex] = useState("0");
    const onSelect = (event) => {
      setIndex(event.target.value);
    };


  return (
   <>
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />    
	  {/*{} 없이 쓰면 javascript로 인식하지 못하고 텍스트로 인식*/}
      {index === "0" ? <Converter /> : null}
      {index === "1" ? <Converter2 /> : null}
    </div>
   </>
  );
}

export default App;
