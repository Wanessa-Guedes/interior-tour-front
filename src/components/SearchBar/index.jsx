import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { SBWithDropdown, SearchBarContainer, SearchBarDropdown, SearchBarInput, SearchBarUnclickableButton, SearchBarButtonResult } from "./style";

const SearchBar = () => {
    const [searchResult, setSearchResult] = useState(null);
    const [filterState, setFilterState ] = useState('');
    const navigate = useNavigate();

    function onSubmit (state) {
        const promise = axios.post(process.env.REACT_APP_API_URL+'/searchstate', {state})
        promise.then(response => {
            setSearchResult([response.data])
            console.log('response', response.data)
        })
        promise.catch(e => {
            alert(e.response.data.message)
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(filterState)
        onSubmit(filterState)
    }

    const changeHandler = ({target}) => {
        console.log(target.value)
        setFilterState(target.value)
        if(target.value.length < 3){
             return setSearchResult(null)
        } else {
            onSubmit(filterState)
        }
    }

    const debounce = (change) => {
        let filterTimeOut;
        return (...states) => {
            clearTimeout(filterTimeOut);
            filterTimeOut = setTimeout(() => change(...states), 300);
        };
    }

    const onChange = debounce(changeHandler);
    
    function click (stateId) {
        navigate(`/state/${stateId}/cities`)
        setSearchResult(null)
        setFilterState('')
        document.getElementById("form").reset();
    }

    const RenderResults = ({states}) => {
        if(states[0].length === 0){
            return <SearchBarUnclickableButton>
                        {'Nenhum estado encontrado'}
                    </SearchBarUnclickableButton>}
        
         return ( states.map((state) =>{ return (state.map((s) => 
                                            <SearchBarButtonResult 
                                                key={s.id}
                                                onClick={() => click(s.id)}>
                                                    <p>{s.name}</p>
                                              </SearchBarButtonResult>
                ))
            }
            )    
        )   
    }

    return (<>
        <SBWithDropdown>
            <SearchBarContainer id="form" onSubmit={submitHandler}>
                <SearchBarInput
                    type="text"
                    placeholder="Busque um estado..."
                    onChange={onChange}
                />
                <button type="submit">
                    <BiSearchAlt />
                </button>
            </SearchBarContainer>
            <SearchBarDropdown  state={searchResult}>
                {searchResult ? <RenderResults states={searchResult}/> : <></> }
            </SearchBarDropdown>
        </SBWithDropdown>
    </>
    )

}

export default SearchBar;