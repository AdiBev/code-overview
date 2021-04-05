import { IconTypes } from "../../utils/types";
import BioIcon from "./BioIcon";
import ForkIcon from "./ForkIcon";
import GithubIcon from "./GithubIcon";
import LocationIcon from "./LocationIcon";
import LogoIcon from "./LogoIcon";
import OrganisationIcon from "./OrganisationIcon";
import StarIcon from "./StarIcon";

interface Props {
  iconType: IconTypes;
  styles?: string; //tailwindcss styles here
}

const Icon: React.FunctionComponent<Props> = ({ iconType, styles }) => {
  const renderIcon = (name: IconTypes) => {
    switch (name) {
      case IconTypes.FORK:
        return <ForkIcon className={styles} />;
      case IconTypes.LOGO:
        return <LogoIcon className={styles} />;
      case IconTypes.LOCATION:
        return <LocationIcon className={styles} />;
      case IconTypes.ORGANISATION:
        return <OrganisationIcon className={styles} />;
      case IconTypes.BIO:
        return <BioIcon className={styles} />;
      case IconTypes.GITHUB:
        return <GithubIcon className={styles} />;
      case IconTypes.STAR:
        return <StarIcon className={styles} />;
      default:
        return null;
    }
  };
  return <>{renderIcon(iconType)}</>;
};

export default Icon;
