import Image from "next/image";
import CloudImage from "../../../public/cloudImage.png"

const AboutPage = () => {
  return <section className="fix-height container m-auto" >
    <h1 className="p-5 text-3xl font-bold text-gray-800" >About Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, hic?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minima.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nobis, non corporis a eaque cum?
    </p>
    <div>
      <Image src={CloudImage} alt="cloud" />
    </div>
  </section>;
};

export default AboutPage;
