import Board from "./components/Board";
import Menu from "./components/Menu";
import Toolbox from "./components/Toolbox";

export default function Home() {
  return (
    <div className="overflow-hidden h-screen w-full">
      <Menu />
      <Board />
      <Toolbox />
    </div>
  );
}
