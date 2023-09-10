import  personalImage from '../../images/pedroebtorres.jpeg';


function Overview () {
    return (
        <section className="flex">
            <img 
            src={personalImage}
            alt="Homem com Camisa Social Cor de Azul"
            className="mx-2 mt-8 bg-gray-400 
            w-60 rounded-xl border border-custom-gray" 
            />

            <section 
            className="text-base p-7 font-mono"
            >
                <p>Meu nome é Pedro Enrique Barcelos Torres, tenho 23 anos, sou brasileiro, sou natural e
                resido na cidade de Cacoal/RO.<br />
                Já tive contato com linguagens como C e C++, após esse contato, resolvi me dedicar à área da tecnologia
                através da <a href="https://www.betrybe.com/" target="_blank" className="text-green-500" rel="noreferrer">Trybe</a></p>

                <p> <em>Amo baleias e tubarões</em>, e vejo, frequentemente, vídeos de encontros desses animais
                com
                humanos.<br/>
                Gosto muito do <em>Tubarão Branco, Baleia Jubarte e da Orca.</em><br/>
                E tenho a prática de correr na rua todos os dias.</p>
            </section>
        </section>
    );
};

export default Overview;