import React from 'react';
import { BackendService } from '../../backend-service';
import "./userform.css"

// export function Userform(props){
//     return(
//         <input placeholder={props.lable}
//         style={{background:props.color}}></input>
//     )
// }

export class Userform extends React.Component{
    constructor(){ //only one constructor allow per class
        super();
        this.state ={
            user :{
                    fname : 'Deepak',
                    age :30,
                    salary:200
                },
            users :[]
        }
    }
    save = (event) =>{
     //   this.state.users.push(this.state.user)
        BackendService.saveUser(this.state.user, (response) =>{
            this.setState({
                users:[...this.state.users,Object.assign({},this.state.user)]
            })
        }).fail((error) =>{
            alert("something went wrong, please retry");
        });
        
    };
    deleteUser = (index) =>{
        console.log(this,index);
        const dicision = window.confirm("Are you sure");
        if(!dicision){
            return;
        }
        this.state.users.splice(index,1)
         this.setState({
             users:this.state.users
         })
    };
    onChangeHandleEvent = (event)=>{
        this.setState ({ //to rerender, call setState
           // user :{...this.state.user, [event.target.name] : event.target.value}
            user :Object.assign(this.state.user, {[event.target.name] : event.target.value})
        });
    };
    render (){
        const userModel = this.state.user;
        return (
            <div>
                <input value={userModel.fname} name="fname" onChange={this.onChangeHandleEvent} 
                    placeholder={this.props.lable}  style={{background:this.props.color}}></input>
                <input value={this.state.user.age} name="age"
                    onChange={this.onChangeHandleEvent}                
                placeholder="Age" style={{background:this.props.color}}></input>
                <input value={this.state.user.salary} name="salary"
                    onChange={this.onChangeHandleEvent}                
                placeholder="Salary" style={{background:this.props.color}}></input>
                <button onClick={this.save}>Save</button>
                
                <table>
                    <thead>
                        <th>First name</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </thead>
                    <tbody>
                       {this.state.users.map((user,index) =>{
                           return <tr>
                               <td>{user.fname}</td>
                               <td>{user.age}</td>
                               <td>{user.salary}</td>
                               <td><button id={index} onClick={this.deleteUser.bind(this,index)}>Delete</button></td>
                           </tr>
                       })}
                    </tbody>
                </table>
            </div>
        )
    }
}