import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_KEY
);


const Pricing = () => {
    const [stripeError, setStripeError] = useState();
    const [loading, setLoading] = useState();

    const handleClick = async () => {
        setLoading(true);
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: process.env.REACT_APP_5ID,
                    quantity: 1,
                },
            ],
            mode: "payment",
            cancelUrl: `${window.location.origin}/pricing`,
            successUrl: window.location.origin
        });

        if (error) {
            setLoading(false);
            setStripeError(error);
        }
    };

    return (
        <>
            {stripeError && <p style={{ color: "red" }}>{stripeError}</p>}
            <button role="link" onClick={handleClick} disabled={loading}>Go to checkout</button>
        </>
    )
}

export default Pricing;