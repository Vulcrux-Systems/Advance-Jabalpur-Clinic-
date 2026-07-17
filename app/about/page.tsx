'use client'

import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import AboutHeroSection from '@/components/about/AboutHeroSection'
import MissionVisionValuesSection from '@/components/about/MissionVisionValuesSection'
import PremiumAboutContent from '@/components/about/PremiumAboutContent'
import TimelineSection from '@/components/about/TimelineSection'
import DoctorTeamSection from '@/components/about/DoctorTeamSection'
import AboutStorySection from '@/components/about/AboutStorySection'
import FinalCTASection from '@/components/shared/FinalCTASection'

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <AboutHeroSection />
        <MissionVisionValuesSection />
        <PremiumAboutContent />
        <TimelineSection />
        <DoctorTeamSection />
        <AboutStorySection />
        <FinalCTASection />
      </main>

      <Footer />
    </>
  )
}
