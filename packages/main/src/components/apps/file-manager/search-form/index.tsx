import { StyledForm, StyledInput } from "./style";

const SearchForm = () => {
    return (
        <StyledForm>
            <StyledInput
                id="file-search"
                name="file-search"
                placeholder="Buscar"
            />
        </StyledForm>
    );
};

export default SearchForm;
