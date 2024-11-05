import { createSlice } from '@reduxjs/toolkit'
import { StoreProducts } from '../../type'

interface NextState{
    productData: StoreProducts[];
    allProducts: StoreProducts[];
    userInfo: null | string;
}

const initialState: NextState = {
    productData: [],
    allProducts: [],
    userInfo: null
}

export const nextSlice = createSlice({
    name: 'next',
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            const exist = state.productData.find(
                (item: StoreProducts) => item.id === action.payload.id
            )
            if(!exist){
                state.productData.push(action.payload)
            }
        },
        increaseQty: (state, action) =>{
            const exist = state.productData.find(
                (item: StoreProducts) => item.id === action.payload.id
            )
            if(exist){
                exist.quantity += 1
            }
        },
        decreaseQty: (state, action) =>{
            const exist = state.productData.find(
                (item: StoreProducts) => item.id === action.payload.id
            )
            if(exist && exist.quantity > 0){
                exist.quantity -= 1
            }
        },
        deleteProduct: (state, action) =>{
            state.productData = state.productData.filter(
                (item: StoreProducts) => item.id !== action.payload
            )
        },
        addUser: (state, action) =>{
            state.userInfo = action.payload
        },
        removeUser: (state) =>{
            state.userInfo = null
        },
        setAllProducts: (state, action) =>{
            state.allProducts = action.payload
        },
        resetCart: (state) =>{
            state.productData = []
        }
    }
})

export const {addToCart, increaseQty, decreaseQty, deleteProduct, addUser, removeUser, setAllProducts, resetCart} = nextSlice.actions
export default nextSlice.reducer