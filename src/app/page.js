import Image from "next/image";
import Nav from "../componant/Nav";
import Page from "../componant/Page"

export default function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col bg-green-200/90 px-[80px] py-[30px] gap-[30px]">
        <Nav />
        <Page />
      </div>
    </div>
  );
}
