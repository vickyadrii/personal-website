import Image from "next/image";
import Link from "next/link";
import { getAssetUrl } from "@/lib/utils";
import { socialMedia } from "@/constants";

import ButtonIcon from "@/components/ui/button-icon/button-icon";

type Props = {
  isResume?: boolean;
};

const SocialMedia = ({ isResume = true }: Props) => {
  return (
    <div className="flex items-center md:gap-6 gap-4">
      {isResume && (
        <Link
          href="https://docs.google.com/document/d/1HlxOJOguPEwffZP168cXbCIQoUoMq4_idJASMHYaPZg/edit?usp=sharing"
          target="_blank"
        >
          <ButtonIcon icon={getAssetUrl("/icons/ic_arrow_down.svg")}>View Resume</ButtonIcon>
        </Link>
      )}
      <ul className="flex items-center md:gap-4 gap-4">
        {socialMedia.map(({ href, icon }) => (
          <Link key={href} href={href}>
            <li>
              <Image src={getAssetUrl(icon)} alt={href} width={24} height={24} className="md:w-6 w-5 md:h-6 h-5" />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
