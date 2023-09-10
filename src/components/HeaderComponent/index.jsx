function Header () {
    return (
        <header>
            <h1 className="text-center text-4xl p-3">Pedro Enrique Barcelos Torres</h1>
            <p className="text-center m-1 font-sans text-2xl my-6">
                <a 
                href="#pedro" 
                className="mx-4 p-2 rounded-lg hover:text-custom-blue
                border border-custom-gray hover:bg-custom-gray"
                >
                    Minha Foto
                </a>
                <a 
                href="#apresentacao" 
                className="mx-4 p-2 rounded-lg hover:text-custom-blue
                border border-custom-gray hover:bg-custom-gray"
                >
                    Sobre Mim
                </a>
                <a 
                href="#hobbies" 
                className="mx-4 p-2 rounded-lg hover:text-custom-blue
                border border-custom-gray hover:bg-custom-gray"
                >
                    Meus hobbies
                </a>           
                <a 
                href="#habilidades" 
                className="mx-4 p-2 rounded-lg hover:text-custom-blue
                border border-custom-gray hover:bg-custom-gray"
                >
                    Minhas Habilidades
                </a>
                <a 
                href="#blog" 
                className="mx-4 p-2 rounded-lg hover:text-custom-blue
                border border-custom-gray hover:bg-custom-gray"
                >
                    Meu Blog Predileto
                </a>
            </p>
        </header>
    );
}

export default Header;