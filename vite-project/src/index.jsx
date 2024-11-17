import {useState} from React;

function cel({celcius,onCelcius}){
  
  return (
    <div>
      <label >
        celcius = {" "}
        <input type="number" value={celcius} 
         onchange = {(e)=> onCelcius(e.target.value)}
        />

      </label>
    </div>
  )

}

function feranite({fer,onFer}){

  return (
    <div>
      <label >
        value = {fer}
        onChange = {(e)=>onFer(e.target.value)}
      </label>
    </div>
  )
}

function TempConvertor(){
  const [cel,setCel] = useState("")
  const [fer,setFer]= useState("")

  //handle celsius input change
  const handleCelsiusChange = (value)=>{
    setCel(value);
    const ferval = value ? (value * 9) /5 +32:"";
    setFer(ferval)
  }

  const handleFerChange = (value) =>{
    setFer(value);
    const celVal = (value)? (value - 32)*5/9:"";
    setCel(celVal)
  }
}