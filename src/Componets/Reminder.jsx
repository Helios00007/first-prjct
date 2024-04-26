import React, { useState } from 'react'
import './Reminder.css'
function Reminder() {
///input adikkuna value set new reminderill event vechh edukkkkukkknu ennit ath new reminderill store akkunukk
///add function clickk akunmbo setreminderillek new reminder athava event value ad akunu
//ipo value setnew reminderill ninn reminderill store ayiy then map.reminder vilich ath out put akkunuk

const [Reminder,setReminder]=useState([]);
const [Newreminder,setNewreminder]=useState('');


  const handleinputchange=(event)=>{///event function vech input function ellam fetch cheyunuu
    ///newewminterill event taget value save akkuknu ath setnew remindill store akkunu
   setNewreminder(event.target.value)
  }

const handeladdreminder=()=>{
  if(Newreminder.trim()){
    setReminder([...Reminder,Newreminder])//reminder ad akan add button click avumbo ee function work avvum
    ///setreminderill spread operator new ewminder fucntionum call avvunu add reminderill store avvum
    setNewreminder("")///ithh oru reminder vann kezhhijaj pinnea add reminder onnum illathea irikan ann
  }
}
  const handledelet=(index)=>{
    setReminder(Reminder.filter((iteam,iteamIndex) => iteamIndex !=index))

  }




  return (
    <div className='container'>
      <h1>Reminder App</h1>

  <div className='inputcntiner'>
   <input type="text" value={Newreminder} placeholder='Enter anything' 
   onChange={handleinputchange}
   />
   <button className='sty' onClick={handeladdreminder}>Add Reminder</button>
  </div>


<ul className='list'>

{
  Reminder.map((Reminder,index)=>(///ul class n ullil .map (reminder) call akunu ath ivdea show akkunu
  //vechh ith ellam list ayyyi out put kkannikan map upayyogikuknu
    <li key={index}>
     
      {Reminder}
      
     <button onClick={()=>handledelet(index)} className='dletbutton'>delete</button>

      
     
    </li>
  ))
}
</ul>


 </div>



  )
}

export default Reminder
