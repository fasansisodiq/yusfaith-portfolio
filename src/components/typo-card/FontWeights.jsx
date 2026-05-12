export default function FontWeights() {
  return (
    <div className="flex gap-4">
      {Array.from({ length: 4 }, (_, index) => {
        const opacity = 1 - index * 0.2;

        return (
          <div key={index} className="flex items-center">
            <p
              className="flex flex-col text-center font-bold"
              style={{
                fontSize: `clamp(${3 - index * 0.5}rem, ${12 - index * 2}vw, ${12 - index * 2}rem)`,
                lineHeight: 1.05,
                opacity,
              }}
            >
              <span>A</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
