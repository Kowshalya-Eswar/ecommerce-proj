// import { createContext,useState,useEffect } from "react";

// const DataContext = createContext({})

// export const DataProvider =({children})=>{
//     const[search,setSearch]=useState('');
//     const[searchResults,setSearchResults]=useState([]);
   
//     useEffect(()=>{
//         const FilteredResults = products.filter((product)=>
//         ((product.title).toLowerCase()).includes(search.toLowerCase()))
//         setSearchResults(FilteredResults)
//     },[search,products])
   
//     return(
//         <DataContext.Provider value={{
          
//         }}>
//             {children}
//         </DataContext.Provider>
//     )
// }

// export default DataContext;