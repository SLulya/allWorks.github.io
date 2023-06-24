class Order{
    constructor(product_name,product_price,user_email,count,delivery){
        this.product_name = product_name;
        this.product_price = product_price; 
        this.user_email = user_email; 
        this.count = count; 
        this.delivery = delivery; 
        this.submitted = false; 
        this.total_price = this.getTotalPrice();
    }
    getTotalPrice(){
        let delivery_price;
        if(this.delivery == 'Новапошта'){
            delivery_price = 70;
        } else if(this.delivery == 'Укр пошта'){
            delivery_price = 50;
        }else if (this.delivery == `Кур'єр`){
            delivery_price = 120;
        }else{
            delivery_price == 1000;
        }
        return this.product_price * this.count + delivery_price;
    }
    saveOrder(){
        db.collection("orders-t8").add(
            {
                product_name: this.product_name,
                product_price: this.product_price,
                user_email: this.user_email,
                count: this.count,
                delivery: this.delivery,
                submitted: this.submitted,
                total_price: this.total_price
            }
        )
    }
}

function makeOrder(){
    let order = new Order(document.getElementById(`product_name`).value,
    document.getElementById(`product_price`).value,
    document.getElementById(`user_email`).value,
    document.getElementById(`count`).value,
    document.getElementById(`delivery`).value)
    console.log(order)

    order.saveOrder()
}