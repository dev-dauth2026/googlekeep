import { Button } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import React from 'react';

const Note=(props)=>{
    const DeleteNote=()=>{
        props.deleteItem(props.id);
    }
    return(
        <>
            
                <div className="note">
                    <h3>{props.id+1}. {props.title} </h3>
                    <p>{props.content} </p>
                    <Button style={{height:"50px",width:"5px",borderRadius:"50%"}} onClick={DeleteNote} ><DeleteOutlineIcon className="delete_icon" /> </Button>
                </div>
           
        </>
    )
}
export default Note;