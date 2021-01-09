let TextInput = () => {
    return <input type="text" placeholder="Input Text Here"></input>
}

let YesNoRadio = () => {
    return <div>
        <input type="radio" name="Yes"></input>
        <input type="radio" name="No"></input>
        </div>
}

let SubmitButton = () => {
    return <button type="submit">Submit</button>
}

let Form = () => {
    return <form>
        <TextInput />
        <YesNoRadio />
        <SubmitButton />
    </form>
}


ReactDOM.render(<Form />, document.getElementById('root'))