import Card from "@/components/presentational/Card";
import Header from "@/components/presentational/Header";
import ListCards from "@/components/containers/ListCards";

export default function Detail() {
  return (
    <>
        <Header />
        <div className="mt-36 max-w-6xl m-auto">
            <div className="flex flex-col sm:flex-row w-full h-full">
                <div className="w-full flex justify-center items-center">
                    <img className="object-cover" src="/detail1.png" />
                </div>
                <div className="w-full flex flex-col">
                    <h1 className="text-4xl font-medium mb-2">Detail Quotation</h1>
                    <p className="text-lg mb-6">UQi GT</p>
                    <div className="w-full grid grid-cols-2 gap-6 mb-8">
                        <div className="bg-purple-500 py-3 text-white pl-3 rounded-md">
                            Purchase
                        </div>  
                        <div className="bg-gray-900 py-3 text-white pl-3 rounded-md">
                            Add to cart
                        </div>
                    </div>
                    <div className="h-1px w-full bg-gray-300"></div>
                    <div className="w-full p-6">
                        <div className="flex justify-between font-medium">
                            <p>Description</p>
                            <p>""</p>
                        </div>
                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="h-1px w-full bg-gray-300"></div>
                </div>
            </div>
        </div>
    </>
  )
}