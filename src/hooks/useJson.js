import { useState, useEffect } from 'react';

export default function useJson(url) {
    const [info, setData] = useState({
        data: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        fetch(url)
            .then(setData(prev => {
                return { ...prev, loading: true}
            }))
            .then(res => {
                if(res.ok) {
                    res.json()
                        .then(d => setData(prev => {
                            return { ...prev, data: d, loading: false}
                        }))
                } else {
                    setData(prev => {
                        return { ...prev, error: res.text, loading: false}
                    })
                }
            })
            .then(setData(prev => {
                return { ...prev, loading: false}
            }))
            .catch(err => console.log(err))
    }, [url]);

    return [info];
}