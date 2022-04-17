const App = () => (
    <div>
      <Person name="Brandon" age={19} hobbies = {["Reading"]} />
      <Person name="Tevez" age={10} hobbies = {["Writing", "Gamming", "Singing"]} />
      <Person name="Peter" age={29} hobbies = {["cricket", "Stamp Collection"]} />
    </div>
  );
  
  ReactDOM.render(<App/>,
    document.getElementById("root")); 