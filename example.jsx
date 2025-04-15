React.createElement("h1", null, "Hello World!");

function Header(props) {
    return <h1>Hello {props.title}! </h1>
}

function App() {
    return (
        <div>
            <Header title="vite" />
            <Main />
            <Footer />
        </div>
    )
}