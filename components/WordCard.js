export default function WordCard(props) {
    return (
        <div>
            <div className=' m-5 mb-0 h-52 rounded-3xl shadow-xl  bg-rose-700 flex flex-col items-start justify-center'>
                <h1 className=" text-7xl ml-20 text-white ">{props.baslik}</h1>
                <h1 className=" text-xl ml-24 text-white">{props.aciklama}</h1>
                
            </div>
        </div>
    )
}