const App = () => (
    <div>
        <Tweet username="user1" 
             name="Name1"
             date="16th April, 2022"
             message="this is my 1st tweet!" />
        <Tweet username="user2" 
             name="Name2"
             date="17th April, 2022"
             message="this is my 2nd tweet!" />
        <Tweet username="user3" 
                name="Name3"
                date="18th April, 2022"
                message="this is my 3rd tweet!" />
    </div>
  );
  
  ReactDOM.render(<App/>,
    document.getElementById("root"));