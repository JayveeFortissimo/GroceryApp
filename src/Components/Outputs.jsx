import { useState } from "react"

const Outputs = ({Output = 'div',items,Edit,setItems,...props}) => {
  
const [edit,setEdit] = useState(null);
const [news,setnews] = useState("");


function Update(id){
 
  const see = items.findIndex(element => element.id === id)
if(see !== -1){
  const updates = [...items];
   updates[see].name = news;
  setItems(updates);
}

setnews("");
}


const input = (<input type="text" placeholder="Edit" id="inputEdit" value={news} onChange={(e)=>setnews(e.target.value)} />);
const Save = "Save";

  return (
    <Output {...props}>
     {
      items.map((element,index) =>{
       
        const isEditing = edit === element.id;


        return(
          <div key={index}>

            <div className='Items'>
             
              {isEditing? input: <h3>{element.name}</h3>}
          
            <span>
              <button onClick={()=>{
                 if (isEditing) {
                  Update(element.id);
                }
                setEdit(isEditing ? null : element.id);
              }}>
                
                {edit?Save:"Edit"}</button>
            
             <button onClick={()=>Edit(element.id)}>Delete</button>
            </span>
            </div>
            
          </div>
        )
      })
     }
    </Output>
  )
}

export default Outputs