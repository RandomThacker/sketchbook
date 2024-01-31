const { useRef, useEffect, useLayoutEffect } = require("react");
import { useSelector, useDispatch } from "react-redux";

const Board = () => {
  const canvasRef = useRef(null);
  const drawRef = useRef(false);
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

  console.log(color, size);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const changeConfig = () => {
      context.strokeStyle = color;
      context.lineWidth = size;
    };

    changeConfig();
  }, [color, size]);

  //Mounting

  //use layout effect runs even before the elements are rendered on the screen
  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const beginPath = (x,y)=>{
        context.beginPath()
        context.moveTo(x,y)
    }

    const drawLine = (x,y)=>{
        context.lineTo(x,y)
        context.stroke()

    }

    const handleMouseDown = (e) => {
        drawRef.current = true
        beginPath(e.clientX, e.clientY)

    };
    const handleMouseMove = (e) => {
        if(!drawRef.current) return
        drawLine(e.clientX, e.clientY)

    };
    const handleMouseUp = (e) => {
        drawRef.current = false

    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
