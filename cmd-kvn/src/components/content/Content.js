import React from 'react';

import './Content.scss';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 'World',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({ input: e.target.value });
    }

    render() {
        return (
            <div className='content' >
                <input 
                    type='text'
                    value={this.state.input}
                    onChange={this.handleInputChange}
                />
                <span>Hello {this.state.input}</span>
            </div>
        );
    }

}

export default Content;
