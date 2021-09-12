import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt=""
        className=""
        style=""
        height={200}
        style={{ margin_bottom: 10 }}
      />
      <Circle color="#3CBC28" size={60}></Circle>
    </center>
  );
}

export default Loading;
