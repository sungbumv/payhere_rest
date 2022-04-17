import React, { Component, useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './common.css';

class SearchBar extends Component {

    state = {
        repoName : ''
    }
    handleChange = (e) => {
        this.setState({
            repoName: e.target.value
        })
      }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
          repoName: ''
        })
    }
    render()
    {
        return (
            <div className="search-div">
              <Paper component="form" onSubmit={this.handleSubmit}
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
              >
                  <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="저장소 찾기"
                      value={this.state.repoName}
                      onChange={this.handleChange}
                      inputProps={{ 'aria-label': '저장소 찾기' }}
                  />
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                  </IconButton>
              </Paper>
            </div>
         
        );
    }

}
export default SearchBar;
