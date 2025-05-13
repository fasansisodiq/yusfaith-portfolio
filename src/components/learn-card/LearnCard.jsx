const LearnCard = ({ title, description }) => {
  return (
    <section className="pt-24 lg:pt-38">
      <div className="space-y-4 lg:space-y-10 mb-6 lg:mb-24">
        <h3 className="flex flex-col text-2xl lg:text-5xl font-semibold uppercase">
          {title}
        </h3>
        <p
          className="text-base lg:text-2xl w-full lg:max-w-[748px] space-y-4"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </section>
  );
};

export default LearnCard;
