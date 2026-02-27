import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import PrivilegesSection from "@/components/PrivilegesSection"

const Index = () => {
  return (
    <ShaderBackground>
      <div className="min-h-screen relative">
        <Header />
        <div className="relative h-screen">
          <HeroContent />
          <PulsingCircle />
        </div>
        <PrivilegesSection />
      </div>
    </ShaderBackground>
  )
}

export default Index