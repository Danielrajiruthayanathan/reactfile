import React,{Component} from 'react'
class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            car:'',
            gen:'',
            addr:'',
            hobb:''
        }

    }
namehandler=(event)=>{
    this.setState({
        name:event.target.value
    })
}
carhandler=(event)=>{
    this.setState({
        car:event.target.value
    })
}
genhandler=(event)=>{
    this.setState({
        gen:event.target.value
    })
}
addrhandler=(event)=>{
    this.setState({
      addr:event.target.value
    })
}
hobbhandler=(event)=>{
    this.setState({
        hobb:event.target.value

    })
}
submithandler=(event)=>{
    alert("NAME:"+`${this.state.name}`+
    "CAR:"+`${this.state.car}`+
    "GENDER:"+`${this.state.gen}`+
    "ADDRES:"+`${this.state.addr}`+
    "HOBBIES:"+`${this.state.hobb}`
    )
}
render(){
    return(
        <form onSubmit={this.submithandler}>
           <div>
            <label>NAME</label>
            <input type="text"  name="name" value={this.state.name} onChange={this.namehandler}></input>
            </div>
            <div>
            <label>chooes CAR</label>
           <select value={this.state.car} onChange={this.carhandler} >
            <option>ROLLS ROYALS</option>
            <option>TOYOTO</option>
            <option>ENOVO</option>
           </select>
            </div>
            <div value={this.state.gen} onChange={this.genhandler}>
            <label>GENDER</label>
            <input type="radio" name="gen" value="MALE"  />MALE
            <input type="radio" name="gen" value="FEMALE"  />FEMALE
            </div>
            <div >
            <label>ADDRESS</label>
          <textarea row="3" value={this.state.addr} onChange={this.addrhandler}> </textarea>
         
            </div>
            <div >
            <input type="checkbox"  name="hobb" value={this.state.hobb} onChange={this.hobbhandler}></input>
            <label>FORMING</label>
            <input type="checkbox"  name="hobb" value={this.state.hobb} onChange={this.hobbhandler}></input>
            <label></label>
            <input type="checkbox"  name="hobb" value={this.state.hobb} onChange={this.hobbhandler}></input>
            <label>chooes CAR</label>
            </div>
            
            <div >

            <button> SUBMIT</button>
         
            </div>
        
         </form>
    )
}
}
export default Form