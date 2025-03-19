import { useSelector, useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

import { loadingStart, setFile } from "../../redux/PredictSlice";

import Header from "../Header";
import { PredictMiddleware } from "../../middleware/PredictMiddleware";
import diseaseData from "./diseases";

import {
  Container,
  Heading,
  HeadingSpan,
  ImageContainer,
  ImageInput,
  InputDescription,
  PredictForm,
  InputLocation,
  UploadButton,
  PredictResult,
  PredictedDisease,
  DiseaseClass,
  DiseaseName,
  DiseasePreventions,
  PreventionHeading,
  PreventionList,
  PreventionItem,
} from "./style";

import { FaCamera } from "react-icons/fa";
import { TbAnalyze } from "react-icons/tb";
import { MdFileUpload } from "react-icons/md";

const Predict = () => {
  const dispatch = useDispatch();

  const { error, loading, result, file } = useSelector(
    (store) => store.predictState
  );

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    dispatch(setFile(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    dispatch(loadingStart());

    const formData = new FormData();
    formData.append("image", file);

    dispatch(PredictMiddleware(formData));
  };

  return (
    <>
      <Header />
      <Container>
        <Heading>
          <HeadingSpan>Identify Crop</HeadingSpan>
          <br />
          Diseases
        </Heading>
        <PredictForm onSubmit={handleSubmit}>
          <ImageContainer {...getRootProps()}>
            <ImageInput {...getInputProps()} />
            <div>
              <InputDescription>Input Image</InputDescription>
              <InputLocation>From Local Storage</InputLocation>
            </div>
            <FaCamera size={30} style={{ color: "#ffffff" }} />
          </ImageContainer>
          <UploadButton type="submit" disabled={!file || loading}>
            {loading ? (
              <TbAnalyze size={30} style={{ color: "#ffffff" }} />
            ) : (
              <MdFileUpload size={30} style={{ color: "#ffffff" }} />
            )}
          </UploadButton>
        </PredictForm>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {result && (
          diseaseData.map(disease => {
              if (disease.original === result.class) {
                return (
                  <PredictResult >
                    <PredictedDisease background={disease.url}>
                      <DiseaseClass>{disease.category}</DiseaseClass>
                      <DiseaseName>{disease.name}</DiseaseName>
                    </PredictedDisease>
                    <DiseasePreventions>
                      {disease.preventions && (
                        <>
                          <PreventionHeading>Preventive Measure</PreventionHeading>
                          <PreventionList>
                            {disease.preventions.map((eachEle) => (
                              <PreventionItem key={eachEle}>{eachEle}</PreventionItem>
                            ))}
                          </PreventionList>
                        </>
                      )}
                      {disease.text && (
                        <>
                          <PreventionHeading>{disease.text}</PreventionHeading>
                        </>
                      )}
                    </DiseasePreventions>
                  </PredictResult>
                )
              }
          })
        )}
      </Container>
    </>
  );
};
export default Predict;
