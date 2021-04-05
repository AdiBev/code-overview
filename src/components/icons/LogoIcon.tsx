function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        stroke="currentColor"
        d="M8.5.5l-2 2m0 0l2 2m-2-2h3a3 3 0 013 3v2m-10 3a2 2 0 100 4 2 2 0 000-4zm0 0v-6m0 0a2 2 0 100-4 2 2 0 000 4zm10 3a2 2 0 100 4 2 2 0 000-4z"
      />
    </svg>
  );
}

export default LogoIcon;
