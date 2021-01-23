import { connect } from "react-redux"


export function Counter(props){
    return (
        <span>
            count : {props.countfromReduxStore.count}
        </span>
    )
}

const counterData = function(storeState){
    return {
        countfromReduxStore: storeState.counter
    }
}

export default connect(counterData,null)(Counter)