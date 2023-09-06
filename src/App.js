
import './App.css';
import {useState} from 'react';
function App() {

const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",comment:"",check:false,mode:"",favCar:""});



  function changeHandler(event){

    const {name,value,checked,type}=event.target //Destructing 

    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [name]:type==="checkbox"? checked:value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing After Submitting")
    console.log(formData)
  }


  return (
    <div className="App">
  
      <form onSubmit={submitHandler}>

        Enter First Name:<input type="text"  onChange={changeHandler} name="firstName"></input>
        <br></br>
        <br></br>

        Enter Last Name:<input type="text"  onChange={changeHandler} name="lastName"></input>

        <br></br>
        <br></br>

        <input type="email" onChange={changeHandler} name="email"></input>

        <br></br>
        <br></br>

        <textarea placeholder='Enter Your Comments' onChange={changeHandler} name="comment" value={formData.comment}></textarea>

        <br></br>
        <br></br>

        <input type="checkbox" onChange={changeHandler} name='check'  id='check' checked={formData.check}></input>

        <label htmlFor='check'>Am I Visisble</label>
        <br></br>
        <br></br>

        <fieldset>
          <legend>Mode</legend>
        <input type='radio' onChange={changeHandler} name='mode' value="Online-Mode" id='Online-Mode' checked={formData.mode==="Online-Mode"}></input>
        <label htmlFor='Online-Mode'>Online-Mode</label>

      

        <input type='radio' onChange={changeHandler} name='mode' value="Offline-Mode" id='Offline-Mode' checked={formData.mode==="Offline-Mode"}></input>
        <label htmlFor='Offline-Mode'>Offline-Mode</label>

        <br></br>
        <br></br>
        </fieldset>

        <label htmlFor='favCar' >Tell Me your Faviorite Car</label>
        <select onChange={changeHandler} name='favCar' id='favCar' 
        value={formData.favCar}>
          <option value="scorpio">Scorpio</option>
          <option value="bmw">BMW</option>
          <option value="Shift">Shift</option>
        </select>

        <br></br>
        <br></br>

        <button>Submit</button>
        

        

        


      </form>

    </div>
  );
}

export default App;
