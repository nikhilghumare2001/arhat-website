// ========================================
// FEATURE COMPONENT
// This component displays one feature with:
// 1. An icon
// 2. A title
// 3. A short description
// ========================================

export default function Feature({ icon, title, text }) {
  return (

    // Main feature container
    <div className="flex items-start gap-4 group">


      {/* ========================================
          FEATURE ICON
          The icon is passed from the parent component
      ======================================== */}

      <div
        className="
          w-14 h-14
          rounded-full
          bg-blue-600
          text-white
          flex items-center justify-center
          text-2xl
          shadow-lg
          group-hover:scale-110
          transition
        "
      >

        {icon}

      </div>


      {/* ========================================
          FEATURE CONTENT
          Contains title and description
      ======================================== */}

      <div>


        {/* Feature title */}

        <h3 className="text-xl font-semibold text-gray-900">

          {title}

        </h3>


        {/* Feature description */}

        <p className="text-gray-600 mt-1">

          {text}

        </p>


      </div>

    </div>
  );
}