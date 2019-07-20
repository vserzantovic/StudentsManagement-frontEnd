import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import './App.css';
import Button from "@material-ui/core/Button";

class App extends Component {

    render() {
        return (
            <div>
                <Paper className="paper">

                    <p>STUDENTS SORTING FROM FILE</p>

                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload File
                        <input
                            type="file"
                            style={{display: "none"}}
                        />
                    </Button>


                </Paper>

            </div>


        )
    }
}

export default App;