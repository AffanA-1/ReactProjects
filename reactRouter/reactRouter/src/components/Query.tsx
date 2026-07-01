import { useSearchParams } from "react-router-dom"

export const Query: React.FC = ()=>{


    // For Query Params Structure
    const [searchParams, setSearchParams] = useSearchParams();


    // URL example: /search?query=javascript&page=2
    const sorting = searchParams.get('sorting'); // returns "javascript"
    const page = searchParams.get('page');   // returns "2" (always a string)

    const handleUpdate = () => {
        const sortVar = sorting === 'desc' ? 'asc' : 'desc'
        setSearchParams({ sorting: sortVar, page: '1' });
    };


  
    const incrementPage = () => {
        setSearchParams((prev) => {
        const currentPage = parseInt(prev.get('page') || '1', 10);
        prev.set('page', (currentPage + 1).toString());
        return prev;
        });
    };

  return (
    <div>
      <button onClick={handleUpdate} className="px-2 py-2 bg-red-50 rounded-2xl m-3">Search React</button>
      <button onClick={incrementPage} className="px-2 py-2 bg-red-50 rounded-2xl m-3">Next Page</button>

       <p>Search Term: {sorting}</p>
      <p>Page: {page}</p>
    </div>
  );
}