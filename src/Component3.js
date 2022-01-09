import React from 'react';

export default class Component3 extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '28'
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        console.log("%c[Component3.js]", 'color: blue; font-size: 13px',"\tConstructor Called");
    }

    componentDidMount() {
        console.log("%c[Component3.js]", 'color: blue; font-size: 13px',"\tcomponentDidMount Called");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("%c[Component3.js]", 'color: blue; font-size: 13px',"\tgetSnapshotBeforeUpdate Called");
        console.log("%c[Component3.js]", 'color: blue; font-size: 13px',"\tPrev Props", prevProps);
        console.log("%c[Component3.js]", 'color: blue; font-size: 13px',"\tPrev State", prevState);

        return "delhi"
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log("%c[Component3.js]", 'color: blue; font-size: 13px',"\tcomponentDidUpdate Called");
        console.log("%c[Component3.js]", 'color: blue; font-size: 13px',"\tPrev Props", prevProps);
        console.log("%c[Component3.js]", 'color: blue; font-size: 13px',"\tPrev State", prevState);
        console.log("%c[Component3.js]", 'color: blue; font-size: 13px',"\tSnapshot", snapshot);
    }

    inputChangeHandler(e) {
        let val = e.target.value;
        this.setState({
            value: val
        })
    }   

    render() {
        console.log("%c[Component3.js]", 'color: blue; font-size: 13px',"\trender Called");
        return (
            <>
                <div style={{marginTop: '20px'}}>
                    <input type="text" name="age" value={this.state.value} onChange={this.inputChangeHandler}/>    
                </div>
            </>
        )
    }
}