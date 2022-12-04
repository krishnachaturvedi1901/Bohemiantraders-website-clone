export const SendDataOnCart = (data, size) => {
    const newobj = { ...data, sizes: size }
    fetch("http://localhost:3002/userAccounts").then((res) => { return res.json() }).then((res) => {
        let admin = true
        let user = res.filter((el) => {
            if (el.login == true) {
                admin = false
                return el
            }
        })
        if (admin) {
            alert("you add data in admin account without login")
            user[0] = res[0]
        }
        console.log(user[0])
        let cart = user[0].cart;
        cart.push(newobj)
        const updateduser = { ...user[0], cart: cart }
        console.log(updateduser, "cart ")
        fetch(`http://localhost:3002/userAccounts/${user[0].id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify({ cart })
        })
    })
}
export const SendDataOnWishList = (data, size) => {
    const newobj = { ...data, sizes: size }
    fetch("http://localhost:3002/userAccounts").then((res) => { return res.json() }).then((res) => {
        let admin = true
        let user = res.filter((el) => {
            if (el.login == true) {
                admin = false
                return el
            }
        })
        if (admin) {
            alert("you add data in admin account without login")

            user[0] = res[0]

        }
        console.log(user)
        let wishlist = user[0].wishlist;
        wishlist.push(newobj)
        fetch(`http://localhost:3002/userAccounts/${user[0].id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify({ wishlist })
        })
    })


}
