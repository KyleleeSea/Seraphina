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
                minLength={300}
                maxLength={700}
                onChange={recalculate}
                required
                name="input"
            />
            <Text style={{ color: (textAreaCount > 300 ? '#009e4c' : '#8c0200') }}>{textAreaCount}/700</Text>
        </div>
    );
}