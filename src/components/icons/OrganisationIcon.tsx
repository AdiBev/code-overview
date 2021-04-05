import * as React from "react";

function OrganisationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path fill="currentColor" d="M17 15h2v2h-2v-2zM19 11h-2v2h2v-2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 7h10v14H1V3h12v4zM8 5h3v2H8V5zm3 14v-2H8v2h3zm0-4v-2H8v2h3zm0-4V9H8v2h3zm10 8V9h-8v2h2v2h-2v2h2v2h-2v2h8zM3 19v-2h3v2H3zm0-4h3v-2H3v2zm3-4V9H3v2h3zM3 7h3V5H3v2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default OrganisationIcon;
