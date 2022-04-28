export const getStaticPaths = async () => {
    const response = await fetch("https://sozluk.gov.tr/gts?ara=" + encodeURI(kelime.toLocaleLowerCase("tr")), {
        headers: { method: "GET", "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" }
    }).then(res => res.json());

    const paths = data.map(kelime => {
        return {
            params: { id: kelime.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (event) => {
    const name = event.target.name.value;
    const response = await fetch("https://sozluk.gov.tr/gts?ara=" + encodeURI(kelime.toLocaleLowerCase("tr")), {
        headers: { method: "GET", "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" }
    }).then(res => res.json());

    return {
        props: {kelime: data }
    }
}

const Details = ({kelime}) => {
    return (
        <div>
            {kelime.map(kelime => (
                <div className="">
                    <WordCard baslik={kelime.madde} aciklama={kelime.lisan} />
                    <div className=" h-wordcard m-5 mt-0 rounded-3xl shadow-xl bg-zinc-400 flex flex-col justify-evenly">
                        {kelime.anlamlarListe.map(item => (
                            <p className="text-3xl ">{item.anlam}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Details;