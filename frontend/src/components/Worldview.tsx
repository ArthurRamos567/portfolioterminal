import { useState, useEffect } from "react";
import { world } from "../World.ts";
import { cat } from "../Cat.ts";
import Line from "./Line";

export default function Worldview() {
    const [frame, setFrame] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setFrame((frame)=>(frame+1)%world.length)
      }, 50);
    
      return () => clearInterval(interval);
    }, []);
    return (

        <pre className=" max-w-2/3">
            {world[frame].map((element, idx1) => (
                <Line classname="text-sm/2" key={idx1}>{element}</Line>
            ))}
        </pre>

    );
}
