import { Fragment } from "react"

export default function FAB() {
    return (
       <Fragment>
         <div className="fixed bottom-16 right-10 z-[120] lg:hidden bg-white w-12 h-12 rounded-full">
         <svg
           className="relative cursor-pointer rotate-90 opacity-65 hover:opacity-90 hover:rotate-180 transition-all duration-300 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 "
           width="24px"
           height="24px"
           viewBox="0 0 24 24"
           fill="none"
         >
           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
           <g
             id="SVGRepo_tracerCarrier"
             strokeLinecap="round"
             strokeLinejoin="round"
           ></g>
           <g id="SVGRepo_iconCarrier">
             <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"
               fill="#000000"
             ></path>
           </g>
         </svg>
       </div>

       </Fragment>
    )
}