import React  from "react"
import { WrapperSearchBar, Search, Button, WrapperText } from "./style"
import { WithPhotosHoc } from "../../hoc/photosHOC"

const SearchBar = ({context, history}) => {

	const [input, setInput] = React.useState("")

    const handleChange = (ev) => {
        setInput(ev.target.value)
    }

    const handleClick = (ev) => {
        console.log(input)
        context.setTag(input)
    }

    return (
        <WrapperSearchBar>
           <Search type="text" name="name" value={input} onChange={ev => handleChange(ev)}></Search>
           <Button onClick={ev => handleClick(ev)}><WrapperText>Valid</WrapperText></Button>
        </WrapperSearchBar>
    )

}

export default WithPhotosHoc(SearchBar)