import "./ScrollProgress.css";

export default function ScrollProgress({ progress }) {
  return <div id="prog" style={{ width: `${progress}%` }}></div>;
}
