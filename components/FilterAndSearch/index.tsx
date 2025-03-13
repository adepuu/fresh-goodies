"use client";

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import useProduct from "@/hooks/useProduct";
import Image from "next/image";
import SearchIcon from "@/public/icons/search.svg";
import FilterIcon from "@/public/icons/filter.svg";
import { useState } from "react";
import useSearchAndFilterContext from "@/context/SearchAndFilterContext";

const FilterAndSearch: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { handleSearch, searchTerm } = useSearchAndFilterContext();

  return (
    <>
      <div className="flex gap-7">
        <Image src={FilterIcon} alt="Filter" className="w-6 h-6" />
        <Image
          src={SearchIcon}
          alt="Search"
          className="w-6 h-6"
          onClick={() => setIsOpened(true)}
        />
      </div>
      <Drawer onClose={() => setIsOpened(false)} open={isOpened}>
        <DrawerContent className="h-[95%]">
          <div className="flex flex-col h-full justify-between">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              className="border-2 border-gray-200 rounded-lg p-2"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FilterAndSearch;
