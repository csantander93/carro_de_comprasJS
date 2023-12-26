import { Component } from "react";

const styles = {
    layout: {
        backgroudColor: "#fff",
        color: "#0A283R",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
    },
    container: {
        width: "1000px",
    }
}
class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout