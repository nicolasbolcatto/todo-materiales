import React from "react";
import { createContext, useState } from "react";

//Create Cart Context
export const CartContext = createContext()

//Define component as Cart Provider
const CartProvider = ({children}) =>{
    
    //Cart state
    const [cart,setCart] = useState([])

    //Functions

    //Function that checks if a certain item is in the cart, by id
    function isInCart(id){
        return cart.some(item => item.id === id)
    }

    //Function that adds an item to the cart, if it is not yet added. Otherwise, it updates the quantity
    function addItem(item,quantity){
   
        if(isInCart(item.id)){
            let existingItemIndex = cart.findIndex(element => element.id === item.id)
            cart[existingItemIndex].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart,{id: item.id, name: item.name, price: item.price,quantity: quantity}])
        } 
    }
    
    //Function that removes an item from the cart, by it's id
    function removeItem(id){
        if(isInCart(id)){
            let existingItem = cart.find(element => element.id === id)
            let cartWithRemovedItem = []
            cart.forEach(item => {
               if(item.id != existingItem.id){
                cartWithRemovedItem.push(item)
               }
            })
            setCart([...cartWithRemovedItem])
        }
    }

    //Function that completely empties the cart
    function clear(){
        setCart([]);
    }

    console.log(cart)
    return(
        <CartContext.Provider value={{cart,addItem,removeItem,clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider