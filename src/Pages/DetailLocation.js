import { NavLink, useParams } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";

export const DetailLocation = () => {
  const { data } = useDataContext();
  const { countryId } = useParams();
  const { continentsId } = useParams();
  const { locationId } = useParams();
  const findContinent = data?.continents?.find(
    (item) => item?.id === Number(continentsId)
  );

  const findCountry = findContinent?.countries?.find(
    (item) => item?.id === Number(countryId)
  );

  const findDestiny = findCountry?.destinations?.find(
    (item) => item?.id === Number(locationId)
  );
  return (
    <div className="flex flex-col items-center gap-16 mt-8">
      <p className="text-2xl font-medium text-primary-color">
        {findDestiny?.name}
      </p>
      <div className="flex justify-center gap-16 mx-auto ">
        <img
          src={findDestiny?.image}
          alt=""
          className="w-[400px] h-[400px] rounded-[1rem]"
        />

        <div className="w-[400px] flex flex-col items-start gap-4">
          <p>
            {" "}
            <strong>Description:</strong> {findDestiny?.description}
          </p>
          <p>
            <strong>Ratings:</strong> {findDestiny?.ratings}
          </p>
          <p>
            <strong>Reviews:</strong> {findDestiny?.reviews}
          </p>
          <p>
            <strong>Location:</strong> {findDestiny?.location}
          </p>
          <p>
            <strong>Opening Hours:</strong> {findDestiny?.openingHours}
          </p>
          <p>
            <strong>Ticket price:</strong> {findDestiny?.ticketPrice}
          </p>
          <NavLink>
            <strong>Website:</strong> {findDestiny?.website}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
