import React from 'react';
import '../Styles/UNSW.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Bar } from 'react-chartjs-2';

const UNSW = () => {
  
  const data_acc = {
    
    datasets: [
          {
             label: 'Accuracy ',

            data: [95.04, 96.13, 95.43, 95.98, 93.78, 93.29],
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
            data: [95.04, 96.12, 95.42, 95.96, 94.20, 93.64],
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
            data: [95.04, 96.13,95.43, 95.98, 93.78, 93.29],
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
            data: [95.04, 96.11,95.42, 95.96, 93.59, 93.09],
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
            data: [7.63 , 7.37 , 7.62 , 7.63,  18.83, 19.29],
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
                            <li><a href='/NSLKDD'>NSL-KDD</a></li>
                            <li><a href='/UNSWNB15' class="current-dash">UNSW-NB15</a></li>
                            <li><a href='/Archive'>ARCHIVE</a></li>
                        </ul>

                        <a href='/ScanWithDT'>
                            <button id="button-to-start-scan">SCAN YOUR FILES</button>
                        </a>

                    </div>

                    <div class="col dashboard-page-second-col">

                        <h1 id="dataset-name">UNSW-NB15</h1>


                        <h3 class="dataset-subtitle">Dataset Description</h3>

                        <p class="dataset-desc">The UNSW-NB15 dataset is a network intrusion dataset that consists of raw network packets. The goal of creating this dataset was to produce a combination of real modern normal activities and synthetic contemporary attack behaviors.
                        <br />
                        The security of networks and devices is crucial for healthcare organizations and IoMT systems. The UNSW-NB15 dataset allows security professionals and researchers to evaluate the performance of intrusion detection systems in identifying and addressing network attacks.</p>
                        

                        <h3 class="dataset-subtitle">Dataset Processing</h3>

                        <h5 class="dataset-subsubtitle">Data transformation and normalization:</h5>

                        <h6 class="dataset-subsubsubtitle">1. Encoding:</h6>
                        <p class="section-desc">For this dataset, we used the label encoding method to encode the categorical features.</p>

                        <h6 class="dataset-subsubsubtitle">2. Scaling:</h6>
                        <p class="section-desc">To normalize the data, we used the MinMaxScaler.</p>

                        <h6 class="dataset-subsubsubtitle">3. Logarithmic scale:</h6>
                        <p class="section-desc">Because of the large values of some features we used the logarithmic scale to minimize the scale and it improves the accuracy.</p>

                        <h5 class="dataset-subsubtitle">Features selection:</h5>
                        <p class="section-desc">For this dataset, we applied our feature selection method, which consists of backward elimination. The algorithm selected 25 features, with better accuracy.</p>

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
                        <p class="section-desc">All the models give an accuracy over 93% but we recommend that you use <a href='/ScanWithRF'>Random Forest</a> if you are going to scan an instance of this dataset.</p>



                    

                    </div>

                </div>

            </div>
            <Footer/>
            
        </div>
    )

}
export default UNSW;