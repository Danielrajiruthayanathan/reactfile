import React,{Component} from 'react'
class Statesample extends Component{
    constructor() {
        super()
        this.state={
            msg:'sample state method'
            }
        }
        render() {
            return <h1> {this.state.msg}</h1>
        }
    }
export default Statesample