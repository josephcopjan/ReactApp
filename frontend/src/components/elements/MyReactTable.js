import React, { Component, Fragment } from 'react';
import axios from "axios";
import ReactTable, { ReactTableDefaults } from 'react-table-6';

class MyReactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
	componentDidMount() {
		const { query} = this.props;
		this.renderOptions(query);
	}

    renderOptions = (query) => {
        try {
            axios.all([axios.get('http://localhost:9090'+query)]).then(axios.spread((...responses) => {
              this.setState({data: responses[0].data});
            })).catch(errors => {

            })
        } catch (error) { }
    }

    filterCaseInsensitive = (filter, row) => {
        const id = filter.pivotId || filter.id;
        const content = row[id];
        if (typeof content !== 'undefined') {
            // filter by text in the table or if it's a object, filter by key
            if (typeof content === 'object' && content !== null && content.key) {
                return String(content.key).toLowerCase().includes(filter.value.toLowerCase());
            } else {
                return String(content).toLowerCase().includes(filter.value.toLowerCase());
            }
        }

        return true;
    };

  render() {

    const { query, columns, defaultSorted } = this.props;
    const { data } = this.state;

      return (

          <div>
              <ReactTable
                data={data}
                filterable={true}
                defaultFilterMethod={this.filterCaseInsensitive}
                columns={columns}
                defaultSorted={defaultSorted}
                defaultPageSize={10}
                className="-striped -highlight"
                column={{
                        ...ReactTableDefaults.column,
                        style: {
                            borderLeft: 'none',
                            borderRight: 'none',
                        }
                    }
                }
              />
            </div>

      );
  }
}

export default MyReactTable;