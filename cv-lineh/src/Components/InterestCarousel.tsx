import ImageComponent from './ImageComponent';
import useRotatingImages from '../Hooks/useRotatingImages';
import type { interestImages } from '../Types';

export default function InterestCarousel({ images, altPrefix }: { images: interestImages[] | undefined; altPrefix: string }) {
  const index = useRotatingImages(images as any, true, 3000);
  const src = images?.[index]?.src;
  if (!src) return null;

  return (
    <div className="interest-images-list">
      <ImageComponent src={src} alt={`${altPrefix}`} className="interest-image" />
    </div>
  );
}
