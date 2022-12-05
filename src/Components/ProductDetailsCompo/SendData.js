import { accountsUrl } from "../../Deployed-server-url/deployed-server-url"

export const SendDataOnCart = (data, size, user) => {
    console.log(user,"user")
    console.log(data,"user")
    let cart = user[0].cart;
    
    const product1 =false;
    cart.map((el)=>{
        if(el.id ==data.id&&el.sizes==size){
             let quantity=el.quantity
             el.quantity=quantity+1;
             fetch(`${accountsUrl}/${user[0].id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "PATCH",
                body: JSON.stringify({ cart })
            })
             }
    })
   
    if (product1==false) {
        const newobj = { ...data, sizes: size ,quantity :1}
        console.log(user[0])
        cart.push(newobj)
        fetch(`${accountsUrl}/${user[0].id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify({ cart })
        })
    }
}
export const SendDataOnWishList = (data, size, user) => {
    const newobj = { ...data, sizes: size }
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
