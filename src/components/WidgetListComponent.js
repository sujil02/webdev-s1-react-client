import React from 'react'

const WidgetListComponent = () =>
    <div className="card widgetCss" >
        <div className="card-header">
            <div className="row justify-content-end ml-auto mr-1">
                <button className="btn btn-success"> Save </button>
                <label> <strong>Preview</strong></label>
                <span><i className="fa fa-toggle-on"></i></span>
            </div>
        </div>
        <div className="card-body">
            <div className="row">
                    <h3>Heading Widget</h3>
            </div>
            <form>
                <div className="form-group">
                    <input className="form-control" placeholder="Heading Widget"/>
                </div>
                <div className="form-group">
                    <select className="form-control"> <option>Heading 1</option> </select>
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Widget Name"/>
                </div>
            </form>
            <div className="row">
                <div className="d-flex">
                    <h4><strong>Preview</strong></h4>
                </div>
            </div>
            <div className="row">
                <div className="d-flex">
                    <h2><strong>Heading Text</strong></h2>
                </div>
            </div>
        </div>
        <div className="card-footer">
            <div className="row justify-content-end">
                <button className="btn btn-danger">
                    <i className="fa fa-plus-circle"></i>
                </button>
            </div>
        </div>

    </div>

export default WidgetListComponent