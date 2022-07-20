import React, { useState, useEffect } from "react";
import { Container, Range, Counter } from "./Slider.styles.js";

export default function Slider() {
    const [value, onChange] = useState(1);

    useEffect(() => {
        const ele = document.querySelector('.buble');
        if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
        }
    })

    return (
        <Container>
            <Range type="range" min="1" max="10" step="1" value={value} required name="num"
                onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                }}
            />
            <Counter className="buble">
                {value}
            </Counter>
        </Container>
    );
}
