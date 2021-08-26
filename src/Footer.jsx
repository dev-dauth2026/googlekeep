import React from 'react';

const Footer=()=>{
    const date=new Date().getFullYear();
    return(
        <>
            <footer>
                <small>Copyright ©️ {date} </small>
            </footer>
        </>
    )
}
export default Footer;