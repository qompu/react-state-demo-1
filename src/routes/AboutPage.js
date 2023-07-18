import logo from './logo.svg';
import './RoutesPages.css';

function AboutPage() {
  return (
    <div className="PageContent">
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is the about page</p>
    </div>
  );
}

export default AboutPage;