const ReactIcon = ({ className }) => {
  return (
    <svg
      className={className}
      aria-label="React"
      role="img"
      viewBox="0 0 512 512"
    >
      <rect width="512" height="512" rx="15%" fill="#ffffff" />
      <circle cx="256" cy="256" r="36" fill="#61dafb" />
      <path
        stroke="#61dafb"
        strokeWidth="18"
        fill="none"
        d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"
      />
    </svg>
  );
};

export default ReactIcon;
