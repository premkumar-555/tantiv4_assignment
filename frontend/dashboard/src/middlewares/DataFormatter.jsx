const DataForamtter = (data) => {
  const dataFormated = [];
  let unikHostNames = {},
    unikDates = {};
  for (let i = 0; i < data.length; i++) {
    let hostName = data[i]["hostName"],
      date = new Date(`${data[i]["createdAt"]}`).toISOString().split("T")[0];
    if (!(hostName in unikHostNames)) {
      unikHostNames[hostName] = hostName;
    }
    if (!(date in unikDates)) {
      unikDates[date] = date;
    }
  }
  for (const host in unikHostNames) {
    for (const date in unikDates) {
      let download = 0,
        upload = 0;
      for (let i = 0; i < data.length; i++) {
        let hostName = data[i]["hostName"],
          createdAt = new Date(`${data[i]["createdAt"]}`)
            .toISOString()
            .split("T")[0];
        if (hostName === host && date === createdAt) {
          upload += +data[i]["upload"];
          download += +data[i]["download"];
        }
      }
      dataFormated.push({
        hostName: host,
        createdAt: date,
        upload: Math.round(upload / 1000000),
        download: Math.round(download / 1000000),
      });
    }
  }

  return dataFormated;
};

export default DataForamtter;
