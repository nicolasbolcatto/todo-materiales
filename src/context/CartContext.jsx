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
            setCart([...cart,{id: item.id, name: item.name, price: item.price, quantity: quantity, image : item.image}])
        } 
    }
    
    //Function that removes an item from the cart, by it's id
    function removeItem(id){
        const filteredCart = cart.filter((item) => item.id !== id);
        setCart(filteredCart)
    }

    //Function that completely empties the cart
    function clear(){
        setCart([]);
    }

    //Function that calculates total amount of items in cart
    function totalItemsInCart() {
        const cartCopy  = [...cart]
        let total = 0
        cartCopy.forEach((item) => {
            total = total + item.quantity;
        })
        return total
    }

    //console.log(cart)
    return(
        <CartContext.Provider value={{cart,addItem,removeItem,clear,totalItemsInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider