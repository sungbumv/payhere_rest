import React, { Component } from "react";
import SearchBar from "../Common/SearchBar";

class IndexPage extends Component
{
    handleCreate = (data) => {
        console.log(data);
      }
    render()
    {
        return (
            <div className='Main-div'>
               <SearchBar 
                onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

export default IndexPage;
