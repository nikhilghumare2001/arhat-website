// ========================================
// FEATURE CARD COMPONENT
// This component creates a small card that
// contains an icon and a title.
//
// The card can be used normally in a grid,
// or it can be positioned around another
// element using top, left, right and bottom.
// ========================================

export default function FeatureCard({
  icon,
  title,
  top,
  left,
  right,
  bottom,
}) {

  // ========================================
  // CHECK CARD POSITION
  //
  // If any position value is provided,
  // the card will use absolute positioning.
  // ========================================

  const isPositioned =
    top !== undefined ||
    left !== undefined ||
    right !== undefined ||
    bottom !== undefined;


  // ========================================
  // CARD UI
  // ========================================

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

      // Apply position values only when
      // the card is absolutely positioned
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


      {/* ========================================
          FEATURE ICON
      ======================================== */}

      <div className="text-3xl mb-3 text-blue-600">

        {icon}

      </div>


      {/* ========================================
          FEATURE TITLE
      ======================================== */}

      <h4 className="font-bold text-base md:text-lg text-gray-900">

        {title}

      </h4>


    </div>
  );
}