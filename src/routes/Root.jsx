const Root = () => {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <nav>
            <ul>
              <li>
                <a href={`/discover`}>
                    discover
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }

export default Root;
