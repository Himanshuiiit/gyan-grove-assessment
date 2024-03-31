export const converURLForSrc = (rawURL, size = 500) => {
  const RAW_URL1 = rawURL.split("/d/");
  const RAW_URL2 = RAW_URL1[1].split("/view");
  const IMAGE_ID = RAW_URL2[0];
  return `https://drive.google.com/thumbnail?id=${IMAGE_ID}&sz=s${size}`;
};
