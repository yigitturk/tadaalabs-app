import './App.css';
import Logo from './components/Logo';
import Wizard from './components/Wizard';
import GradientHeader from './components/gradients/GradientHeader';
import GradientService from './components/gradients/GradientService';
import GradientTeam from './components/gradients/GradientTeam';
import GradientContact from './components/gradients/GradientContact';
import Navbar from './components/Navbar'
import './components/Body.css'
import Cards from './components/cards/Cards';
import Sidebars from './components/sidebars/Sidebars';


var body = document.body,
html = document.documentElement;
  var height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);
function App() {
  window.scrollTo({
    top: height/4*0,
    behavior: 'smooth'
});
//<Wizard></Wizard>

  return (
    <div class="full-height">
      <Logo></Logo>
      <Navbar></Navbar>
      <GradientHeader></GradientHeader>
      <GradientTeam></GradientTeam>
      <GradientContact></GradientContact>
      <Cards></Cards>
    </div>
  );
}

export default App;
