

// eslint-disable-next-line react/prop-types
import {useContext} from "react";
import {Context} from "../context/Context.jsx";
import SideInfo from "./SideInfo";

export function ServiceCard({text1,text2, img, setOpenInfo}) {
    const handleClick = () => {
        setOpenInfo(true)
    }
    return (
        <>
            <div  onClick={() => handleClick()} className="max-w-xs flex flex-col transition-all gap-x-6 justify-between relative inline-block hover:scale-125 ease-in-out duration-300">
                <div className="absolute z-20 bottom-[70px] right-[50%]">
                    <svg width="155" height="170" viewBox="0 0 155 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M154.956 139.436C155.019 162.727 129.888 177.386 109.644 165.773L62.6827 138.865L15.7212 111.957C-4.52308 100.407 -4.58654 71.2785 15.5308 59.5382L62.3019 32.3132L109.073 5.08817C129.19 -6.65221 154.448 7.81702 154.575 31.1074L154.765 85.2401L154.956 139.436Z" fill="#BE2C2B" fill-opacity="0.5"/>
                    </svg>
                </div>
                <img className="inline-block w-2/2" src={img} alt="service"/>
                <div className="">
                    <p className="text-right font-bold font-body text-base mt-10">
                        {text1}<br/><span className="text-red-primary">{text2}</span>
                    </p>
                </div>
            </div>
        </>
    )
}