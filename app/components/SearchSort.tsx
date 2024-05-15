interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchSort: React.FC<SearchProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="fixed top-0 left-0 right-0 bg-white p-4">
        <input
          type="text"
          placeholder=" Search..."
          className="w-full p-2 border-2 border-black rounded-full"
        />
        <div className="mt-4">
          <div className="mb-2 font-bold">Sort By</div>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option value="category">Category</option>
            <option value="price">Price</option>
            <option value="calorie">Calorie</option>
            <option value="protein">Protein</option>
            <option value="carbs">Carbs</option>
          </select>
        </div>
        <button
          onClick={onClose}
          className="mt-4 p-2 w-full bg-black text-white rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default SearchSort;
