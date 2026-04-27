import HomePg from "./Home";
import { Banner } from "./components/Banner";

export default function AIHome() {
  return (
    <div>
      <div className="pointer-events-none z-50 w-svw h-svh absolute flex justify-between">
        <Banner />
        <Banner />
      </div>
      <HomePg />
    </div>
  );
}
