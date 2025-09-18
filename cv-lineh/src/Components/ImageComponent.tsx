

export default function ImageComponent({ src, alt, className }: { src: string; alt: string; className: string }) {
    return <img src={src} alt={alt} className={className} />;
}