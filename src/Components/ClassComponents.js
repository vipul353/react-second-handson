import React, { Component } from 'react'
import './style.css';

export default class ClassComponents extends Component {
    state = {
        name:'',
        dept:'',
        rate:'',
        EmpData:[]

    }
   
    changeHandle=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }

 clickHnadle=(e)=>{
    e.preventDefault();
    this.state.EmpData.push(
        {
            name:this.state.name,
            dept:this.state.dept,
            rate:this.state.rate
        }
    )
    this.setState({EmpData:this.state.EmpData})
    console.log(this.state.EmpData);
   }
  render() {
    return (
    <div>
       <form className='formHandle'>
        <label htmlFor='name' >
            Name:
            <input name='name' id='name' type='text' className='name' value={this.state.name} onChange={this.changeHandle}>
            </input>
        </label>
        <label htmlFor='dept' >
            Department:
            <input name='dept' id='dept' type='text' className='name' value={this.state.dept} onChange={this.changeHandle}>
            </input>
        </label>
        <label htmlFor='rate' >
            Rating:
            <input name='rate' id='rate' type='number' className='name'value={this.state.rate} onChange={this.changeHandle}>
            </input>
        </label>

        <button className='button' onClick={this.clickHnadle}>Submitt</button>
       </form>
       <div className='cards'>
         {
          this.state.EmpData.length>0&& this.state.EmpData.map(
            (items,index)=>{
               return(
                <div key={index} className='card'>
                   <p style={{margin:"0"}}>Name:{items.name}|Department:{items.dept}|Rate:{items.rate}</p>
                </div>
               ) 
            }
          )
         }
       </div>
    </div>
    )
  }
}
