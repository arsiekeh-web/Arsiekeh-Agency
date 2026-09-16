import { Hero } from "@/components/sections/Hero";
import { Stakes } from "@/components/sections/Stakes";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Guide } from "@/components/sections/Guide";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { Plan } from "@/components/sections/Plan";
import { Difference } from "@/components/sections/Difference";
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy";
import { Explanatory } from "@/components/sections/Explanatory";
import { SocialProof } from "@/components/sections/SocialProof";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { InsightsTeaser } from "@/components/sections/InsightsTeaser";
import { FinalCta } from "@/components/sections/FinalCta";

/**
 * Homepage — Blueprint v3 Section 3, sections in the exact locked
 * order (01 Header → 15 Footer, Footer rendered globally in layout.tsx).
 * Section 10 "Who We Work With" is intentionally absent — merged into
 * WhatWeBuild per the blueprint's own decision (Section 3.10).
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Stakes />
      <SelectedWork />
      <Guide />
      <WhatWeBuild />
      <Plan />
      <Difference />
      <FeaturedCaseStudy />
      <Explanatory />
      <SocialProof />
      <AboutTeaser />
      <InsightsTeaser />
      <FinalCta />
    </>
  );
}
