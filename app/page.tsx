import TopHeader from "./components/header";
import Footer from "./components/footer";
import Script from "next/script";
import TopNavbar from "./components/topNavbar";
import ToolsList from "./components/toolsList";

export default async function Home(props:any) {
  
  return (
    <>
    <TopHeader
      pageName="CodHost"
    />
    <TopNavbar showSearch={false}/>
    <main className="container">
          <ToolsList/>
    </main>
    <Footer/>
  </>
  
  );
}
