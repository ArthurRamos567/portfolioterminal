import Line from "./Line";
import React from "react";

import { useState } from "react";
import Worldview from "./Worldview";

export default function TextInterface() {
    interface MessageResponse {
        data: {
            text: string[];
        };
    }
    interface lineArrayObject {
        content: string;
        line: boolean;
    }
    const [lineArray, setLineArray] = useState([
        { content: "Seja bem vindo", line: true },
        { content: "Como posso ajudar?", line: true },
    ]);
    const [term, setTerm] = useState("");
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (term.toLowerCase() == "gatinho") {
            setLineArray([...lineArray, { content: term, line: true }, { content: "gatinho", line: false }]);
            return;
        }
        fetch(`http://localhost:3000/messages/${term.toLowerCase()}`)
            .then((res: Response) => res.json())
            .then((json: MessageResponse) => {
                const text: string[] = json.data.text;
                const objtext: lineArrayObject[] = text.map((cont: string) => {
                    return { content: cont, line: true };
                });
                setLineArray([...lineArray, { content: term, line: true }, ...objtext]);
                setTerm("");
            })
            .catch((error) => {
                setLineArray([
                    ...lineArray,
                    { content: term, line: true },
                    { content: "Comando inválido", line: true },
                ]);
                console.error("Error fetching data:", error);
            });
        console.log(lineArray);
    };
    return (
        <div className="w-1/2 flex flex-col items-start justify-start">
            {lineArray.map((element, index) => {
                if (element.line) {
                    return (
                        <Line key={index} classname="tracking-normal text-sm/6">
                            {element.content}
                        </Line>
                    );
                } else {
                    return (
                        <div className="flex">
                            <Worldview animationName={element.content} key={index}></Worldview>
                        </div>
                    );
                }
            })}
            <form onSubmit={handleSubmit} className="max-w-50 flex">
                <Line classname="border-b-1 border-lightgreen tracking-normal, text-sm/6, text-center">
                    {"<Terminal>  "}
                </Line>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    className="focus:outline-0 max-w-50 border-b-1 border-lightgreen"
                />
            </form>
        </div>
    );
}
