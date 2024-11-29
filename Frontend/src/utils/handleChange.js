export const handleChange=(inputValue,inputFor,setUserdata)=>(
    setUserdata(prev=>({...prev,[inputFor]:inputValue}))
)