import { placeOrder } from "./TransientState.js"

export const orderButton = () => {
    return '<button id="orderButton">Finish Order</button>'
}

document.addEventListener(
    'click',
    (clickEvent) => {
        const id = clickEvent.target.id

        if (id === 'orderButton') {
            placeOrder()
        }
    }
)