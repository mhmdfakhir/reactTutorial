
function Button() {

    const handleClick = (e) => e.target.textContent = "Ouch !!!"

    return(
        <button onClick={(e) => handleClick(e)}>Click here</button>
    );
}

export default Button