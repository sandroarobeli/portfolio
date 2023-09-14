const HtmlIcon = ({ className }) => {
  return (
    <svg
      className={className}
      aria-label="HTML5"
      role="img"
      viewBox="0 0 512 512"
    >
      <path fill="#e34f26" d="M71 460L30 0h451l-41 460-185 52" />
      <path fill="#ef652a" d="M256 472l149-41 35-394H256" />
      <path
        fill="#ebebeb"
        d="M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147l-63-17-4-45h-56l7 89 116 32z"
      />
      <path
        fill="#ffffff"
        d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z"
      />
    </svg>
  );
};

export default HtmlIcon;
