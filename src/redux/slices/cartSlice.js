import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItem:[],
    totalAmount:0,
    totalQuantity:0
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const newItem=action.payload;
            const existingItem=state.cartItem.find(item=>item.id===newItem.id);
            
            state.totalQuantity++

            if(!existingItem){
                state.cartItem.push({
                    id:newItem.id,
                    productName:newItem.productName,
                    quantity:1,
                    totalPrice:newItem.price,
                    image:newItem.image,
                    price:newItem.price
                })
            }
            else{
                existingItem.quantity++
                existingItem.totalPrice=Number(existingItem.totalPrice)+Number(newItem.price)
            }
                state.totalAmount=state.cartItem.reduce((total,item)=>total+ Number(item.quantity)*Number(item.price),0)
   },

   removeItem:(state,action)=>{
    const id=action.payload;
    const ExistingItem=state.cartItem.find(item=>item.id===id);
    state.totalQuantity--    
    if(ExistingItem.quantity===1){
        state.cartItem=state.cartItem.filter(item=>item.id!==id)
    
}
    else{
        ExistingItem.quantity--

    }
    state.totalAmount=state.cartItem.reduce((total,item)=>total+ Number(item.quantity)*Number(item.price),0)
   }

    }
})

export const cartActions=cartSlice.actions;

export default cartSlice.reducer;