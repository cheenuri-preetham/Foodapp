import Item from "./Item";

const initialState={
    foodItem:[]
};
export const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'addtocart':return{
            ...state,
            foodItem:[...state.foodItem,action.payload]
        }
        case "delete":return{
            ...state,
            foodItem:state.foodItem.filter((item)=>item.id!==action.payload.id)
        }
        default:return state
    }
}