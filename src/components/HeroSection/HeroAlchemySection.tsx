import gsap from 'gsap'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

type HeroAlchemySectionProps ={
    head: string;
    body: string;
}

export default function HeroAlchemySection({head, body}: HeroAlchemySectionProps){
    const container = useRef<HTMLDivElement>(null);
    const outerCircle = useRef<SVGCircleElement>(null);
    const secondCircle = useRef<SVGCircleElement>(null);
    const centerCircle = useRef<SVGCircleElement>(null);

    useGSAP(() =>{
        gsap.to(secondCircle.current,{
            repeat:-1,
            duration:16,
            rotation: 360,
            transformOrigin: "center center",
            ease:"linear",
        });
    }, {scope: container})

    return (
        <div ref={container} className="bg-palered-500 h-120 relative overflow-hidden">
            <div className='flex h-full gap-2 pl-8 justify-center flex-col items-start'>
            {head && 
                <h4 className='text-palegray-500 font-bigger text-8xl/[40px]'>{head.toUpperCase()}</h4>
            }
            {body && 
            <p className='text-palegray-500 text-xl'>{body}</p>
            }
            </div>
            <svg
            viewBox="0 0 1010.296 1010.296"
            xmlns="http://www.w3.org/2000/svg"
            className="top-1/2 left-10/12 xl:left-8/12 -translate-x-1/2 -translate-y-1/2 w-full md:w-8/12 xl:w-1/2 absolute"
            >
            <circle
                ref={outerCircle}
                cx="505.556"
                cy="505.259"
                r="455.556"
                stroke="#DCDCDC"
                strokeWidth={4}
                fill="none"
                strokeMiterlimit={10}
            />
            
            <circle
                ref={centerCircle}
                cx="505.556"
                cy="505.259"
                r="178.998"
                stroke="#DCDCDC"
                strokeWidth={4}
                fill="none"
                strokeMiterlimit={10}
            />

            <g ref={secondCircle}>
            <circle
                cx="505.556"
                cy="366.98"
                r="317.277"
                stroke="#DCDCDC"
                fill="none"
                strokeMiterlimit={10}
            />
            <circle
                cx="505.556"
                cy="643.538"
                r="317.277"
                stroke="#DCDCDC"
                fill="none"
                strokeMiterlimit={10}
            />
            
            </g>
            </svg>
        </div>
    )
}