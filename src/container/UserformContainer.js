import Counter from "../component/Counter";
import { Userform } from "../component/userform/userform";

export function UserformContainer(props){
 return (
    <span>
        <Userform></Userform>
        <Counter ></Counter>
    </span>

 )
}