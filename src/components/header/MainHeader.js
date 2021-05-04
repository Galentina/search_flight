import React from 'react';


function MainHeader(props){

    const {title} = props;

    return (
        <div>
            <div><br/>
            <h2 >{title}</h2>
            </div>

        </div>
    )
}


export default MainHeader;
