import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

import TextField from '@material-ui/core/TextField';

import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: "500px";
    min-width: "500px";

  `
const CardSearch = props =>(
  <Container>
    <div>
      <TextField autoFocus  type="text" name="search" id="search" onChange={props.onSearch} placeholder="Titulo"/>
        <SearchIcon />
    </div>
  </Container>
)

export default CardSearch