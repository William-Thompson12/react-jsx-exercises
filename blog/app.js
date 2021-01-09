let Header = () => {
    return <header>
        <h1>Title</h1>
        <h2>Name</h2>
        </header>
}
let Article = () => {
    return <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
}
let Footer = () => {
    return <footer>
        <p>Posted: Time</p>
        <ul>
            <li>Likes</li>
            <li>Comments</li>
        </ul>
    </footer>
}

let Blog = () => {
    return <div>
            <Header />
            <Article />
            <Footer />
        </div>
}


ReactDOM.render(<Blog />, document.getElementById('root'))