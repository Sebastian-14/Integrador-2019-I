import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const CardSearch = props =>(
  <form action="">
    <input type="search" name="search" id="search" onChange={props.onSearch} placeholder="Titulo"/>
      <SearchIcon />
  </form>
)

export default CardSearch