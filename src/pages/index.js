import Board from "./components/Board";
import Menu from "./components/Menu";
import Toolbox from "./components/Toolbox";

export default function Home() {
  return (
    <div className="overflow-hidden h-screen w-full bg-[#202124] sm:overflow-y-hidden">
      <Menu />
      <Board />
      <Toolbox />
    </div>
  );
}
