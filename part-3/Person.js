const Person = (props) => {
    let result;
    if (props.age<18){
        result = "you must be 18";
    }
    else{
        result = "please go vote!";
    }
    return (
        <div>
            <p>
                Learn some information about this person
                <li>Name is: 
                    {props.name}
                </li>
                <li>Age is : 
                    {props.age}
                </li>
                <li>Hobbies are : 
                    <ul>
                        {props.hobbies.map(h => <li>{h}</li>)}
                    </ul>
                </li>
            </p>
            <h3>{result}</h3>
            <span>................................</span>
        </div>
        )
}