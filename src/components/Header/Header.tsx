import { SelectedPage } from "@/shared/types";
import { NavBar } from "../NavBar/NavBar"

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}


export const Header =({isTopOfPage,  selectedPage, setSelectedPage }: Props) => {
    const headerBackground = isTopOfPage ? "" : "bg-salat-5 drop-shadow";
    return (
        <header className={` ${headerBackground} fixed z-20  w-full px-5 sm:px-10 md:px-[50px]`}>
             <NavBar 
             selectedPage={selectedPage}
             setSelectedPage={setSelectedPage}
            //  isTopOfPage = {isTopOfPage}
             />
        </header>
    )
}