import React from 'react';

export default class PageHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="text-center text-dark">Employee Directory</h1>
                        <p className="lead text-center text-dark">Use the search box to narrow results.</p>
                    </div>
                </div>
            </div>
        )
    }
}