import { Background, Range, Counter, Text, Header, Padding, SliderContainer, PromptText, OutputText, OutputBox } from "./LandingDemo.styles"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

import React, { useState, useEffect } from "react";


export default function LandingDemo() {
    // Example demo outputs
    const TarzanOutputs = ['1. D’Arnot took the paper from Tarzan’s shaking hand and read the message. His face blanched as he took in the news. “We have to go, now.”',
        '2. As Tarzan read the message, a sinking feeling grew in the pit of his stomach. This was it—the moment he had been dreading for weeks. “Pack your bags,” he said to D’Arnot, “we’re going to London.”',
        '3. D’Arnot read the message and looked up at Tarzan with confusion. “I don’t understand,” he said. “What does it mean?”',
        '4. Tarzan’s face was a mask of fury as he read the message. “That bastard,” he growled. “I’ll kill him.”',
        '5. Tarzan read the message and smiled. “Finally,” he said. “It’s about time.”']

    const WindOutputs = ['1. It was the kind of day when you just wanted to curl up in bed with a good book and a cup of tea.',
        '2. The sun was setting, and the sky was turning a deep red. The wind picked up again, and the dust started to swirl around.',
        '3. The only sound was the occasional rustle of leaves or the creak of a door.',
        '4. There was an air of resignation about the place, as if the town had given up hope.',
        '5. It was a typical Sunday morning in Palestine, Texas.']

    const HisaoOutputs = ['1. He turned it over and saw a photograph of a woman. Hisao recognized her as the author of the book. He studied her face and tried to imagine what she looked like when she was alive. “Found another one."',
        '2. He flipped it open and found a list of names, many scratched through. “No one to say goodbye to,” Goro said, kneeling beside him.',
        '3. With a gloved hand, Hisao turned the fragile page. A photograph of two young girls stared back at him. Hisao rubbed his thumb across their faces, the image grainy and faded with age. “Found something."',
        '4. He flipped to the front and read the words inscribed there. “I leave this to whomever finds it. If you are reading this, then I am no longer in this world."',
        '5. A picture of a woman in a white dress with long black hair stared back at him. “Sir?” Hisao looked up to see the young lieutenant who had been assigned to oversee their dig.']

    const MargitOutputs = ['1. “It’s the only way I can get to know people,” she always says, but she knows that this is a half-truth. She does love people and what they have to teach her about themselves, but she also likes the company of other people for its own sake.',
        '2. This year, she tells herself, she’ll stay home. She’ll have a hot bath and a glass of wine, and she’ll read a book. She’ll read the book she bought two years ago, when her mother was dying of cancer. It was a hard year for Margrit to give up Friday nights.',
        '3. Tonight, as every Friday night, she’ll go out. Margrit is a party girl. She’s not stupid or selfish enough to think that she’s the only one who does this, but still the self-loathing builds and swells in her throat.',
        '4. This is the year she’ll stay home and read a book. This is the year she’ll learn to cook, or at least bake. This is the year she’ll pay attention to her garden, or finally, finally finish the short story she’s been working on for two years.',
        '5. It’s not that Margrit doesn’t enjoy her work. She does. But it’s Friday night, and she wants to be home, in a bathrobe and slippers, drinking wine from a mug and watching bad reality television. Instead, she is sitting on the couch in her boss’s living room, surrounded by her coworkers, their suit jackets draped over the backs of chairs or tossed onto the floor.']

    const SciFiOutputs = ['1. He leaned back in his chair, stretched out his legs and clasped his hands behind his head. He felt relaxed and confident. “I’ll buy all the shares of Venus Equilateral,” he said, “at a hundred and fifty dollars a share.” The broker was mildly surprised. “But they haven’t paid a dividend for years,” he said. “I know."',
        '2. There was a tap at the door. “Come in.” It was his secretary. “Excuse me, sir, but there are two gentlemen to see you.They say it’s important and confidential.” “Show them in, please.” He stood up and arranged his features into an expression of welcome and interest.',
        '3. Then there was the matter of the patent on the ionocraft that had been granted to Venus Equilateral. There would be no infringement on that. He sighed. He had a feeling that he was doing something very wrong, and yet he knew that it had to be done.He could not let Venus Equilateral decay and die when he knew how to save it. He pressed a button on his desk communicator and spoke into the round disk that was inset in.',
        '4. “What’s the market on Terra ?” he asked. “Up a half point yesterday,” she said. “But there’s been a great deal of buying from Venus this week.It should be high.” He sighed. ',
        '5. He left the desk, and entered a small elevator.He pressed a button and descended. He found himself in an enormous room, long and low - ceilinged, which stretched away before him until it disappeared in the distance. The room was filled with hundreds of men seated at desks and tables. They were bent over curious mechanisms that were spread out before them.']

    const [value, changeNum] = useState(3);
    const [prompt, changePrompt] = useState('Tarzan');
    const [output, changeOutput] = useState(TarzanOutputs.slice(0, 3))
    const [placeholder, changePlaceholder] = useState(TarzanOutputs)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    useEffect(() => {
        const ele = document.querySelector('.buble');
        if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
        }
    })

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 1200;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

    const promptClick = (promptParam, outputParam) => {
        changePrompt(promptParam)
        changeOutput(outputParam.slice(0, value))
        changePlaceholder(outputParam)
    }

    const sliderChange = (radius) => {
        changeNum(radius)
        changeOutput(placeholder.slice(0, radius))
    }


    return (
        <Background id='demo'>
            <Padding>
                {/* Centers element only if not mobile */}
                <Row className={`${isMobile ? "" : "align-items-center"}`} >
                    <Header>Seraphina generates completions to your writing in your writing style, providing inspiration and direction.</Header>
                    <Col sm>
                        <Text>Number of Outputs:</Text>
                        <SliderContainer>
                            <Range type="range" min="1" max="5" step="1" value={value} required name="num"
                                onChange={({ target: { value: radius } }) => {
                                    sliderChange(radius);
                                }}
                            />
                            <Counter className="buble">
                                {value}
                            </Counter>
                        </SliderContainer>
                        <Text>Prompt:</Text>
                        <PromptText onClick={() => promptClick('Tarzan', TarzanOutputs)} style={{ color: (prompt == 'Tarzan' ? 'white' : '#c2c0c0') }}>The man answered in the affirmative, and, signing for the message, carried it within to Tarzan, who was already preparing to depart for London. Tarzan tore open the envelope, and as he read his face went white. “Read it, Paul,” he said, handing the slip of paper to D’Arnot. “It has come already.”
                        </PromptText>
                        <PromptText onClick={() => promptClick('Wind', WindOutputs)} style={{ color: (prompt == 'Wind' ? 'white' : '#c2c0c0') }}>Chill wind blew down the long asphalt street in Palestine, Texas, picking up sud-like dust and limply turning over dead dry leaves. The town was tired and quiet; only a handful of pickups drove leisurely down the street.
                        </PromptText>
                        <PromptText onClick={() => promptClick('Hisao', HisaoOutputs)} style={{ color: (prompt == 'Hisao' ? 'white' : '#c2c0c0') }}>Rare was it that Hisao found letters buried in Saipan. He dropped his shovel and knelt, the archaeology team at work behind him—industrial lights illuminated the tunnel with a silver glow. Brushing the dirt from his find, Hisao picked up a timeworn book with a withered cover. A loose page stuck out from the side.
                        </PromptText>
                        <PromptText onClick={() => promptClick('Margrit', MargitOutputs)} style={{ color: (prompt == 'Margrit' ? 'white' : '#c2c0c0') }}>Every year, Margrit tells herself that this is the year she’ll stay home on Friday nights. Every single year, since she left Berkeley her junior year and began to spend life in nice clothes, in other people’s houses. Every single year, since she began to deprive herself of privacy and peace, and instead spent herself for the benefit of others and the addictive reward of their company.
                        </PromptText>
                        <PromptText onClick={() => promptClick('SciFi', SciFiOutputs)} style={{ color: (prompt == 'SciFi' ? 'white' : '#c2c0c0') }}>He picked up papers that carried, side by side, the relative assets of Venus Equilateral and Terran Electric. He studied them and thought deeply. To his scrutiny, the figures, seemed about equal, though perhaps the Interplanetary Communications Co. was a bit ahead.
                        </PromptText>

                    </Col>
                    <Col sm>
                        <OutputBox>
                            {output.map((text, index) => <OutputText key={index}>{text}</OutputText>)}
                        </OutputBox>
                    </Col>
                </Row>
            </Padding>

        </Background >
    )
}