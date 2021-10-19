import react from "react";
const FilmInfoListItem = ({name, url})=> {
    return(
        <>
            <li>
                
                <a href={url} target="_blank">{name}</a>
            </li>
        </>
        
    )
}

export default FilmInfoListItem;



