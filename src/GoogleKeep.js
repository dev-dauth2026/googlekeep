import React, { useState } from 'react';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';
import './GoogleKeep.css';
import Header from './Header';

const GoogleKeep=() =>{
  const [addItem, setAddItem]= useState([])

  const addNote=(note)=>{
    setAddItem((preData)=>{
      return [...preData,note];
    })
  }
  
  const onDelete=(id)=>{
    setAddItem((oldData)=>
    oldData.filter((currdata,indx)=>{
      return indx!==id;
    })
    );
  }


  return (
    <>
      <Header/>
      <CreateNote passNote={addNote} />
      <div className="note_div">
   
      {
        addItem.map((val,index)=>{
          return(

            <Note
              key={index}
              id ={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
         
          )
        })
      }
           
      </div>
      <Footer/>
    </>
  );
}

export default GoogleKeep;
