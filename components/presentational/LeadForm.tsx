const LeadForm = ({handleSumbit, price, title}: 
    {handleSumbit: React.FormEventHandler<HTMLFormElement>, price: number, title: string}) => {
    return (
        <div className="mt-36 max-w-6xl m-auto">
            <div className="flex flex-col sm:flex-row w-full h-full">
                <div className="w-full flex justify-center items-center">
                    <img className="object-cover" src="/detail1.png" />
                </div>
                <div className="w-full flex flex-col">
                    <h1 className="text-4xl font-medium mb-2">Detail Quotation</h1>
                    <p className="text-lg mb-6">{title}</p>
                    <div className="w-full flex justify-between mb-6">
                        <p>Price</p>
                        <p>${price}</p>
                    </div>
                    <div className="h-1px w-full bg-gray-300 mb-8"></div>
                    <form className='flex flex-col' onSubmit={handleSumbit}>
                        <div className='w-full text-left flex mb-8'> 
                            <div className='flex flex-col w-1/2 mr-2'>
                                <label htmlFor="name">Name</label>
                                <input className='h-10 border-2 rounded-md' id='name' type="text" />
                            </div>
                            <div className='flex flex-col w-1/2 ml-2'>
                                <label htmlFor="surname">Lastname</label>
                                <input className='h-10 border-2 rounded-md' id='surname' type="text" />
                            </div>
                        </div>
                        <div className='flex flex-col mb-8'>
                            <label htmlFor="email">Email</label>
                            <input className='h-10 border-2 rounded-md' id='email' type="text" />
                        </div>
                        <div className='flex flex-col mb-8'>
                            <label htmlFor="phoneNumber">Phone</label>
                            <input className='h-10 border-2 rounded-md' id='phoneNumber' type="text" />
                        </div>
                        <div className='flex jus'>
                            <div className='mr-3'>
                                <input className='mr-2' type="checkbox"/>
                                <label className='ml-2'>I'm interested in finance</label>
                            </div>
                            <div className='ml-3'>
                                <input className='mr-2' type="checkbox"/>
                                <label className='ml-2'>Trade in</label>
                            </div>
                        </div>
                        <button className='w-full bg-purple-500 h-14 text-white rounded-md mt-8'>
                            Sumbit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LeadForm;