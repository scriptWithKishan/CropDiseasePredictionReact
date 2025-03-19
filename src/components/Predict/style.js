import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 50px;
  color: #000000;
  text-align: center;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
`;

export const HeadingSpan = styled.span`
  font-weight: 750;
`;

export const PredictForm = styled.form`
  align-self: center;
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  border: 0px solid #000000;
  border-radius: 10px;
  background-color: rgb(130, 215, 108);
  margin-right: 50px;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const InputDescription = styled.p`
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin: 0;
  margin-right: 100px;
`;

export const InputLocation = styled.p`
  font-size: 12px;
  color: rgb(5, 160, 52);
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const UploadButton = styled.button`
  background-color: rgb(130, 215, 108);
  border: 0px solid #ccc;
  border-radius: 50px;
  height: 70px;
  width: 70px;
  cursor: pointer;
`;

export const PredictResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`

export const PredictedDisease = styled.div`
  background-image: url('${props => props.background}');
  background-size: cover;
  height: 350px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0px solid #ccc;
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
`

export const DiseaseClass = styled.h1`
  font-size: 40px;
  color: #fff;
`

export const DiseaseName = styled.h1`
  font-size: 30px;
  color: #fff;
`

export const DiseasePreventions = styled.div`
  width: 50%;
  font-family: "Poppins", sans-serif;
`

export const PreventionHeading = styled.h1`
  font-size: 40px;
`

export const PreventionList = styled.ul`

`

export const PreventionItem = styled.li`
  font-size: 25px;
`
