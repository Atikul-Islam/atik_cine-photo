import  { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `Atik' Cine & Photo -${title}`
    },[title])
};

export default UseTitle;