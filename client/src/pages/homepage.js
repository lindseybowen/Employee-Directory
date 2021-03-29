import React, { Component  } from "react"
import Api from "../utils/app"
import Table from "../components/table"
import Search from "../components/search"
class Homepage extends Component{
    state = {
      peopleApiList:[]
   
   
    }
   
    componentDidMount(){
         Api.getRandomPeople().then(response=>{
           
             this.setState({peopleApiList:response.data.results}) 
         })
    }

    handleSort=event=>{
        const newList=this.state.peopleApiList.sort((a,b)=>{
            return a.name.last.localeCompare(b.name.last)
        })
        
        this.setState({peopleApiList:newList})
    }
    render(){
        return(
             <>
             <Search/>

                <Table peopleApiList={this.state.peopleApiList}  handleSort={this.handleSort}  />  

             </>

        )
    }


}

export default Homepage