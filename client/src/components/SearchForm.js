import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// icons
import { FiSearch } from 'react-icons/fi';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => clearTimeout(timout);
  }, [isAnimating]);

  const handleSearchInput = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchItem.length > 0) {
      navigate(`/search?query=${searchItem}`);
      setSearchItem('');
    } else {
      setIsAnimating(true);
      console.log('please search for a product');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isAnimating ? 'animate-shake' : 'animate-none'
      } relative w-full border-primary border-[1px] rounded-md`}
    >
      <input
        type="text"
        className="input caret-accent"
        placeholder="Search for a product..."
        onChange={handleSearchInput}
        value={searchItem}
      />
      <button className="btn btn-accent absolute top-0 right-0 rounded-bl-none rounded-tl-none">
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchForm;
