function AutomationStep({
  step,
  totalSteps,
  title,
  description,
}) {
  return (
    <div className="max-w-md">

      {/* Step counter */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-sm font-semibold text-blue-600">
          0{step}
        </span>

        <div className="w-20 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-700"
            style={{
              width: `${(step / totalSteps) * 100}%`,
            }}
          />
        </div>

        <span className="text-sm text-gray-400">
          0{totalSteps}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-5 text-lg text-gray-600 leading-8">
        {description}
      </p>

      {/* Scroll hint */}
      <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
        <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-gray-400 rounded-full animate-bounce" />
        </div>

        <span>Scroll to explore</span>
      </div>
    </div>
  );
}

export default AutomationStep;