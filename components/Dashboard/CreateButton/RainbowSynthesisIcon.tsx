export default function RainbowSynthesisIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="url(#myGradient)"
      viewBox="0 0 24 24"
      stroke="url(#myGradient)"
      strokeWidth="1.5"
    >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(45)">
          <stop offset="0.09" stopColor="rgba(255, 0, 0, 1)" />
          <stop offset="0.18" stopColor="rgba(255, 154, 0, 1)" />
          <stop offset="0.27" stopColor="rgba(208, 222, 33, 1)" />
          <stop offset="0.36" stopColor="rgba(79, 220, 74, 1)" />
          <stop offset="0.45" stopColor="rgba(63, 218, 216, 1)" />
          <stop offset="0.54" stopColor="rgba(47, 201, 226, 1)" />
          <stop offset="0.63" stopColor="rgba(28, 127, 238, 1)" />
          <stop offset="0.72" stopColor="rgba(95, 21, 242, 1)" />
          <stop offset="0.81" stopColor="rgba(186, 12, 248, 1)" />
          <stop offset="0.9" stopColor="rgba(251, 7, 217, 1)" />
          <stop offset="1" stopColor="rgba(255, 0, 0, 1)" />
        </linearGradient>
      </defs>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
      />
    </svg>
  )
}
