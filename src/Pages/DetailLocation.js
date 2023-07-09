import { useParams } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";

export const DetailLocation = () => {
  const { data } = useDataContext();
  const { countryId } = useParams();
  const { continentsId } = useParams();

  return <div>detail page</div>;
};
