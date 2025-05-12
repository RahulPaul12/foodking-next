
import { useEffect, useState } from "react";

export default function useSticky(){
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          setSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);   
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
       
      }, []);
      return sticky
}