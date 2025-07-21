import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { ReactNode } from "react";


export default function layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className=" h-screen flex flex-col items-center justify-between ">
            <NavBar logo="Bilal Blog" items={[{ name: "home", href: "/" }, { name: "about", href: "/about" }, { name: "posts", href: "/post" }]} btn="Login" />
            {children}
            <Footer />
        </div>
    )
}
