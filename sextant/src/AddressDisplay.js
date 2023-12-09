import React, { Component} from 'react';
class AddressDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            url: props.url,
            ipAddress: null};
    }

    componentDidMount(props){
        fetch(this.state.url)
            .then(Response => Response.json())
            .then(data => this.setState({ipAddress: data.ip}));
    }

    render() {
        return(
            <span className='AddressDisplay'>
                {this.state.ipAddress}
            </span>
        );
    }

}


export default AddressDisplay;