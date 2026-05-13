import { SectionTitle } from "../ui/section-title";

const UseCard = ({ title, subtitle, description, image, imageAlt }) => {
  return (
    <section className="py-24">
      <div className="space-y-4 lg:space-y-10 mb-6 lg:mb-24">
        <SectionTitle title={title} subtitle={subtitle} text={description} />
      </div>
      <div className="w-full flex items-center justify-center">
        <img src={image} alt={imageAlt} className={`w-full max-w-5xl h-auto`} />
      </div>
    </section>
  );
};

export default UseCard;
