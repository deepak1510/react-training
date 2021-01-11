import jquery from 'jquery';

export class BackendService{
    static saveUser(user,success){
       return jquery.post("http://localhost:4200/users",user,success);
    }

    // static deleteUser(userId,success){
    //     return jquery.ajax("http://localhost:4200/users/"+userId,{
    //         type:'delete',
    //         success
    //     },success);
    //  }

     static deleteUser(userId){
        return jquery.ajax("http://localhost:4200/users/"+userId,{
            type:'delete'
        });
     }

     static getUser(){
        return jquery.ajax("http://localhost:4200/users/",{
            type:'get'
        });
     }
}