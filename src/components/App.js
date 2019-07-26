import React, { Component } from "react";
import { Markdown } from '@macrostrat/ui-components';
import { Button } from "@blueprintjs/core"


class App extends Component {
    render() {
        return (
            <div>
                <h1>
                    My react App
                </h1>
                <Button large>My big button</Button>
            </div>
        )
    }
}

export default App;
