import react from "react";
const FilmInfoListItem = ({name}, {url})=> {
    return(
        <>
            <li>
                <a href="{url}">{name}</a>
            </li>
        </>
        
    )
}

export default FilmInfoListItem;



