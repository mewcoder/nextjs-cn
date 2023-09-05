export default function Check({ size=18 }) {
  return (
    <span className="inline-flex align-middle text-green-600">
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
        <path d="M8 11.857l2.5 2.5L15.857 9M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"></path>
      </svg>
    </span>
  );
}
