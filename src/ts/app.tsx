import { Object } from "core-js";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Widget } from "./models/widget";

import { WidgetTool } from "./components/widget-tool";

import "../scss/styles.scss";

import "bootstrap-loader";

fetch("http://localhost:5000/widgets")
    .then((res: Response) => res.json())
    .then((data: any) =>
        (data as Widget[]).map((w: Widget) =>
            Object.assign(new Widget(), w)))
    .then((widgets: Widget[]) => {
        ReactDOM.render(<WidgetTool widgets={widgets} />, document.querySelector("main"));
    });
