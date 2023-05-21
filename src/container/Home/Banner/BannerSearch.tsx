import AutoCompleteBox from "./autocompletebox";
import SelectListBox from "./selectlistbox";
import { BiSearch } from "react-icons/bi";

export default function BannerSearch() {
  return (
    <div className="absolute bottom-[7.4em] w-2/3 rounded-[10px] border h-[80px] flex items-center divide-x bg-white pr-5 shadow-xl">
      <SelectListBox />
      <AutoCompleteBox />
      <div className="w-[50px] h-[50px] rounded-[10px] flex items-center justify-center bg-green cursor-pointer">
        <BiSearch size={22} className="text-white" />
      </div>
    </div>
  );
}
