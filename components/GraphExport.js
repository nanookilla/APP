import { Button } from 'react-bootstrap';
import { select } from 'd3';
import FileSaver from 'file-saver';
import FontAwesome from 'react-fontawesome';

import { Wrapper } from './graph/graph-customization/CustomizerUI';

export default class GraphExport extends React.Component{

  render() {

    return (
      <Wrapper>
        <h1>
          Export
          <Button
            bsStyle='success pull-right'
            onClick={e => this.saveSVG()}
          ><FontAwesome name='download' /> SVG</Button>
        </h1>
      </Wrapper>
    );
  }

  saveSVG(){
    var html = select('svg')
        .attr('title', 'test')
        .attr('version', 1.1)
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .node().parentNode.innerHTML;

    var blob = new Blob([html], {
        type: 'image/svg+xml'
    });
    FileSaver.saveAs(blob, 'graph.svg')
  }
}
