import axios from "axios";
import { useState } from "react";
import { SBWithDropdown, SearchBarContainer, SearchBarDropdown, SearchBarInput, SearchBarUnclickableButton, SearchBarButtonResult } from "./style";

const SearchBar = () => {
    const [searchResult, setSearchResult] = useState(null)

    function onSubmit (state) {
        const promise = axios.post(process.env.REACT_APP_API_URL+'/searchstate', {state}, {})
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
        onSubmit()
    }

    const changeHandler = ({target}) => {
        if(target.value.length < 3) return setSearchResult(null)
        onSubmit(target.value)
    }

    const debounce = (change) => {
        let filterTimeOut;
        return (...states) => {
            clearTimeout(filterTimeOut);
            filterTimeOut = setTimeout(() => change(...states), 500);
        };
    }

    const onChange = debounce(changeHandler);

    const RenderResults = ({states}) => {
        if(states[0].length === 0){
            return <SearchBarUnclickableButton>
                        {'Nenhum estado encontrado'}
                    </SearchBarUnclickableButton>}
        
        return ( states.map((state, index) => <SearchBarButtonResult key={state[index].id}>
                        <p>{state[index].name}</p>
            </SearchBarButtonResult>)    
        )    
    }

    return (<>
        <SBWithDropdown>
            <SearchBarContainer onSubmit={submitHandler}>
                <SearchBarInput
                    type="text"
                    placeholder="Busque um estado..."
                    onChange={onChange}
                />
            </SearchBarContainer>
            <SearchBarDropdown  state={searchResult}>
                {searchResult ? <RenderResults states={searchResult}/> : <></> }
            </SearchBarDropdown>
        </SBWithDropdown>
    </>
    )

}

export default SearchBar;