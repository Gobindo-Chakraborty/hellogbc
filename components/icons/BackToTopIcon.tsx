export default function BackToTopIcon({ className }: { className: string }) {
  return (
    <svg
      width="25"
      height="14"
      viewBox="0 0 25 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.5 12.5L12.5 1.5L1.5 12.5"
        stroke="#484848"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
