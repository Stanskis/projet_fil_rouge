import IntroSection from '../components/IntroSection/IntroSection';
import GuideSection from '../components/GuideSection/GuideSection';
import CarouselSection from '../components/CarouselSection/CarouselSection';
import ReviewSection from '../components/ReviewSection/ReviewSection';

export default function Homepage() {
  return (
    <main className="bg-dark">
      <IntroSection />
      <GuideSection />
      <CarouselSection />
      <ReviewSection />
    </main>
  );
}