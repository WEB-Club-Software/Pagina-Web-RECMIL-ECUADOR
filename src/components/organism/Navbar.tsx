import NavigationElements from "@/components/molecules/NavigationElements";
import RecmilLogo from '@/components/molecules/RecmilLogo'


const Navbar = () => {
    return (
        <div className="flex items-center flex-wrap justify-center md:flex-nowrap md:justify-between px-24 py-2 bg-customColor fixed w-full z-50 top-0">
            <RecmilLogo />
            <NavigationElements />
        </div>
    )
}

export default Navbar