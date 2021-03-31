import React from "react";
// props={
//     peopleApiList
//      handleSort
// }
function Table(props) {
  return (
    <>
      {/* <h1>  {props.peopleApiList.length > 0  ?  props.peopleApiList[0].name.first: "" }  </h1>
        <img src={props.peopleApiList.length > 0  ?  props.peopleApiList[0].picture.thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png"} /> */}
    <div class="container">
    <table className="table">
        <thead>
          <tr>
            <th scope="col">Last</th>
            <th scope="col" onClick={props.handleSort}>First</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Location</th>
            <th scope="col">Picture</th>
          </tr>
        </thead>
        <tbody>
            {console.log(props.peopleApiList)}
            {props.peopleApiList.length>0?  props.peopleApiList.map(person=>{
                 return (
                    <tr>
                    <th scope="row">{person.name.first}</th>
                    <td>{person.name.last}</td>
                    <td>{person.email}</td>
                    <td>{person.phone}</td> 
                    <td>{person.location.state}</td> 
                    <td> <img  src= {person.picture.medium} alt=""/> </td>
                  </tr>
                 )
            })   :  <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td> 
            <td>@mdo</td>
          </tr> }
          
         
        </tbody>
      </table>
      </div>
    </>
     
  );
 
}

export default Table;
