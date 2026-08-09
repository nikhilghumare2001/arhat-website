export default function FeatureCard({
  icon,
  title,
  top,
  left,
  right,
  bottom,
}) {
  const isPositioned =
    top !== undefined ||
    left !== undefined ||
    right !== undefined ||
    bottom !== undefined;

  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-lg
        px-5
        py-5
        w-full
        md:w-48
        hover:-translate-y-2
        hover:shadow-2xl
        transition
        duration-300
        ${isPositioned ? "absolute" : ""}
      `}
      style={
        isPositioned
          ? {
              top,
              left,
              right,
              bottom,
            }
          : undefined
      }
    >
      <div className="text-3xl mb-3 text-blue-600">
        {icon}
      </div>

      <h4 className="font-bold text-base md:text-lg text-gray-900">
        {title}
      </h4>
    </div>
  );
}