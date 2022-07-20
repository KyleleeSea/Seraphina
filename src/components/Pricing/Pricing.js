import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_KEY);

async function Pricing() {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 5,
        currency: 'usd',
    });

    const options = {
        // passing the client secret obtained from the server
        clientSecret: paymentIntent.client_secret
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <form>
                <PaymentElement />
                <button>Submit</button>
            </form>
        </Elements>
    )
}

export default Pricing;

// import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";

// let stripePromise;

// const getStripe = () => {
//     if (!stripePromise) {
//         stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
//     }

//     return stripePromise;
// };

// const Checkout = () => {
//     const [stripeError, setStripeError] = useState(null);
//     const [isLoading, setLoading] = useState(false);
//     const item = {
//         price: "price_1LNkCOLTjs0775bpIfjo6mgq",
//         quantity: 1
//     };

//     const checkoutOptions = {
//         lineItems: [item],
//         mode: "payment",
//         successUrl: `${window.location.origin}/`,
//         cancelUrl: `${window.location.origin}/`
//     };

//     const redirectToCheckout = async () => {
//         setLoading(true);
//         console.log("redirectToCheckout");

//         const stripe = await getStripe();
//         const { error } = await stripe.redirectToCheckout(checkoutOptions);
//         console.log("Stripe checkout error", error);

//         if (error) setStripeError(error.message);
//         setLoading(false);
//     };

//     if (stripeError) alert(stripeError);

//     return (
//         <div className="checkout">
//             <h1>Stripe Checkout</h1>
//             <button
//                 className="checkout-button"
//                 onClick={redirectToCheckout}
//                 disabled={isLoading}
//             >
//                 <div className="grey-circle">
//                     <div className="purple-circle">
//                     </div>
//                 </div>
//                 <div className="text-container">
//                     <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
//                 </div>
//             </button>
//         </div>
//     );
// };

// export default Checkout;
