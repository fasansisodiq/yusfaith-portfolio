const WireFrame = ({ title, images }) => {
  console.log(title, images);
  return (
    <section>
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-24 mt-24">
        {title}
      </h2>
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
