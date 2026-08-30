// ==================== SOLUTION CARD COMPONENT ====================
// This component displays one Arhat solution.
// It receives the icon, title, description and button action
// from the parent component.

export default function SolutionCard({
  icon,
  title,
  description,
  onView,
}) {
  return (

    // ==================== SOLUTION CARD ====================
    <div
      className="
        bg-white
        rounded-3xl
        shadow-lg
        p-10
        hover:shadow-2xl
        transition
        duration-300
        flex
        flex-col
      "
    >

      {/* ==================== SOLUTION ICON ==================== */}
      <div
        className="
          w-28
          h-28
          bg-blue-100
          rounded-3xl
          flex
          items-center
          justify-center
          text-blue-600
          text-5xl
          mb-10
        "
      >
        {icon}
      </div>


      {/* ==================== SOLUTION TITLE ==================== */}
      <h3 className="text-3xl font-bold text-gray-900 mb-6">
        {title}
      </h3>


      {/* ==================== SOLUTION DESCRIPTION ==================== */}
      <p className="text-gray-600 text-lg leading-8 flex-grow">
        {description}
      </p>


      {/* ==================== VIEW SOLUTION BUTTON ==================== */}
      <button
        type="button"
        onClick={onView}
        className="
          mt-8
          text-left
          text-blue-600
          font-semibold
          text-lg
          hover:text-blue-800
          transition
        "
      >
        View Solution →
      </button>

    </div>
  );
}