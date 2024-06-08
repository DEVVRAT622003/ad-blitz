import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/userContext";
import { useParams } from "react-router-dom";
import Card from "./Card";

const SearchItem = () => {
  const { item } = useParams();
  const { allProduct } = useContext(UserContext);
  const [location, setLocation] = useState("Jaipur");
  const [arr, setArr] = useState([]); // Define arr in component state

  const handleSearch = () => {
    console.log(item);
    // filter by location
    const filteredByLocation = allProduct.filter((el) => el.city === location);
    // Filter by search
    const filteredArr = filteredByLocation.filter((el) =>
      el.title.toLowerCase().includes(item.toLowerCase())
    );

    setArr(filteredArr); // Update arr state with filtered results
  };

  useEffect(() => {
    handleSearch(); // Call handleSearch whenever item changes
  }, [item]); // Re-run effect when item changes

  return (
    <div className="min-h-screen">
      {arr.length === 0 ? (
        <div className="">
          <h2 className="text-center mt-2 mb-2 md:mb-4 md:mt-4 text-lg lg:text-2xl font-bold">No product available</h2>
        </div>
      ) : (
        <>
          <div className="">
            <h2 className="text-center mt-2 mb-2 md:mb-4 md:mt-4 text-lg lg:text-2xl font-bold">Showing results for {item}</h2>
          </div>
          <div className="px-1 lg:px-[5vw] container flex flex-wrap justify-start items-center">
            {arr.map((item) => (
              <Card key={item.id} item={item} /> 
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchItem;


// import React, { useState, useContext } from "react";
// import { UserContext } from "../../Contexts/userContext";
// import { useParams } from "react-router-dom";
// import Card from "./Card";

// const SearchItem = () => {
//   const { item } = useParams();
//   const { allProduct } = useContext(UserContext);
//   const [location, setLocation] = useState("Jaipur");
//   const [arr, setArr] = useState([]); // Define arr in component state

//   const handleSearch = () => {
//     console.log(item);
//     // filter by location
//     const filteredByLocation = allProduct.filter((el) => el.city === location);
//     // Filter by search
//     const filteredArr = filteredByLocation.filter((el) =>
//       el.title.toLowerCase().includes(item.toLowerCase())
//     );

//     setArr(filteredArr); // Update arr state with filtered results
//   };

//   // Call handleSearch when component mounts to populate arr
//   useState(() => {
//     handleSearch();
//   }, []); // Empty dependency array ensures it runs only once on mount

//   return (
//     <div className="min-h-screen">
//       {arr.length === 0 ? (
//         <div className="">
//           <h2 className="text-center mt-2 mb-2 md:mb-4 md:mt-4 text-lg lg:text-2xl font-bold">No product available</h2>
//         </div>
//       ) : (
//         <>
//           <div className="">
//             <h2 className="text-center mt-2 mb-2 md:mb-4 md:mt-4 text-lg lg:text-2xl font-bold">Showing results for {item}</h2>
//           </div>
//           <div className="px-1 lg:px-[5vw] container flex flex-wrap justify-start items-center">
//             {arr.map((item) => (
//               <Card key={item.id} item={item} /> 
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default SearchItem;


