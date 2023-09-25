import { useEffect, useState } from "react";
import { fetchdata, options, url } from "./apiCheck";
import { LoadingPage } from "../LodingPage";
import { Book } from "../Book";
// const rapidApiKey = import.meta.env.VITE_REACT_APP_X_RAPIDAPI_KEY;

export function BookDataLoder() {
  const [books, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      setIsLoading(true);
      
      const data = await fetchdata(url, options);
      setIsLoading(false);
      console.log(data);
      setBook([...data]);
    };
    getBooks();
  }, []);

  return(
    <div>
        <h1 className="text-center">All Books</h1><br/>
        {isLoading?(<LoadingPage/>):((
            books.map((bookitem,index)=>{
                return(<Book key={index} bookItem={bookitem}/>)
            })
        ))}
    </div>
  );
}
