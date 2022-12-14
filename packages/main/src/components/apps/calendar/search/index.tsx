import { StyledForm, StyledInput } from "./style";

const SearchForm = () => {
    return (
        <StyledForm>
            <StyledInput
                id="calendar-search"
                name="calendar-search"
                placeholder="Buscar en el calendario"
            />
        </StyledForm>
    );
};

export default SearchForm;
