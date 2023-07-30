interface Props {
    imageUrl: string;
    title: string;
    price: number;
}

const Card = ({ imageUrl, title, price }: Props ) => {
    return (
        <div className="border rounded-sm w-full max-w-xs mx-auto">
            <div className="py-8 w-full">
                <img className="object-contain w-4/5 h-36 m-auto" src={imageUrl}/>
                <div className="flex flex-col items-center mt-2">
                    <p className="text-lg font-medium">{title}</p>
                    <p className="text-gray-700">${price}</p>
                    <button 
                        className="mt-8 px-12 py-3 text-white bg-purple-700"
                    >
                        Ver más
                    </button>
                </div>
            </div>
        </div> 
    );
};

export default Card;