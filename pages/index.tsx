import Card from "@/components/presentational/Card";
import Header from "@/components/presentational/Header";
import ListCards from "@/components/containers/ListCards";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-96 w-full bg-red-500">
        Carrousel
      </div>
      <div className="max-w-6xl m-auto">
        <p className="text-3xl font-semibold">New Motorcycles</p>
        <div className="w-full flex justify-end">
          <button 
            className="border rounded-md py-2 px-4 text-lg font-medium">
              Order: relevance
          </button>
        </div>
      </div>
      <div className="max-w-6xl m-auto min-h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        <ListCards />
      </div>
      
      <div></div>
    </>
  )
}
