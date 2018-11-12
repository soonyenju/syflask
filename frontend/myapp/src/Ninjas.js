import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        // console.log(this.props);
        const { name, age, belt } = this.props;
        return(
            <div className="ninjas">
                {/* <div>Name: {this.props.name}</div> */}
                <div>Name: {name}</div>
                {/* <div>Age: {this.props.age}</div> */}
                <div>Name: {age}</div>
                {/* <div>Belt: {this.props.belt}</div> */}
                <div>Name: {belt}</div>
            </div>
        )
    }
}

export default Ninjas