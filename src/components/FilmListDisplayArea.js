import React from 'react';
import FilmInfoListItem from './FilmInfoListItem';

const FilmListDisplayArea = ({films}) => {
    const filmComponents = films.map((film) => {
        return <FilmInfoListItem name={film.name} url={film.url} key={film.id} />
    })
    return (
        <>
            <ul>
                <li>{filmComponents}</li>
            </ul>
            <hr/>
            
        </>
    );
}

export default FilmListDisplayArea


