import { socialIcons } from "@/data"
import MagicButton from "./MagicButton"
import { ToolTip } from "./ToolTip"

import { FaLocationCrosshairs } from "react-icons/fa6"


const Footer = () => {
return (
    <footer className="w-full pt-48 pb-10" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="heading text-white lg:max-w-[45vw]">
                Ready to take <span className="text-purple">your</span> digital
                presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
                Reach out to me today and let&apos;s discuss how I can help you
                achieve your goals.
            </p>

            <ToolTip />
            
            <a href="mailto:contact@frontendadvance.com">
                <MagicButton 
                title="Let's get in touch"
                position="right"
                icon={<FaLocationCrosshairs />}
                />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-white text-sm md:font-normal font-light">
                Copyright © 2024 WWH Dubai
            </p>

            <div className="flex items-center md:gap-3 gap-6">
                {
                    socialIcons.map((info) => (
                        <div
                        key={info.id}
                        >
                            <img src={info.img} alt="icons" width={20} height={20} />
                        </div>
                    ))
                }
            </div>
        </div>
    </footer>
)
}

export default Footer