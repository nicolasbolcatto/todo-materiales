# Todo Materiales

This is an e-commerce web app, designed to complete my first course on React. It is based on a construction materials e-commerce, where several
categories are included for the customer to choose.

## Main functionality

The app is able to perform several tasks:

1) Show a list of products, which are rendered from a query to a Firebase database collection called "items".
2) Show a list of products filtered by category.
3) Show a detail of a selected product, along with price, description, image and available stock.
4) Use conditional rendering to allow adding items to the cart and then showing a button to see the cart detail.
5) Handle the cart state with useContext.
6) Use react-router-dom to define routes for each component/section of the app.
7) Remove items from cart.
8) Empty the whole cart.
9) Send an order for the selected items in the cart, by entering contact details (name, email and phone number).

When the order is confirmed, details are registered in a new Firebase collection called "orders", and stocks are updated on the original "items" collection. If you check it out, the stocks for the selected items in the cart will be reduced when the order is confirmed.

## Details

In this case, the use of Boostrap and SCSS was avoided, so as to focus on React components. In the future, improvements might be made to the UI.

An extra fun feature is the use of an array of logos to show up on the Loading component, which is rendered when a new query is made to the database. Each time re-rendering occurs, a random choice of logo is made, so you'll get different loading logos everytime.
