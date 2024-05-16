import Image from "next/image";
import SearchIcon from "@/public/icons/search.svg";
import FilterIcon from "@/public/icons/filter.svg";

const FilterAndSearch: React.FC = () => {
  return (
    <div className="flex gap-7">
      <Image src={FilterIcon} alt="Filter" className="w-6 h-6"/>
      <Image src={SearchIcon} alt="Search" className="w-6 h-6"/>
    </div>
  )
}

export default FilterAndSearch;