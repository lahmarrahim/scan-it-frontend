import React from 'react';
import '../Styles/NSLKDD.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Bar } from 'react-chartjs-2';

const NSLKDD = () => {
  const data_acc = {
    datasets: [
      {
         label: 'Accuracy ',
        data: [85.37, 79.44, 77.32, 80.24, 85.48, 84.00],
        backgroundColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  const data_prec = {
    datasets: [
      {
         label: 'Precision',
        
        data: [87.89, 84.66, 83.21, 84.63, 86.00, 84.90],
        backgroundColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
 
  const data_rec = {
    datasets: [
      {
         label: 'recall',
        data: [85.37, 79.44,77.32, 80.23, 85.48, 84.00],
        backgroundColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  const data_f1 = {
    datasets: [
      {
         label: 'f1-score',
        data: [85.40, 79.27,77.05, 80.14, 85.54, 84.08],
        backgroundColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  const data_FA = {
    datasets: [
      {
         label: 'False Alarm',
        data: [3.14 , 2.68 , 3.38 , 3.68,  11.27, 10.04],
        backgroundColor: [
            'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)',
                'rgba(255, 99, 132, 1)'
        ],
        borderColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
        legend: {
          display: false,
         
        },
      },
    scales: {
      x: {
        type: 'category',
        labels: ['DT', 'RF', 'KNN' ,'XGB', 'SVM','LR'],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return(
    <div>
        <Navbar />
        <div class="container dashboard-container">
            <div class="row">
                <div class="col-4 dashboard-page-first-col">
                    <div class="dashboard-title">
                        <h1 id="dashboard-title">Dashboard</h1>
                        <i class="fas fa-home" id="dashboard-icon"></i>
                    </div>

                    <ul class="dashboard-links">
                        <li><a href='/Dashboard'>HISTORY</a></li>
                        <li><a href='/NSLKDD' class="current-dash">NSL-KDD</a></li>
                        <li><a href='/UNSWNB15'>UNSW-NB15</a></li>
                        <li><a href='/Archive'>ARCHIVE</a></li>
                    </ul>

                    <a href='/ScanWithDT'>
                        <button id="button-to-start-scan">SCAN YOUR FILES</button>
                    </a>

                </div>

                <div class="col dashboard-page-second-col">

                    <h1 id="dataset-name">NSL-KDD</h1>


                    <h3 class="dataset-subtitle">Dataset Description</h3>

                    <p class="dataset-desc">The NSL-KDD dataset is a benchmark dataset for network intrusion detection systems. It is an improved version of the original KDD Cup 1999 dataset, designed to address limitations and challenges in the field of intrusion detection research.
                    <br />
                    The NSL-KDD dataset can be utilized in intrusion detection systems (IDS) for the Internet of Medical Things (IoMT) due to several reasons.it serves as a standardized benchmark that enables the evaluation and comparison of different IDS techniques within the IoMT context.</p>
                    

                    <h3 class="dataset-subtitle">Dataset Processing</h3>

                    <h5 class="dataset-subsubtitle">Data transformation and normalization:</h5>

                    <h6 class="dataset-subsubsubtitle">1. Encoding:</h6>
                    <p class="section-desc">For this dataset, we used the 1-N encoding method to encode the categorical features.</p>

                    <h6 class="dataset-subsubsubtitle">2. Scaling:</h6>
                    <p class="section-desc">To normalize the data, we used the MinMaxScaler.</p>

                    <h5 class="dataset-subsubtitle">Features selection:</h5>
                    <p class="section-desc">For this dataset, we hybridize the filter method using correlation and the wrapper method using our method which consists of backward elimination, The algorithm selected 20 features, with better accuracy.</p>

                    <h5 class="dataset-subsubtitle">K-cross Validation:</h5>
                    <p class="section-desc">In the last step, we applied k-cross validation with 10 folds to select the best hyper-parameters.</p>


                    <h3 class="dataset-subtitle">Dataset Results</h3>
                    <p class="section-desc">The different results were tested for 7 machine learning algorithms, one of them was eliminated during the study. The 6 machine learning algorithms taken are: Decision Tree, Random Forest, K-Nearest Neighbors, XGBoost, Logistic Regression and Support Vector Machine.</p>



                    <h5 class="dataset-subsubtitle">Accuracy:</h5>
                    <div class="chart">
                      <Bar data={data_acc} options={options} />
                    </div>

                    <h5 class="dataset-subsubtitle">Precision:</h5>
                    <div class="chart">
                      <Bar data={data_prec} options={options} />
                    </div>

                    <h5 class="dataset-subsubtitle">Recall:</h5>
                    <div class="chart">
                      <Bar data={data_rec} options={options} />
                    </div>

                    <h5 class="dataset-subsubtitle">F1-score:</h5>
                    <div class="chart">
                      <Bar data={data_f1} options={options} />
                    </div>

                    <h5 class="dataset-subsubtitle">False alarm:</h5>
                    <div class="chart">
                      <Bar data={data_FA} options={options} />
                    </div>


                    <h3 class="dataset-subtitle">Advice</h3>
                    <p class="section-desc">All the models give an accuracy over 77%, and four of these 6 models have an accuracy over 80%,
                    but we recommend that you use <a href='/ScanWithSVM'>Support Vector Machine</a> if you are going to scan an instance of this dataset.</p>



                

                </div>

            </div>

        </div>
        <Footer/>
        
    </div>
)

};

export default NSLKDD;