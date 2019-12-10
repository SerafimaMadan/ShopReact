import React from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { searchGoods } from '../../actions/actionFunctions'
import { push } from 'connected-react-router';

export default function Searching() {
    const {text} = useSelector(state => state.serviceSearch);
    const dispatch = useDispatch();
    // searching row in catalog
    const handleChange = ({target}) => {
        dispatch(searchGoods(target.value))
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(push(text));
    };
    return (
        <form  onSubmit={handleFormSubmit}>
            <input className="form-control" placeholder="Поиск" value={text} onChange={handleChange} />
        </form>
    )
}