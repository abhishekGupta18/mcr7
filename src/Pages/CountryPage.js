import { NavLink, useParams } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";

export const CountryPage = () => {
  const { data } = useDataContext();
  const { countryId } = useParams();
  const { continentsId } = useParams();
  const findContinent = data?.continents?.find(
    (item) => item?.id === Number(continentsId)
  );

  const findCountry = findContinent?.countries?.find(
    (item) => item?.id === Number(countryId)
  );
  return (
    <div className="flex flex-col items-center my-16 gap-8">
      <p className="text-2xl font-medium text-primary-color">
        Top Locations in {findCountry?.name} for next holiday.
      </p>
      <ul className="flex justify-center items-center gap-8">
        {findCountry?.destinations?.map((item) => (
          <NavLink to={`/destination/${continentsId}/${countryId}/${item?.id}`}>
            <li>
              <img
                src={item?.image}
                className="w-[300px] h-[300px] rounded-[1rem]"
              />
              <p className=" mt-[-2rem] ml-8 text-white-color text-xl font-medium">
                📍{item?.name}
              </p>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
