import React from 'react'
import Publication from './Publication';
// import './publicacions-list.css' 

const PublicationsList = (props) => (
        <ul className="PublicationsList">
            {
                props.publicaciones.map(publicacion => (
                <Publication
                    key={publicacion.id}
                    id={publicacion.id}
                    titulo={publicacion.titulo}
                    tag={publicacion.tag}
                    url={publicacion.url}
                    descripcion={publicacion.descripcion}
                    autor={publicacion.autor}
                />
                ))
            }
        </ul>
)

export default PublicationsList