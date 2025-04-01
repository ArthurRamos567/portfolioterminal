import { useState, useEffect } from "react";
import { world } from "../World.ts";
import { cat } from "../Cat.ts";
import Line from "./Line";

export default function Worldview({animationName}:{animationName:string}) {
    const [frame, setFrame] = useState(0);
    let animation : string[][]
    switch (animationName) {
      case "world":
        animation = world
        break
      case "gatinho": 
        animation = cat
        break
      default :
        console.log("Nome de animação inválido")
        animation = [[]]
    }
    useEffect(() => {
      const interval = setInterval(() => {
        setFrame((frame)=>(frame+1)%animation.length)
      }, 100);
    
      return () => clearInterval(interval);
    }, []);
    return (

        <pre className=" max-w-full py-10">
            {animation[frame].map((element, idx1) => (
                <Line classname="text-sm/[6px] tracking-[-2px]" key={idx1}>{element}</Line>
            ))}
        </pre>

    );
}
