import React, { Component } from 'react';
import { client } from './config.js';
import { resolveItemInRichText } from './itemResolver';
import { showCustomChart } from './js/showCustomChart.js';

class Chart extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loaded: false,
        page: props.page
      };
    }

    // Kontent API call to get a specific graph
    fetchChart(codename) {
        client.item(codename)
          .queryConfig({
            richTextResolver: resolveItemInRichText,
          })
          .toObservable()
          .subscribe((response) => {
            showCustomChart(response.item);
            this.setState({
                loaded: true,
              });
          });
      }

    componentDidMount() {
        for (let chart of this.props.page.body.linkedItemCodenames)
        {
            // get the element created by resolveHtml in PageView
            // itemResolver.js sets the element's name to the content item's codename
            let graphCodename = document.getElementById(chart).getAttribute('name');
            this.fetchChart(graphCodename);
        }
    }

      render() {
        if (this.state.loaded) {
          return null;
        } else {
          return (
            <div>
              Loading...
              </div>
          )
        }
      }
    }
    
    export default Chart;