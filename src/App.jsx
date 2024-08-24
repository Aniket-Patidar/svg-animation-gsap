import { useGSAP } from "@gsap/react";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function App() {
  const ref = useRef();

  useGSAP(
    () => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main",
          start: "50% 50%",
          end: "250% 50%",
          scrub: true,
          pin: true,
        },
      });
      tl.to(
        ".svg",
        {
          maskSize: "200%",
        },
        "a"
      );
      tl.to(
        ".img",
        {
          backgroundSize: "100%",
        },
        "a"
      );
      tl.to(
        ".svg2",
        {
          maskSize: "200%",
        },
        "b"
      );
      tl.to(
        ".img2",
        {
          backgroundSize: "100%",
        },
        "b"
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      <div id="main">
        <h1 className="title">Scroll to see Animation</h1>
        <div className="svg">
          <div className="img">
            <div className="svg2">
              <div className="img2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
