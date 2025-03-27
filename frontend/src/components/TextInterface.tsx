
import Line from "./Line";
import React from "react";

import { useState } from "react";

export default function TextInterface() {
    const [lineArray, setLineArray] = useState(["Seja bem vindo", "Como posso ajudar?"]);
    const [term, setTerm] = useState("");
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLineArray([...lineArray, term]);
        setTerm("")
    };
    return (
        <div className="max-w-1/3 text-wrap">
            {lineArray.map((element, index) => (
                <Line key={index}>{element}</Line>
            ))}
            <form onSubmit={handleSubmit}>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                />
            </form>
        </div>
    );
}
