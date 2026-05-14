import { SectionTitle } from "../../../components/ui/section-title";

const WireFrame = ({ title, subtitle, images }) => {
  console.log(title, images);
  return (
    <section>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        className="mb-8"
        color="traceBlue"
      />
      <div className="w-full grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WireFrame;
