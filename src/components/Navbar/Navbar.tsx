import Image from "next/image";
import FractalLogo from "../../assets/fractal-logo.svg";
import UserInfo from "../UserInfo/UserInfo";
import InputSearch from "../common/InputSearch";

export const Navbar = () => {
  return (
    <div
      className="w-full border-b-2 border-[
#1D1929]"
    >
      <div className="flex justify-between items-center px-10 py-5  max-w-screen-2xl m-auto">
        <div className="flex gap-8">
          <div className="flex items-center">
            <Image src={FractalLogo} alt="logo" width={122} height={32} />
          </div>
          <div>
            <InputSearch />
          </div>
        </div>
        <div>
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
