import logo from './logo.svg';
import './RoutesPages.css';

function HomePage() {
  return (
    <div className="PageContent">
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is the home page</p>
    </div>
  );
}

export default HomePage;