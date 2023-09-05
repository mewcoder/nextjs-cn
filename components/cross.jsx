export default function Cross({ size = 18 }) {
  return (
    <span className="inline-flex align-middle text-gray-600">
      <svg
        data-testid="geist-icon"
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
        style={{
          color: "currentColor",
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <path d="M18 6L6 18"></path>
        <path d="M6 6l12 12"></path>
      </svg>
    </span>
  );
}
