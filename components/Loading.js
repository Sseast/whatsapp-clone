import { Circle } from "better-react-spinkit";
import Image from "next/image";
function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt=""
        height={200}
        width={200}
        className={{ margin_bottom: 10 }}
      />
      <Circle color="#3CBC28" size={60}></Circle>
    </center>
  );
}

export default Loading;
