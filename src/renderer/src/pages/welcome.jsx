import MaterialSymbol from "../components/MaterialSymbols"
import { useState } from "react";
function Welcome() {

    // Ascii art that reads "Carbona"
    // Looks like this:
    // ________  ________  ________  ________  ________  ________   ________     
    // |\   ____\|\   __  \|\   __  \|\   __  \|\   __  \|\   ___  \|\   __  \    
    // \ \  \___|\ \  \|\  \ \  \|\  \ \  \|\ /\ \  \|\  \ \  \\ \  \ \  \|\  \   
    //  \ \  \    \ \   __  \ \   _  _\ \   __  \ \  \\\  \ \  \\ \  \ \   __  \  
    //   \ \  \____\ \  \ \  \ \  \\  \\ \  \|\  \ \  \\\  \ \  \\ \  \ \  \ \  \ 
    //    \ \_______\ \__\ \__\ \__\\ _\\ \_______\ \_______\ \__\\ \__\ \__\ \__\
    //     \|_______|\|__|\|__|\|__|\|__|\|_______|\|_______|\|__| \|__|\|__|\|__|
    const ascii = `
    ________  ________  ________  ________  ________  ________   ________     
    |\\   ____\\|\\   __  \\|\\   __  \\|\\   __  \\|\\   __  \\|\\   ___  \\|\\   __  \\    
    \\ \\  \\___|\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\ /\\ \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\|\\  \\   
     \\ \\  \\    \\ \\   __  \\ \\   _  _\\ \\   __  \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\   __  \\  
      \\ \\  \\____\\ \\  \\ \\  \\ \\  \\\\  \\\\ \\  \\|\\  \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\ \\  \\ 
       \\ \\_______\\ \\__\\ \\__\\ \\__\\\\ _\\\\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\__\\ \\__\\
        \\|_______|\\|__|\\|__|\\|__|\\|__|\\|_______|\\|_______|\\|__| \\|__|\\|__|\\|__|
`

    const [isHovered, setIsHovered] = useState(false);

    // Function to handle hover events
    const handleHover = (isHovering) => {
        setIsHovered(isHovering);
    };

    return (
        <>
            <div id="blur" className={`w-full h-full backdrop-blur-sm fixed z-10 pointer-events-none  ${isHovered ? '' : 'invisible'}`}
            ></div>            <div className="flex flex-col text-center justify-center mx-auto">
                <pre id="ascii" className="tracking-widest leading-5 align-baseline text-white select-none text-[1.2vw]">
                    {ascii}
                </pre>
                <p className="text-2xl text-ctp-text mt-3 mb-16">Your Editor, Your Rules.</p>
                <ul className="text-md text-ctp-blue flex gap-8 flex-col">
                    <WelcomeScreenAction icon="file_open" text="Open File ..." onHover={handleHover} />
                    <WelcomeScreenAction icon="folder_open" text="Open Folder ..." onHover={handleHover} />
                    <WelcomeScreenAction icon="refresh" text="Load Last Session ..." onHover={handleHover} />
                </ul>
            </div>
        </>


    )
}


function WelcomeScreenAction(props) {
    const handleHover = (isHovering) => {
        if (props.onHover) {
            props.onHover(isHovering);
        }
    };
    return (<>
        <div
            className="welcome-screen-action cursor-pointer flex flex-row gap-2 mx-auto transform hover:scale-150 duration-300 px-3 pt-3 rounded-md z-0 hover:z-20 hover:bg-ctp-crust ease-in-out"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
        >
            <MaterialSymbol symbol={props.icon != null ? props.icon : ""} size="lg" style=" pb-2 mr-3" />
            <li className="hover:underline cursor-pointer ">{props.text}</li>
        </div>
    </>)
}
export default Welcome