import Head from "../head";
import MenuPage from "@/components/pages/MenuPage";
export default function Menu() {
  return (
    <>
        <Head 
            title= "Menu | GOASAYA Asian Progressive Dining"
            description= "Explore the GOASAYA menu — a curated selection of Asian progressive dishes, tasting menus, and signature creations. Every plate tells a story of flavor, craftsmanship, and elegance."
            url="https://www.goasaya.com"
            keywords="fine dining menu, asian cuisine menu, tasting menu, goasaya dishes, luxury restaurant food, signature menu"
            image="https://www.goasaya.com/logo/09.jpg"
        />

        <MenuPage/>
    </>
  );
}