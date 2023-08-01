import NavigationElements from "@/components/molecules/NavigationElements";
import RecmilLogo from '@/components/molecules/RecmilLogo'


const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-24 py-2">
            <RecmilLogo />
            <NavigationElements />
        </div>
    )
}

export default Navbar