import { useState } from 'react';
import Outputs from './Outputs';

const Main = ({Section='section',...props}) => {
   
    const [items,setItems] = useState([]);
    const [object,setobject] = useState({
        id:0,
        foods:""
      })

      function Items(e){
    e.preventDefault();
    setItems(oldState => [...oldState,{name:object.foods,id:object.id++}]);
    setobject(element => ({...element,foods:""}))
      }

      //Edit
      function Edit(id){
        setItems(items =>{
            return items.filter(element => element.id != id)
        })
      }
    

  return (
    <Section {...props}>
        
        <div className="MainComponents">
        <h1>Grocery App</h1>
        <form onSubmit={Items}>
            <div>
                <input type="text" placeholder="Foods" value={object.foods} onChange={(e)=>setobject(element =>{
                     return{
                        ...element,
                        ["foods"]:e.target.value
                     }
                })} />
            </div>
            <button type="submit">Add</button>

        </form>
        </div>
        
        <Outputs id="output" items={items} Edit={Edit} setItems={setItems}/>
    </Section>
  )
}

export default Main