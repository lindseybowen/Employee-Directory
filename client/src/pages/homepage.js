import React, { Component  } from "react"
import Api from "../utils/app"
import Table from "../components/table"

class Homepage extends Component{
    state = {
      peopleApiList:[]
   
   
    }
   
    componentDidMount(){
         Api.getRandomPeople().then(response=>{
           
             this.setState({peopleApiList:response.data.results}) 
         })
    }
    
    render(){
        return(
             <>
                <Table peopleApiList={this.state.peopleApiList}  />  

             </>

        )
    }


}

export default Homepage