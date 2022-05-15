export default function Spinner() {
  return (
    <div>
      <svg className="spinner mx-auto" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="3"
        ></circle>
      </svg>
    </div>
  );
}
