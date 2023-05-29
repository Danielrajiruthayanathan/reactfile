import React,{Component} from 'react'
class Statesample2 extends Component{
    constructor() {
        super()
        this.state={
            msg:'welcome'
            }
        }
        dispmsg () {
            this.setState( {
                msg:'thank you'
            })
        }
        render () {
            return (
<div>
    <h1>{this.state.msg} </h1>
    <button onClick={()=>this.dispmsg()}>submit</button>
</div>
 )
}
}
export default Statesample2
        