// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

/// <reference path="../typings/index.d.ts" />

export interface MyXProps { say: string; }

namespace MyComponents {

    export class MyX extends React.Component<MyXProps, {}> {
        render() {
            return <div>{this.props.say}</div>
        }
    }
}

export class HelloComponent extends React.Component<any, any> {

    r() {
        var p: MyComponents.MyX;

    }

    render() {
        return (
            <div>
                <h1>This is React!</h1>
                Hello world!<p />
                <MyComponents.MyX say="dus" />
            </div>
         )
    }
}


