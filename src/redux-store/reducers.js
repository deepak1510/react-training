
const reducers = function(state={count:4},action){
    console.log("reducers is called {}",action)
    return state;
}

export default reducers;