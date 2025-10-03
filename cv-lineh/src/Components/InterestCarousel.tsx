import useRotatingImages from '../Hooks/useRotatingImages';
import type { interestImages } from '../Types';

// display rotating images for interests
export default function InterestCarousel({ images, altPrefix }: { images: interestImages[] | undefined; altPrefix: string }) {
  const index = useRotatingImages(images as any, true, 2000);
  const src = images?.[index]?.src;
  if (!src) return null;

  return (
    <section className="interest-images-list">
      <img src={src} alt={`${altPrefix}`} className="interest-image" />
    </section>
  );
}
