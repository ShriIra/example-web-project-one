export default function MyReactComponent() {
    return (
        <>
            <h1>My Heading</h1>
            <seciton>
                My Content
            </seciton>
        </>
    )
}

const AnotherComponent = () => {
    return (
        <>
            <MyReactComponent />
        </>
    )
}