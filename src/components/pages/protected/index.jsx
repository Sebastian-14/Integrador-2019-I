import React, {Component} from 'react'
// import PropTypes from 'prop-types'

// import uid from 'uid'
// import $ from 'jquery'  

import { publicaciones } from '../../../data/publicaciones'
import CoursesList from './CoursesList'
// import CourseAddform from './CourseAddForm'
// import CoursesSearch from './CoursesSearch'

class Publications extends Component{

    constructor(...props){
        super(...props)

        this.state = {            
            publicaciones: publicaciones
        }
        // Enlazando
        // this.handleOnAddCourse=this.handleOnAddCourse.bind(this)
        // this.handleOnSearch = this.handleOnSearch.bind(this)
        // this.handleOnFilter = this.handleOnFilter.bind(this)
    }

    // handleOnAddCourse(e){
    //     //alert('Evento en React')
    //     e.preventDefault()

    //     let form =e.target,
    //     course = {
    //         id: (form.id.value) ? form.id.value : Courses.defaultProps.id,
    //         name: (form.name.value) ? form.name.value : Courses.defaultProps.name,
    //         poster: (form.poster.value) ? form.poster.value : Courses.defaultProps.poster,
    //         url: (form.url.value) ? form.url.value : Courses.defaultProps.url,
    //         amount: (form.amount.value) ? form.amount.value : Courses.defaultProps.amount,
    //         teacher: (form.teacher.value) ? form.teacher.value : Courses.defaultProps.teacher,
    //         date: form.date.value ? form.date.value : Courses.defaultProps.date,
    //         categories: (form.categories.value) ? form.categories.value.split(',') : 
    //         Courses.defaultProps.categories
    //     }

    //     //Actualizar el estado
    //     this.setState({
    //         courses:this.state.courses.concat([course])
    //     })
        
    //     form.reset();
    // }

    // handleOnSearch(e) {
    //     let newFilter = Object.assign( {}, this.state.filter, { [e.target.name]: [e.target.value] } )

    // this.setState({
    //     filter: newFilter
    // })

    // //console.log(newFilter)
    // }

    // handleOnFilter(filter, data) {
    //     let regex = new RegExp(filter.search, 'i')
    //     return data.filter(q => ( regex.test(q.name) || regex.test(q.teacher) || regex.test(q.categories) ))
    // }
    
    render(){        
        if(!this.state.courses.length){
            return(
                <article className="Main-container">
                    <p>No hay cursos :(</p>
                </article>
            )
        }else{
            return(
               <article className="Main-container">
                    {/* <CourseAddform onAddCourse={this.handleOnAddCourse} />
                    <CoursesSearch onSearch={this.handleOnSearch} /> */}
                    <PublicationList publications={this.handleOnFilter(this.state.filter, this.state.courses)} />
                </article>
           )
        }        
    }
}
 
//Tipos
// Courses.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//     amount: PropTypes.number.isRequired,
//     teacher: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     categories: PropTypes.array.isRequired
// }

// //Valores por defecto
// Courses.defaultProps = {
//     id: uid(10),
//     name: 'Curso Desconocido',
//     poster: '',
//     url: 'https://ed.team/cursos',
//     amount: 40,
//     teacher: 'Profesor No Asignado',
//     date: 'Fecha No Definida',
//     categories: ['Sin Categoría']
// }

export default Publications