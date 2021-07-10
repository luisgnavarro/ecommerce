import React, {useState,useEffect,useMemo} from 'react';

const BuscarContext = React.createContext;

export function BuscarProvider(props){
    const[searchValue, setSearchValue]= useState('');

    useEffect(() =>{
        async function borrarBusqueda(){
            setSearchValue('');
        }
       borrarBusqueda();
    },[]);
    
    const value = useMemo(()=>{
        return({
            searchValue
        })
    }, [searchValue]);
    return <BuscarContext.Provider value = {value} {...props}/>
}

export function useBusqueda(){
    const context = React.useContext(BuscarContext);
    if(!context){
        throw new Error('useBusqueda debe estar dentro del provedor BusacrContext');
    }
    return context;

}