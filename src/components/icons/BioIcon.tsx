function BioIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M18 2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h12m0 2h-5v5l-2.5-2.3L8 9V4H6v16h12m-5-9a2 2 0 11-2 2 2 2 0 012-2m4 8H9v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1" />
    </svg>
  );
}

export default BioIcon;
