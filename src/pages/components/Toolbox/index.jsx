import { COLORS, MENU_ITEMS } from "@/constants";
import styles from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeColor, changeBrushSize } from "@/slice/toolboxSlice";

const Toolbox = () => {
  const dispatch = useDispatch();

  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStroke = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrush =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;

    const updateBrushSize = (e) => {
      dispatch(changeBrushSize({item: activeMenuItem, size: e.target.value}))
    };

    const updateColor = (newColor) => {
      dispatch(changeColor({item: activeMenuItem, color: newColor}))
    };


  return (
    <div className={styles.toolboxContainer}>
      {showStroke && (
        <div className={styles.toolItem}>
          <h2 className={styles.toolText}>Color</h2>
          <div className={styles.itemContainer}>
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLACK }}
              onClick={()=>updateColor(COLORS.BLACK)}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.RED }}
              onClick={()=>updateColor(COLORS.RED)}

            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.GREEN }}
              onClick={()=>updateColor(COLORS.GREEN)}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLUE }}
              onClick={()=>updateColor(COLORS.BLUE)}

            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.ORANGE }}
              onClick={()=>updateColor(COLORS.ORANGE)}

            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.YELLOW }}
              onClick={()=>updateColor(COLORS.YELLOW)}

            />
          </div>
        </div>
      )}

      {showBrush && (
        <div className={styles.toolItem}>
          <h2 className={styles.toolText}>Brush Size</h2>
          <div className={styles.itemContainer}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={updateBrushSize}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbox;
