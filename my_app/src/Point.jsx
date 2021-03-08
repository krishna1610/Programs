class Component {
    constructor(props) {
        this.props = props;
    }
}

class Point extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        };
    }
}

class Size extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height
        };
    }
}

class Rectangle extends Component {
    constructor(props) { // props = { point: new Point({x:1, y:1}), size:new Size({width:3, height:8}) }
        super(props);
        this.state = {
            area: props.size.props.width * props.size.props.height,
        };
    }
}

const p1 = new Point({});
const p2 = new Point({});

const s1 = new Size({ width:3, height:5 });
const r1 = new Rectangle({
    point: new Point({x:1, y:1}), 
    size:new Size({width:3, height:8})
});

console.log(p1.state.x, p1.state.y);
console.log(s1.props.width, s1.props.height);
console.log(r1.props.point.state.x, r1.props.point.state.y,
    r1.props.size.props.width, r2.props.size.props.height );
console.log(r1.state.area)