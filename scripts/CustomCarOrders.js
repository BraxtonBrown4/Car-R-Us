export const customCarOrdersHTML = async () => {

    const response = await fetch('http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheels')
    
    const orders = await response.json()

    const ordersHTML = orders.map(order => {
        
        const orderPrice = order.paint.price + order.interior.price + order.technology.price + order.wheels.price

        return `<div>Order #${order.id} cost $${orderPrice}</div>`}).join('')

    const totalHTML = `<section class="order">${ordersHTML}</section>`
    
    return totalHTML
}