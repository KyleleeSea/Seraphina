import { useState } from "react";
import { TextArea, Text } from "./Textarea.styles.js";

export default function TextInput() {
    const [textAreaCount, setTextAreaCount] = useState(0);

    const recalculate = e => {
        setTextAreaCount(e.target.value.length);
    };

    return (
        <div>
            <TextArea
                type="text"
                minLength={200}
                maxLength={500}
                onChange={recalculate}
                required
                name="input"
            />
            {/* Change color to red if less than minimum required characters */}
            <Text style={{ color: (textAreaCount > 200 ? '#009e4c' : '#8c0200') }}>{textAreaCount}/500</Text>
        </div>
    );
}