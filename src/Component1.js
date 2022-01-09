import React from 'react';

class Component1 extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'mani'
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tConstructor Called");
    }

    componentDidMount() {
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tcomponentDidMount Called")
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tgetSnapshotBeforeUpdate Called")
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tPrev Props", prevProps)
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tPrev State", prevState)

        return "delhi"
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tcomponentDidUpdate Called")
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tPrev Props", prevProps)
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tPrev State", prevState)
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tSnapshot", snapshot)
    }

    inputChangeHandler(e) {
        let val = e.target.value;
        this.setState({
            value: val
        })
    }   

    render() {
        console.log("%c[Component1.js]", 'color: green; font-size: 13px',"\tRender Called")
        return (
            <>
                <div style={{marginTop: '20px'}}>
                    <input type="text" name="name" value={this.state.value} onChange={this.inputChangeHandler}/>    
                </div>
            </>
        )
    }
}

export default Component1