import { accountsUrl } from "../../Deployed-server-url/deployed-server-url"

export const SendDataOnCart = (data, size,user) => {
    const newobj = { ...data, sizes: size }
     if(user.length>0){
        console.log(user[0])
        let cart = user[0].cart;
        cart.push(newobj)
        const updateduser = { ...user[0], cart: cart }
        console.log(updateduser, "cart ")
        fetch(`${accountsUrl}/${user[0].id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify({ cart })
        })
    }
    else { return alert("login first") }
    
}
export const SendDataOnWishList = (data, size,user) => {
    const newobj = { ...data, sizes: size }
         console.log(user)
        let wishlist = user[0].wishlist;
        wishlist.push(newobj)
        fetch(`${accountsUrl}/${user[0].id}`, {
            method: "PATCH",
            body: JSON.stringify({ wishlist }),
            headers: {
                "Content-Type": "application/json"
            },
        })

}
