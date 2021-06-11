export default function(elementName) {
  if (typeof elementName != 'string') return false;
  const el = document.getElementById(elementName);
  if (el == null || el == undefined) return false;
  const data = {
    categories: ['Browser'],
    series: [
      {
        name: 'Chrome',
        data: 46.02,
      },
      {
        name: 'IE',
        data: 20.47,
      },
      {
        name: 'Firefox',
        data: 17.71,
      },
      {
        name: 'Safari',
        data: 5.45,
      },
      {
        name: 'Opera',
        data: 3.1,
      },
      {
        name: 'Etc',
        data: 7.25,
      },
    ],
  };
  const options = {
    chart: {
      width: 'auto',
      height: 'auto',
    },
  };
  toastui.Chart.pieChart({ el, data, options });
  return true;
}
