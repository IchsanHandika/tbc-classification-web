import React, { useState } from "react";

import NavbarClassification from '../components/NavbarClassification'
import axios from 'axios'

import NormalTest from '../assets/img/dataset/normal-test1.jpeg'
import TbcTest1 from '../assets/img/dataset/tbc-test1.jpg'
import TbcTest2 from '../assets/img/dataset/tbc-test2.jpeg'

import { Box, LinearProgress } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function ClassificationPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedModel, setSelectedModel] = useState(null);
    const [prediction, setPrediction] = useState("");
    const [confidence, setConfidence] = useState("");
    const [error, setError] = useState("");
    const [preview, setPreview] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setSelectedImage("");
        setError("");
        setPrediction("");
        setConfidence("");
    
        if (file) {
          const reader = new FileReader();
          reader.onload = () => setPreview(reader.result);
          reader.readAsDataURL(file);
        }
      };

      const handleImageSelection = (image) => {
        setSelectedImage(image);
        setSelectedFile(null);
        setPreview(image);
        setError("");
        setPrediction("");
        setConfidence("");
      }

      const handleModelSelection = (model) => {
        setSelectedModel(model);
        setError("");
        setPrediction("");
        setConfidence("");
      }

      const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedFile && !selectedImage) {
          setError("Please select an image.");
          return;
        }

        if (!selectedModel) {
          setError("Please select a model.")
          return;
        }

        setIsLoading(true);
    
        const formData = new FormData();

        if(selectedFile){
          formData.append("file", selectedFile);
        }
        else if(selectedImage){
          const img = await fetch(selectedImage);
          const blob = await img.blob();
          const file = new File([blob], "selected_img.jpg", {type: blob.type});
          formData.append("file", file);
        }

        formData.append("selectedModel", selectedModel);
    
        try {
          const response = await axios.post("https://ichsanhandika-tbc-classification-api.hf.space/predict", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          setPrediction(response.data.class);
          setConfidence(response.data.confidence);
          setError("");
        } catch (err) {
          setError("Prediction failed. Please try again.");
        } finally {
          setIsLoading(false);
        }
      };

    return (
      <>
        <NavbarClassification />
        
        <main className="main">

          <section id='classification' className="section">

              {/* <!-- Section Title --> */}
              <div className="container section-title" data-aos="fade-up">
                  <h2>Classification</h2>
              </div>
              {/* <!-- End Section Title --> */}

              <div className="container">
                  <div className="row gy-5">
                    <div className="content col-xl-5 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
                        <h3>Description</h3>
                        <p>
                        The dataset used comes from kaggle uploaded by Chirantan Acharyya. The dataset is divided into three classes, namely normal, tuberculosis, and covid-19 which are all taken through x-rays. The number of images in the dataset is 7135. However, in this project, only images with normal and tuberculosis classes are used. This dataset is processed using several machine learning algorithms for classification.
                        </p>
                        <a href="https://www.kaggle.com/datasets/chirantanacharyya/normal-tuberculosis-covid" className="about-btn align-self-center align-self-xl-start"><span>About dataset</span> <i className="bi bi-chevron-right"></i></a>
                    </div>
                    <div className="col-xl-7" data-aos="fade-up" data-aos-delay="200">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Demo</h5>
                                <p className="card-text">Choose image:</p>

                                <form id="uploadForm" encType="multipart/form-data" onSubmit={handleSubmit}>
                                  <div className="row justify-content-center">
                                    {[NormalTest, TbcTest1, TbcTest2].map((image, index) => (
                                      <div className="col-md-4 form-check" key={index}>
                                        <div className="d-flex flex-column align-items-center">
                                          <img src= {image} className="img-fluid" alt="" />
                                          <input 
                                            className="form-check-input"
                                            type="radio"
                                            name="image"
                                            value={image}
                                            checked = {selectedImage == image}
                                            onChange={() => handleImageSelection(image)}
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>

                                  <p className="card-text text-center mt-3">OR</p>

                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">Upload image:</label>
                                        <input className="form-control" type="file" id="image" name="file" onChange={handleFileChange}/>
                                    </div>

                                    <p className="card-text">Choose model:</p>

                                    <div className="row ms-2">
                                      {["Xception", "MobileNet", "DenseNet121", "VGG16", "ResNet18", "InceptionV3"].map((model, index) => (
                                        <div className="col-6 form-check" key={index}>
                                          <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="model" 
                                            value={model}
                                            checked = {selectedModel == model}
                                            onChange={() => handleModelSelection(model)}
                                          />
                                          <label className="form-check-label" htmlFor={model}>
                                            {model}
                                          </label>
                                        </div>
                                      ))}
                                    </div>
                                    <hr/>
                                    <button type="submit" className="btn btn-primary">Predict</button>
                                </form>

                                {/* Display loading for waiting a response from API */}
                                {isLoading && (
                                  <Box sx={{ width: '100%' }} className="mt-3">
                                    <LinearProgress />
                                  </Box>
                                )}

                                {/* Display error message if any */}
                                {error && (
                                <div id="errorMessage" className="alert alert-danger mt-3">
                                    {error}
                                </div>
                                )}

                                {/* Display prediction result if available */}
                                {prediction && (
                                <div className="mt-3 d-flex flex-column">
                                  <h3 className="text-center">Prediction:</h3>
                                  <div className="card border-info">
                                    <div className="row g-0">
                                      <div className="col-md-4">
                                        {preview && (
                                          <img 
                                            id="uploadedImage"
                                            src={preview} 
                                            className="img-fluid rounded-start" 
                                            alt="Uploaded"/>
                                        )} 
                                      </div>
                                      <div className="col-md-8">
                                        <div className="card-body">

                                          {/* Model selected is All */}
                                          {/* {selectedModel == "All" ? (
                                            resultAll.map((result) => (
                                              <div key={result.id}>
                                                <div className="row justify-content-center">
                                                  <div className="col text-info">
                                                    <p>{result.model}</p>
                                                  </div>
                                                  <div className="col text-end">
                                                    {result.confidence}
                                                  </div>
                                                </div>
                                                <div className="progress" role="progressbar" aria-label="Info example" aria-valuemin="0" aria-valuemax="100">
                                                  <div className="progress-bar bg-info" style={{width: result.confidence + "%"}}></div>
                                                </div>
                                              </div>
                                            ))
                                          ) : (
                                            <div>
                                              <h3 className="text-center"><strong>{prediction}</strong></h3>
                                              <hr/> */}

                                              {/* Normal bar */}
                                              {/* <div className="row justify-content-center">
                                                <div className="col text-info">
                                                  <p>Normal</p>
                                                </div>
                                                <div className="col text-end text-info">
                                                  {prediction == "Normal" ? <p>{confidence}%</p> : <p>{(100 - confidence).toFixed(2)}%</p>}
                                                </div>
                                              </div>
                                              <div className="progress" role="progressbar" aria-label="Info example" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-info" style={{width: prediction == "Normal" ? 
                                                  confidence + "%" : (100 - confidence).toFixed(2) + "%"}}>
                                                </div>
                                              </div> */}

                                              {/* Tuberculosis bar */}
                                              {/* <div className="row justify-content-center mt-3">
                                                <div className="col text-danger">
                                                  <p>Tuberculosis</p>
                                                </div>
                                                <div className="col text-end text-danger">
                                                {prediction == "Normal" ? <p>{(100 - confidence).toFixed(2)}%</p> : <p>{confidence}%</p>}
                                                </div>
                                              </div>
                                              <div className="progress" role="progressbar" aria-label="danger example" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-danger" style={{width: prediction == "Normal" ? 
                                                  (100 - confidence).toFixed(2) + "%" : confidence + "%"}}>
                                                </div>
                                              </div>
                                            </div>
                                          )} */}
                                          
                                          <h3 className="text-center"><strong>{prediction}</strong></h3>
                                          <hr/>
                                          
                                          {/* Normal bar */}
                                          <div className="row justif-content-center">
                                            <div className="col text-info">
                                              <p>Normal</p>
                                            </div>
                                            <div className="col text-end text-info">
                                              {prediction == "Normal" ? <p>{confidence}%</p> : <p>{(100 - confidence).toFixed(2)}%</p>}
                                            </div>
                                          </div>
                                          <div className="progress" role="progressbar" aria-label="Info example" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-info" style={{width: prediction == "Normal" ? 
                                              confidence + "%" : (100 - confidence).toFixed(2) + "%"}}>
                                            </div>
                                          </div>
                                          
                                          {/* Tuberculosis bar */}
                                          <div className="row justif-content-center mt-3">
                                            <div className="col text-danger">
                                              <p>Tuberculosis</p>
                                            </div>
                                            <div className="col text-end text-danger">
                                            {prediction == "Normal" ? <p>{(100 - confidence).toFixed(2)}%</p> : <p>{confidence}%</p>}
                                            </div>
                                          </div>
                                          <div className="progress" role="progressbar" aria-label="danger example" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-danger" style={{width: prediction == "Normal" ? 
                                              (100 - confidence).toFixed(2) + "%" : confidence + "%"}}>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="alert alert-warning mt-3 d-flex align-items-center" role="alert">
                                    <FontAwesomeIcon icon={faTriangleExclamation} className="flex-shrink-0 me-2"/>
                                    <div>
                                      This prediction result is only used as an early detection of tuberculosis. Please consult an expert for a definitive diagnosis.
                                    </div>
                                  </div>
                                </div>
                                )} 
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </section>
        </main>
      </>
    )
  }
  
  export default ClassificationPage