import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) { // {}
    super(props);
    this.state = {
      lang: 'EN',
      age: props.age // Because we want to change age over time
    };
  }

  fxn() {
    console.log(this.props.name);
    console.log(this.state.lang);
  }
}

export default App;

const app1 = new App({ name: 'Pratik', age: 31 });
const app2 = new App({ name: 'Krishna', age: 25 });

// app1 --> App { props: { name: 'Pratik' }, state: { lang: 'EN' } }
// app2 --> App { props: { name: 'Krishna' }, state: { lang: 'EN' } }

// const --> Same initial value + No change in initial value
// props --> Dynamic Initial Value + No change in initial value
// state --> Same initial value + Change in initial value
// state --> Dynamic initial value + change from initial value