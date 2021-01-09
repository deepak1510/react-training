import React from 'react';
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
                    age :30
                },
            users :[]
        }
    }
    save = (event) =>{
     //   this.state.users.push(this.state.user)
        this.setState({
            users:[...this.state.users,this.state.user]
        })
    };
    onChangeHandleEvent = (event)=>{
        this.setState ({ //to rerender, call setState
            user :{...this.state.user, [event.target.name] : event.target.value}
         //   user :Object.assign(this.state.user, {[event.target.name] : event.target.value})
        });
    };
    render (){
        return (
            <div>
                <input value={this.state.user.fname} name="fname" onChange={this.onChangeHandleEvent} 
                    placeholder={this.props.lable}  style={{background:this.props.color}}></input>
                <input value={this.state.user.age} name="age"
                    onChange={this.onChangeHandleEvent}                
                placeholder="first name copy" style={{background:this.props.color}}></input>
                
                <button onClick={this.save}>Save</button>
                <table>
                    <thead>
                        <th>
                            First name
                        </th>
                        <th>
                            Age
                        </th>
                    </thead>
                    <tbody>
                       {this.state.users.map((user) =>{
                           return <tr>
                               <td>
                                   {user.fname}
                               </td>
                               <td>
                                   {user.age}
                               </td>
                           </tr>
                       })}
                    </tbody>
                </table>
            </div>
        )
    }
}