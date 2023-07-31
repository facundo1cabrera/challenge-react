import Header from "@/components/presentational/Header";
import ItemSelected from "@/components/presentational/ItemSelected";
import { useRouter } from "next/router";

export default function Detail() {
    const router = useRouter();

    const { id } = router.query;
  return (
    <>
        <Header />
        <ItemSelected id={id as string}/>
    </>
  )
}