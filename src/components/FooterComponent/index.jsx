function Footer () {
    return (
        <footer className="flex text-xl text-center place-content-center
        w-screen fixed left-0 bottom-0 text-custom-blue
        "
        >
            <button 
            className="flex-1 border grow-0 rounded p-1 mx-2
            hover:bg-custom-blue hover:text-custom-gray
            "
            >
                LinkedIn
            </button>
            <button 
            className="flex-1 border grow-0 rounded p-1 mx-2
            hover:bg-custom-blue hover:text-custom-gray"
            >
                GitHub
            </button>
        </footer>
    );
}

export default Footer;