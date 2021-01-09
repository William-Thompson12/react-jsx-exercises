let ListGroupItem = () => {
    return <li class="list-group-item">Cras justo odio</li>
}

let ListGroup = () => {
    return <ul class="list-group">
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
    </ul>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))