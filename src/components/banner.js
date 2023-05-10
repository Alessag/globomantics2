import Image from "next/image";

import { logo } from "./banner.module.css";

const subtitleStyles = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

const Banner = () => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <Image
          src="/GloboLogo.png"
          alt="logo"
          width={300}
          height={150}
          className={logo}
        />
      </div>
      <div className="row-7 mt-5" style={subtitleStyles}>
        Providing houses all over the world
      </div>
    </header>
  );
};

export default Banner;
