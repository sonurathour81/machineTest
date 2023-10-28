import data from "../../data.json";

export const transformedData = () => {
  const transData = {};

  data?.forEach((item) => {
    const [space, type, date, fileName] = item.path.split("/");

    transData[space] = transData[space] || {};
    transData[space][type] = transData[space][type] || {};
    transData[space][type][date] = {
      size: item.size,
      url: item.url,
      fileName,
      openStatus:false
    };
  });
  return transData;
};
