import { useParams } from "react-router-dom";

export const ProjectDetail = () => {


  const params = useParams();
  console.log(params.id);

  return (
    <div>
        Product Detail
    </div>
  )
}
