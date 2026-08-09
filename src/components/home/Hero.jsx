import Image from "next/image";
import banner from "../../../public/images/banner.png";

const Hero = () => {
  return (
    <section className="w-full">
      <Image
        src={banner}
        alt="Hero Banner"
        priority
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default Hero;