import { COLORS, MENU_ITEMS } from "@/constants";
import styles from "./index.module.css";
import { useSelector } from "react-redux";

const Toolbox = () => {
  const updateBrushSize = () => {};
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStroke = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrush =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;

  return (
    <div className={styles.toolboxContainer}>
      {showStroke && (
        <div className={styles.toolItem}>
          <h2 className={styles.toolText}>Color</h2>
          <div className={styles.itemContainer}>
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLACK }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.RED }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.GREEN }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLUE }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.ORANGE }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.YELLOW }}
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
