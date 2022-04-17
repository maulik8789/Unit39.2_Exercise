const Tweet = (props) => {
    return (
      <div>
        <li>
          <b>Username :{props.username}</b>
        </li>
        <li>
          <b>Name :{props.name}</b>
        </li>
        <li>
          <b>Date :{props.date}</b>
        </li>
        <li>
          <b>Tweet :{props.message}</b>
        </li>
        <span>----------------------</span>
      </div>
    )
}