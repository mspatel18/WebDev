Quiz!

1. What is a React component?
A function that returns React elements. (UI)

Components are independent and reusable bits of code. 
2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
first letter of function name is not capital

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}


ReactDOM.render(Header(), document.getElementById("root"))
```
Header in render is <Header() />