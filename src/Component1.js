import React from 'react';

class Component1 extends React.Component {
    constructor() {
        super();
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tConstructor Called")
    }

    componentDidMount() {
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tcomponentDidMount Called")
    }

    render() {
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tRender Called")
        return (
            <p>Kumar</p>
        )
    }
}

export default Component1