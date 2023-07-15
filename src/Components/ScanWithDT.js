import React from 'react';
import '../Styles/ScanPages.css';
import Navbar from './Navbar';
import Footer from './Footer';


class ScanWithDT extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: '',
            filename: '',
            pred: '',
            error: '',
            prob: ''
        };

        this.handleUploadFile = this.handleUploadFile.bind(this);
    }

    handleUploadFile(ev) {
        ev.preventDefault();

        const file = this.uploadInput.files[0];
        if (file && !file.name.endsWith('.csv')) {
            alert('Please verify your file. Only CSV files are allowed.');
            return;
        }

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);

        fetch('http://localhost:5000/ScanWithDT', {
            method: 'POST',
            body: data,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    this.setState({ error: data.error });
                } else {
                    console.log(data);
                    const { result, filename, pred, prob } = data;
                    this.setState({ result, filename, pred, error: '' , prob });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { result, pred, error , prob} = this.state;

        const backgroundColorResult = result === 'Attack' ? '#f44336' : '#00bf63';
        let backgroundColorPred;
        if (pred === 'False Normal' || pred === 'False Attack') {
            backgroundColorPred = '#f44336';
        } else {
            backgroundColorPred = '#00bf63';
        }

        return (
            <div>
                <Navbar />
                <div className="scan-page">
                    <div className="model-title-container">
                        <h1 className="model-title">Scan with Decision Tree</h1>
                        <p className="model-desc">Decision Tree is a high-performance algorithm for classification</p>
                    </div>

                    <div className="container scan-container">
                        <div className="select-section">
                            <p className="select-text">Select the file you want to scan:</p>
                            <p>Files Supported: CSV</p>
                            <label className="upload-button">
                                UPLOAD FILE &nbsp;<i className="fa fa-plus-circle" aria-hidden="true"></i>
                                <input
                                    id="select-btn"
                                    className="file-input"
                                    type="file"
                                    ref={(ref) => {
                                        this.uploadInput = ref;
                                    }}
                                />
                            </label>
                            <button onClick={this.handleUploadFile} className="button-to-scan">
                                SCAN
                            </button>
                        </div>

                        <div className="predict-section">
                            {error && <p className="error-msg">{error}</p>}
                            {result && (
                                <React.Fragment>
                                    <p className="predict-text">The prediction of your {this.state.filename} file is:</p>
                                    <p className="predict-result" style={{ backgroundColor: backgroundColorResult }}>
                                        {result}
                                    </p>
                                    
                                    <p className="is-predict-true" style={{ backgroundColor: backgroundColorPred }}>
                                        {pred}
                                    </p>
                                    <p className="prob-text">The probability of your file to be {result} is: {this.state.prob}%</p>
                                </React.Fragment>
                            )}
                        </div>
                    </div>

                    <hr className="separator" />

                    <p id="scan-with-another-one">Scan your file using another ML Algorithm:</p>
                    <div className="others-ml">
                        <a href="/ScanWithRF">
                            <button className="another-ml">SCAN WITH RF</button>
                        </a>

                        <a href="/ScanWithKNN">
                            <button className="another-ml">SCAN WITH KNN</button>
                        </a>

                        <a href="/ScanWithXGB">
                            <button className="another-ml">SCAN WITH XGB</button>
                        </a>

                        <a href="/ScanWithLR">
                            <button className="another-ml">SCAN WITH LR</button>
                        </a>

                        <a href="/ScanWithSVM">
                            <button className="another-ml">SCAN WITH SVM</button>
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ScanWithDT;