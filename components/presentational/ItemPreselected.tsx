const ItemPreselected = ({handleSumbit, price, title, description, imageUrl}:
        {handleSumbit: React.MouseEventHandler<HTMLButtonElement>, 
        price: number, title: string, description: string, imageUrl: string}) => {
    return (
     <div className="mt-36 max-w-6xl m-auto">
             <div className="flex flex-col sm:flex-row w-full h-full">
                 <div className="w-full flex justify-center items-center">
                     <img className="object-cover w-full" src={imageUrl} />
                 </div>
                 <div className="w-full flex flex-col">
                     <h1 className="text-4xl font-medium mb-2">{title}</h1>
                     <p className="text-lg mb-6">USD {price}</p>
                     <div className="w-full grid grid-cols-2 gap-6 mb-8">
                         <button onClick={handleSumbit} className="bg-purple-500 py-3 text-white pl-3 rounded-md">
                             Purchase
                         </button>  
                         <button className="bg-gray-900 py-3 text-white pl-3 rounded-md">
                             Add to cart
                         </button>
                     </div>
                     <div className="h-1px w-full bg-gray-300"></div>
                     <div className="w-full p-6">
                         <div className="flex justify-between font-medium">
                             <p>Description</p>
                             <p>""</p>
                         </div>
                         <p className="mt-4 text-gray-500">
                             {description}
                         </p>
                     </div>
                     <div className="h-1px w-full bg-gray-300"></div>
                 </div>
             </div>
         </div>
    ) 
 }

 export default ItemPreselected;