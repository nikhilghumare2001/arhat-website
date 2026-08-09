export default function SolutionCard({
  icon,
  title,
  description,
  onView,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300 flex flex-col">

      {/* Icon */}
      <div className="w-28 h-28 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 text-5xl mb-10">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-3xl font-bold text-gray-900 mb-6">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-8 flex-grow">
        {description}
      </p>

      {/* Button */}
      <button
        onClick={onView}
        className="mt-8 text-left text-blue-600 font-semibold text-lg hover:text-blue-800 transition"
      >
        View Solution →
      </button>

    </div>
  );
}