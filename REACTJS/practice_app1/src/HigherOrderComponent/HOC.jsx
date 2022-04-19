import { Component } from "react"

export const HOC=(OriginalComponent)=>{
    //rcc
    //creating a new class component which return the original component
class NewComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
      render(){
          return(
              <div>
                 <OriginalComponent count={this.state.count} handleCount={this.handleCount}/>
              </div>
          )
      }
    }
    return(
            NewComponent  
    )
}



