function timeConversion(s) {
  /*
   * Write your code here.
   */
  let format24hr = "";
  if (s.includes("PM")) {
    s = s.replace("PM", "");
    let [hr, min, sec] = s.split(":");
    if (hr !== 12) {
      parseInt(hr) += 12;
    }
    format24hr = hr + ":" + min + ":" + sec;
  }
  if (s.includes("AM")) {
    s = s.replace("AM", "");
    let [hr, min, sec] = s.split(":");
    if (hr === 12) hr = "00";
    format24hr = hr + ":" + min + ":" + sec;
  }
  return format24hr;
}
