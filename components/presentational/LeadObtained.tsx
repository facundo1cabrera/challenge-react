import Link from "next/link"

const LeadObtained = () => {
    return (
        <div className="mt-48 max-w-xs m-auto flex flex-col items-center">
            <h2 className='text-3xl font-semibold'>Thanks you !!</h2>
            <Link href="/?type=bikes" className='w-full bg-slate-600 h-14 text-white rounded-md flex items-center justify-center mt-9'>
                <div>
                    Go to Home
                </div>
            </Link>
        </div>
    );
};

export default LeadObtained;