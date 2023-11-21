const Footer = ({length}) => {
    const today = new Date();

    return (
        <footer>
            <p> {length === 1 || length === 0 ? "Item" : "Items"} : {length}</p>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer