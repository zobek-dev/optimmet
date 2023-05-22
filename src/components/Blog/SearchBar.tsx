import { useState } from "react";

export const SearchBar = () => {
  const [searchTerms, setSearchTerms] = useState<string | "">("");

  return (
    <div>
      <input
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
        placeholder="Búscar en el blog"
      />
    </div>
  );
};
