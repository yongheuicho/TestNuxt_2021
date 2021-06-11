export default function(elementName, data) {
  if (typeof elementName != 'string') return false;
  const el = document.getElementById(elementName);
  if (el == null || el == undefined) return false;
  const options = {
    chart: {
      width: 'auto',
      height: 'auto',
    },
  };
  toastui.Chart.lineChart({ el, data, options });
  return true;
}
