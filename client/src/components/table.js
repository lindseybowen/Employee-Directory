import React from "react"

function Table (props){
    
    return (
        <>
        <h1>  {props.peopleApiList.length > 0  ?  props.peopleApiList[0].name.first: "" }  </h1>
        <img src={props.peopleApiList.length > 0  ?  props.peopleApiList[0].picture.thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png"} />
        </>
    )
}


export default Table 