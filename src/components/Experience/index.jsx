import {useMotionValue, useSpring} from "framer-motion";
import {useEffect} from "react";
import {Balloons} from "../Balloons/index.jsx";

export const Experience = () => {
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const smoothMouse = {
        x: useSpring(mouse.x, { stiffness: 75, damping: 20, mass: 3 }),
        y: useSpring(mouse.y, { stiffness: 75, damping: 20, mass: 3 }),
    };

    const manageMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;

        const x = clientX / innerWidth;
        const y = clientY / innerHeight;

        mouse.x.set(x);
        mouse.y.set(y);
    };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => window.removeEventListener("mouse", manageMouseMove);
    }, []);

  return <Balloons mouse={smoothMouse}/>;
};
