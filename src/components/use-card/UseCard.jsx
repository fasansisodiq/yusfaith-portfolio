const UseCard = ({ title_one, title_two, description, image, imageAlt }) => {
  return (
    <section className="pt-24 lg:pt-38">
      <div className="space-y-4 lg:space-y-10 mb-6 lg:mb-24">
        <h3 className="flex flex-col text-2xl lg:text-5xl font-semibold uppercase">
          {title_one}
          <br />
          {title_two}
        </h3>
        <p className="text-base lg:text-2xl w-full lg:max-w-[748px]">
          {description}
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <img src={image} alt={imageAlt} className={`w-full max-w-5xl h-auto`} />
      </div>
    </section>
  );
};

export default UseCard;
