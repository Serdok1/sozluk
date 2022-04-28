import WordCard from "../../components/WordCard";
import SearchBox from "../../components/searchbox";

export const getStaticProps = async () => {
    
    const response = await fetch("https://sozluk.gov.tr/gts?ara=" + encodeURI("vâkıf".toLocaleLowerCase("tr")), {
        headers: { method: "GET", "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" }
    }).then(res => res.json());

    return {
        props: { kelime: response }
    }
}

const Detaylar = ({ kelime }) => {
    return (
        <div>
            {kelime.map(kelime => (
                <div className="">
                    <WordCard baslik={kelime.madde} aciklama={kelime.lisan} />
                    <div className=" h-wordcard m-5 mt-0 rounded-3xl shadow-xl bg-zinc-400 flex flex-col justify-evenly">
                        {kelime.anlamlarListe.map(item => (
                            <p className="text-2xl ml-20">{item.anlam}</p>
                        ))}
                    </div>
                </div>
            ))}

        </div>

    )
}

export default Detaylar;