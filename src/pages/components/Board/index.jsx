import { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MENU_ITEMS } from "@/constants";
import { menuItemClick, actionItemClick } from '@/slice/menuSlice'


const Board = () => {
    const dispatch = useDispatch()
    const canvasRef = useRef(null);
    const drawRef = useRef(false);
    const { activeMenuItem, actionMenuItems } = useSelector((state) => state.menu);
    const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);
  
    useEffect(() => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
  
      if (actionMenuItems === MENU_ITEMS.DOWNLOAD) {
        const URL = canvas.toDataURL()
            const anchor = document.createElement('a')
            anchor.href = URL
            anchor.download = 'sketch.jpg'
            anchor.click()
      }
      dispatch(actionItemClick(null))
      console.log(actionMenuItems);
    }, [actionMenuItems, dispatch]);
  
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
  
    useLayoutEffect(() => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      const beginPath = (x, y) => {
        context.beginPath();
        context.moveTo(x, y);
      };
  
      const drawLine = (x, y) => {
        context.lineTo(x, y);
        context.stroke();
      };
  
      const handleMouseDown = (e) => {
        drawRef.current = true;
        beginPath(e.clientX, e.clientY);
      };
      const handleMouseMove = (e) => {
        if (!drawRef.current) return;
        drawLine(e.clientX, e.clientY);
      };
      const handleMouseUp = () => {
        drawRef.current = false;
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
  
