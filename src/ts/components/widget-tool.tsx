import "core-js";

import * as React from "react";

import { Widget } from "../models/widget";

// @TODO Clean this section. Used for validating only.
if (Widget) {
    console.log("Type of Widget: ", typeof(Widget));
}

interface WidgetToolProps {
    widgets: Widget[];
}

export class WidgetTool extends React.Component<WidgetToolProps, any> {

 // @TODO Clean this as this returns 'undefine'.
    // public static propTypes = {
    //     widgets: React.PropTypes.arrayOf(
    //         React.PropTypes.instanceOf(Widget),
    //     ),
    // };

    public static defaultProps = {
        widgets: [] as Widget[],
    };

    private wrapperStyle: any;

    constructor(props: WidgetToolProps) {
        super(props);

        this.wrapperStyle = {
            border: "1px solid lightgray",
            margin: "10px",
            padding: "5px",
        };
    }

    public render() {

        return <div style={this.wrapperStyle}>
                <h1>Widgets</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.props.widgets.map(
                       (widget: Widget) => <tr key={widget.id}>
                            <td>{widget.name}</td>
                            <td>{widget.description}</td>
                            <td>{widget.size}</td>
                            <td>{widget.quantity}</td>
                            <td>{widget.price}</td>
                       </tr>,
                       )}
                    </tbody>
                </table>
            </div>;
    }
}
