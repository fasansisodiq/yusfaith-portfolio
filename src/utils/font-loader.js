export const loadGoogleFont = (fontFamily, weights = ["400", "700"]) => {
  if (typeof fontFamily !== "string") {
    console.error("Invalid fontFamily:", fontFamily);
    return;
  }

  // Create a link element
  const link = document.createElement("link");
  link.rel = "stylesheet";

  // Build the weight parameter according to Google Fonts API
  const weightParam = weights.length > 0 ? `:wght@${weights.join(";")}` : "";

  // Create the Google Fonts URL
  link.href = `https://fonts.googleapis.com/css2?family=${fontFamily}${weightParam}&display=swap`;

  // Add the link to the document head
  document.head.appendChild(link);

  return fontFamily;
};

//load common fonts
export const fonts = {
  montserrat: "Montserrat, sans-serif",
  urbansiker: "Urbansiker, sans-serif",
  inter: "Inter, sans-serif",
  limelight: "Limelight, sans-serif",
  facinate: "Fascinate, cursive",
};
