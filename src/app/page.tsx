import NavigationElements from "@/components/molecules/NavigationElements";
import RecmilLogo from '@/components/molecules/RecmilLogo'

export default function Page() {

  return <div className="flex items-center justify-between px-24">
    <RecmilLogo />
    <NavigationElements />
  </div>

}