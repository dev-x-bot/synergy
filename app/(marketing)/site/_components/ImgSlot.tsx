export default function ImgSlot({
  className = "",
}: {
  className?: string;
}) {
  return <div className={`img-slot ${className}`.trim()} aria-hidden="true" />;
}
