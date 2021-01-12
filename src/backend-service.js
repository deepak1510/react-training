import jquery from 'jquery';
const BASE_URL ="http://localhost:4200/users/";
export class BackendService{
    static saveUser(user,success){
       return jquery.post(BASE_URL,user,success);
    }

    // static deleteUser(userId,success){
    //     return jquery.ajax("http://localhost:4200/users/"+userId,{
    //         type:'delete',
    //         success
    //     },success);
    //  }

     static deleteUser(userId){
        return jquery.ajax(BASE_URL+userId,{
            type:'delete'
        });
     }

     static getUser(){
        return jquery.ajax(BASE_URL,{
            type:'get'
        });
     }

     static getRoles(){
      return jquery.ajax("http://localhost:4200/roles/",{
          type:'get'
      });
   }
}