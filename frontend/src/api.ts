import axios from "axios";

export const optimizeResume = async (resume: string) => {
  const response = await axios.post("http://localhost:5000/optimize", {
    resume
  });
  return response.data;
};
