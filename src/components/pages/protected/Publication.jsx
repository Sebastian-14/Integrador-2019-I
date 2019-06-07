import React from 'react'

const Publication =(props)=>(
    <li className="PublicationsList-item">
        <a className="PublicationsList-link" href={props.url} target="_blank">
            <figure>
                <img src={props.url} alt={props.titulo}/>
                <figcaption>
                    <h2>{props.titulo}</h2>
                </figcaption>
            </figure>
        </a>
        <section>
            {/* <p>
                <i className="fa fa-graduation-cap"></i>
                {props.titulo}
            </p> */}
            <p>
                {/* <i className="fa fa-calendar"></i> */}
                {props.descripcion}
            </p>
            <p>                
                <b>
                    <i className="fa fa-key"></i>
                    {props.id}
                </b>
            </p>
            <p>
                <i className="fa fa-tags"></i>
                {
                    props.tag.map(
                        (cat, index, arr) => 
                        ( index === arr.length - 1 )
                            ? cat
                            : `${cat}, `
                    )
                }
            </p>
        </section>
    </li>
)

export default Publication