import FontAwesome from 'react-fontawesome';
import DropArea from './DropArea';
import AssignedDimension from './AssignedDimension';

const variableStyle = {
  backgroundColor: 'white',
  padding: '15px',
  margin: '0px 0px 10px 0px'
}

const dropAreaStyle = {
  borderColor: '#2e6da4',
  border: '1px dashed',
  borderRadius: '4px',
  padding: '6px 12px',
  lineHeight: '1.428',
  fontSize: '100%',
  fontWeight: 'bold'
}

export default class Variable extends React.Component{

  render() {
    const label = this.props.variable.label;
    const desc = this.props.variable.desc;
    const isRequired = typeof this.props.variable.isRequired === 'undefined' ? false : this.props.variable.isRequired;
    const takesSingleDimension = typeof this.props.variable.takesSingleDimension === 'undefined' ? false : this.props.variable.takesSingleDimension;
    const mustBeNumeric = typeof this.props.variable.mustBeNumeric === 'undefined' ? false : this.props.variable.mustBeNumeric;


    return (
      <div className='col-md-4'>
          <div style={variableStyle}>

              <div><strong> {label} </strong></div>
              <div><small> {desc} </small></div>

              {/*DEBUG*/}
              <div><kbd>
                Variable
                {isRequired ? ' is required;' : false}
                {takesSingleDimension ? ' takes only one dimension;' : ' takes multiple dimensions;'}
                {mustBeNumeric ? ' must be number' : ' can be number or string'}
              </kbd></div>
              {/*DEBUG*/}

              <ul>
                {this.props.variable.assignedDimensions.map((dimension, i) => {
                  return <AssignedDimension dimension={dimension} key={i} index={i} onRemove={this.removeDimension} moveDimension={this.moveDimension}/>
                })}
              </ul>

              <DropArea onDrop={dimension => this.handleDrop(dimension)}/>
          </div>
      </div>
    );
  }

  handleDrop(dimension){
    const newAssignedDimensions = this.props.variable.assignedDimensions;
    newAssignedDimensions.push(dimension);

    this.props.onAssignedDimensionsOfVariableChange(this.props.label, newAssignedDimensions);
  }

}