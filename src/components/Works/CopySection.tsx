import gsap from 'gsap'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

type Copy = {
    title: string;
    client: string;
    skills: string;
    body: string;
    even: boolean;
}

type CopyProps ={
    copy: Copy;
}


export default function CopySection(props: CopyProps){
    const {title, client, skills, body, even} = props.copy;
    const titleRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() =>{
        let split = SplitText.create(titleRef.current, {type: "words, chars"});
        gsap.from(split.words,{
            duration:.8,
            stagger:0.05,
            y:-100,
            opacity:0,
            scrollTrigger:{
                trigger:titleRef.current,
                toggleActions: "restart none none none"
            },
            ease: "expo.in"

        })
    }, {scope: containerRef})

    return ( 
        <div ref={containerRef} className="flex flex-col basis-4/12 gap-3 md:order-2 order-1">
            <h3 ref={titleRef} className="font-bigger text-9xl 2xl:text-[18rem]/[14.5rem] 2xl:pt-6 text-palered-500">{title}</h3>
            <h4 className={`text-2xl ${even ? `text-darkgray-500` : `text-palegray-500`}`}><span className="font-bold">Client:</span> {client}</h4>
            <h4 className={`text-2xl ${even ? `text-darkgray-500` : `text-palegray-500`}`}><span className="font-bold">Skills:</span> {skills}</h4>
            <p className={`text-2xl font-light ${even ? `text-darkgray-500` : `text-palegray-500`}`}>{body}</p>
        </div>
    )
} 