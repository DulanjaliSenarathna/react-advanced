import { useEffect } from "react";

export default function useDocumentTitle(title){
    useEffect(()=>{
        document.title =title;

        return () =>{
            console.log('Cleanup');//componentwiiunmout stage. cleanup codes 
        };
    });// [count] means, useEffect function call , only when the count is change
}