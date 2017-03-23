import React from "react";

class Listcolumn extends React.Component {
    constructor(listColumn) {
    	super();
    		this.state = listColumn
    }
    render() {
        console.log(this.state);
        return(
            <ul>
                <li>lii</li>
            </ul>
        ) 
    }
}

export default Listcolumn;