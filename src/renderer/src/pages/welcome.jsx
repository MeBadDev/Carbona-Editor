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

    return (
        <div className="flex flex-col text-center justify-center mx-auto">
            <pre className="tracking-widest leading-5 text-white">
                {ascii}
            </pre>
            <p className="text-2xl text-ctp-text mt-3 mb-16">Your Editor, Your Rules.</p>
            <ul className="text-md text-ctp-blue flex gap-10 flex-col">
                <li className="hover:underline cursor-pointer transform hover:scale-150 duration-300 ease-in-out">Open File ...</li>
                <button className="hover:underline cursor-pointer transform hover:scale-150 duration-300 ease-in-out" id="open-folder">
                    Open Folder ...
                </button>
                <li className="hover:underline cursor-pointer transform hover:scale-150 duration-300 ease-in-out">Load Last Session ...</li>
            </ul>
        </div>


    )
}

export default Welcome