import React from 'react';

export default class Component2 extends React.Component {
    constructor() {
        super();
        console.log("%c[Component2.js]", 'color: yellow; font-size: 15px',"\tconstructor Called")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("%c[Component2.js]", 'color: yellow; font-size: 15px',"\tcomponentDidUpdate Called")
    }

    componentDidMount() {
        console.log("%c[Component2.js]", 'color: yellow; font-size: 15px',"\tcomponentDidMount Called")
    }

    render() {
        console.log("%c[Component2.js]", 'color: yellow; font-size: 15px',"\tRender Called")
        return (
            <>
                <p>{this.props.name}</p>
            </>
        )
    }
}