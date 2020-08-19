import React, { Component } from 'react';
import Chart from './Chart.js';
import { client } from './config.js';
import { resolveItemInRichText } from './itemResolver';

class PageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      page: null
    };
  }

  fetchPages() {
    client.items()
      .queryConfig({
        richTextResolver: resolveItemInRichText,
      })
      .toObservable()
      .subscribe((response) => {
        this.setState({
          loaded: true,
          page: response.items[0]
        });
      });
  }
  
  componentDidMount() {
      this.fetchPages();   
  }

  render() {
    if (this.state.loaded) {
      return (
        <>
          <h1>
            {this.state.page.title.value}
          </h1>
          <div id="main-content" dangerouslySetInnerHTML={{__html: this.state.page.body.resolveHtml()}}>
          </div>
          <Chart page={this.state.page}/>
        </>
      );
    } else {
      return (
        <div>
          Loading...
          </div>
      )
    }
  }
}

export default PageView;