import { paintOptions } from "./PaintOptions.js";
import { interiorOptions } from "./InteriorOptions.js";
import { technologyOptions } from "./TechonologyOptions.js";
import { wheelOptions } from "./WheelOptions.js";
import { orderButton } from "./OrderButton.js";
import { customCarOrdersHTML } from "./CustomCarOrders.js";

const mainContainer = document.querySelector('#container')

const render = async () => {

    const paintOptionsHTML = await paintOptions()
    const interiorOptionsHTML = await interiorOptions()
    const technologyOptionsHTML = await technologyOptions()
    const wheelOptionsHTML = await wheelOptions()
    const orderButtonHTML = orderButton()
    const customCarOrders = await customCarOrdersHTML()

    const composedHTML = `
        <h1>Cars-R-Us</h1>

        <article id="choices">
            <section id="paint-choices">
                <h2>Paints</h2>
                ${paintOptionsHTML}
                </section>

            <section id="interior-choices">
                <h2>Interior</h2>
                ${interiorOptionsHTML}
            </section>

            <section id="technology-choices">
                <h2>Technologies</h2>
                ${technologyOptionsHTML}
                </section>

            <section id="technology-choices">
                <h2>Technologies</h2>
                ${wheelOptionsHTML}
                </section>
        </article>

        <article id="order-button">
                ${orderButtonHTML}
        </article>

        <article id="custom-orders">
            <h2>Custom Car Orders</h2>
            ${customCarOrders}
        </article>`

    mainContainer.innerHTML = composedHTML
}

render()

document.addEventListener("orderSaved", () => {
    render()
})