import Card from "@/components/presentational/Card";
import Header from "@/components/presentational/Header";
import ListCards from "@/components/containers/ListCards";

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-6xl m-auto mt-40">
        <p className="text-3xl font-semibold mb-5">New Motorcycles</p>
        <div className="w-full flex justify-end mb-14">
          <button 
            className="border rounded-md py-2 px-4 text-lg font-medium">
              Order: relevance
          </button>
        </div>
      </div>
      <div className="max-w-6xl m-auto min-h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        <ListCards />
      </div>
    </>
  )
}
