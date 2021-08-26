import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote=(props)=>{
    const [expand, setExpand]=useState(false)
    const[note,setNote]=useState({
        title:"",
        content:"",
    })

    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setNote((preData)=>{
            return{

                ...preData,
                [name]:value,
            }
            
        })
    }

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        })

    }
    const expandIt=()=>{
        setExpand(true)
    }
    const btoNormal=()=>{
        setExpand(false)
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div" onClick={expandIt} onDoubleClick={btoNormal}>
                    <form>
                    {expand?(
                        <input name="title" onChange={InputEvent} value={note.title}   placeholder="Title" autoComplete="off" required/>
                    ):null}
                        <textarea name="content" onChange={InputEvent} value={note.content}  placeholder="Add note" required/>
                        {expand?(
                        <Button style={{height:"50px",width:"15px",borderRadius:"50%"}} type="submit" onClick={addEvent}><AddIcon className="add_icon"  /></Button>
                        ):null}
                    </form>
                </div>
            </div>

        </>
    )

}
export default CreateNote;