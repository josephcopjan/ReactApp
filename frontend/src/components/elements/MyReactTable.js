import React, { Component, Fragment } from 'react';
import axios from "axios";
import ReactTable, { ReactTableDefaults } from 'react-table-6';
import authHeader from '../../services/auth-header';

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
        /*
            axios.all([axios.get('http://localhost:9090'+query), { headers: authHeader() }]).then(axios.spread((...responses) => {
              this.setState({data: responses[0].data});
            })).catch(errors => {

            })*/

            axios.get('http://localhost:9090'+query, { headers: authHeader() }).then(
                                      response => {
                                        this.setState({data: response.data});
                                      }
                                      );
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