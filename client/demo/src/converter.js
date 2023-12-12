import {useState} from 'react'

function Converter() {
  const [amount, setAmount] = useState(0);
  const [flipped ,setFlipped] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };

  return (
    <>
    <div>
      <h1>Super Converter</h1>
    </div>
    <div>
    <label htmlFor="minutes">Minutes</label>
    <input
      value={flipped ? amount * 60 : amount}
      id = "minutes"
      placeholder='Minutes'
      type = "number"
      onChange={onChange}
      disabled={flipped}
    >
    </input>
    </div>
    <div>
    <label htmlFor="hours">Hours</label>
    <input
      value={flipped ? amount : Math.round(amount/60)}
      id = "Hours"
      placeholder='Hours'
      type = "number"
      onChange={onChange}
      disabled={!flipped}
    >
    </input>
    </div>
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>OnFlip</button>
    </div>
    </>
  );
}

export default Converter;
