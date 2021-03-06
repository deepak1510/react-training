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
                    salary:200,
                    gender:'Male',
                    role:'Programmer',
                    skills:[]
                },
            users :[],
            roles : [],
            sortOrder:true
        }
        BackendService.getUser().done((response)=>{
            this.setState({
                users:response
            }) 
        });
        BackendService.getRoles().done((response)=>{
            this.setState({
                roles:response
            }) 
        });
    };
   // roles = ['Programmer','Lead','Manager'];
    // loadData(){
    //     const promiss = BackendService.getUser();
    //     promiss.done((response)=>{
    //         this.setState({
    //             users:response
    //         }) 
    //     });
    // }
    
    save = (event) =>{
     //   this.state.users.push(this.state.user)
        BackendService.saveUser(this.state.user, (response) =>{
            this.setState({
                users:[...this.state.users,response]
            })
        }).fail((error) =>{
            alert("something went wrong, please retry");
        });
        
    };
    deleteUser = (index,userId) =>{
        console.log(this,index);
        const dicision = window.confirm("Are you sure");
        if(!dicision){
            return;
        }
        const promiss = BackendService.deleteUser(userId);
        promiss.done((response) =>{
            this.state.users.splice(index,1)
            this.setState({
                users:this.state.users
            })
        });
        promiss.fail((response)=>{
            alert("Something went wrong, please retry");
        })
        console.log(promiss);
        // BackendService.deleteUser(userId,(response) =>{
        //     this.state.users.splice(index,1)
        //     this.setState({
        //         users:this.state.users
        //     })
        // })
        
    };
    searchEvent = (event) =>{
        let query = '';
        if(event.target.value.length > 0){
            query = "?fname="+event.target.value
        }
        const promiss = BackendService.searchUser(query);
        promiss.done((response) =>{
            this.setState({
                users:response
            })
        });
        promiss.fail((response)=>{
            alert("Something went wrong, please retry");
        })
        console.log(promiss);
    }
    onChangeHandleEvent = (event)=>{
        if(event.target.type = 'checkbox'){
            console.log("checkbox");
            if(event.target.checked){
                this.state.user[event.target.name].push(event.target.value);
            }else{
                let i = -1;
                this.state.user[event.target.name].map( (value, index)=> {
                    if(value == event.target.value){
                        i = index;
                    }
                });
                if(i>-1){
                    this.state.user[event.target.name].splice(i, 1);
                }    
            }
        }else{
            this.setState ({ //to rerender, call setState
            // user :{...this.state.user, [event.target.name] : event.target.value}
                user :Object.assign(this.state.user, {[event.target.name] : event.target.value})
            });
        }
    };
    
    sortAge = (event)=>{
        let sorttype = this.state.sortOrder;
        
        sorttype = !sorttype
       
        this.state.users.sort((user1,user2)=>{
            if(sorttype){              
                return user2.age-user1.age
            }else{                
                return user1.age-user2.age
            }
        });
        this.setState({
            users:this.state.users,
            sortOrder: sorttype
            
        })
        console.log("Sorted")
    }
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
                <input type="radio" checked name="gender" onChange={this.onChangeHandleEvent} value='Male'/>Male
                <input type="radio" name="gender" onChange={this.onChangeHandleEvent} value='Female'/>Female

                <input type="checkbox" name="skills" onChange={this.onChangeHandleEvent} value='React'/>React
                <input type="checkbox" name="skills" onChange={this.onChangeHandleEvent} value='Java'/>Java
                <input type="checkbox" name="skills" onChange={this.onChangeHandleEvent} value='Angular'/>Angular
               
                {this.state.roles.map((role) =>{
                    return (<span>
                        <input type="radio" value={role} onChange={this.handleEvent} name="role"/>{role}</span>
                        )
                })
                }
               

                <button onClick={this.save}>Save</button>
                
                <table>
                    <thead>
                        <th>First name
                            <input type="text" name="searchName" onChange={this.searchEvent}/>
                        </th>
                        <th onClick={this.sortAge}>Age</th>
                        <th>Salary</th>
                        <th>Role</th>
                    </thead>
                    <tbody>
                       {this.state.users.map((user,index) =>{
                           let skills = '';
                           if (Array.isArray(user['skills[]']))
                               skills = user['skills[]'].map(skill => skill + ' ');
                           return <tr>
                               <td>{user.fname}</td>
                               <td>{user.age}</td>
                               <td>{user.salary}</td>
                               <td>{user.gender}</td>
                               <td>{skills}</td>
                               <td><button id={user.id} onClick={this.deleteUser.bind(this,index,user.id)}>Delete</button></td>
                           </tr>
                       })}
                    </tbody>
                </table>
            </div>
        );
    }
}