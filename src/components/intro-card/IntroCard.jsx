const IntroCard = ({ title, description, image, imageAlt }) => {
  return (
    <section className="w-full h-full lg:h-screen flex flex-col md:flex-row items-center justify-center pt-24 lg:-mt-20">
      <div className="md:w-1/2 space-y-4 lg:space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
          {title}
        </h2>
        <p className="text-base lg:text-xl">{description}</p>
      </div>
      <div className="md:w-1/2">
        <img
          loading="lazy"
          src={image}
          alt={imageAlt}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default IntroCard;
