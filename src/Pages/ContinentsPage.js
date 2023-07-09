import { NavLink, useParams } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
export const ContinentsPage = () => {
  const { data } = useDataContext();
  const { continentsId } = useParams();
  const findContinent = data?.continents?.find(
    (item) => item?.id === Number(continentsId)
  );
  return (
    <div className="flex flex-col items-center my-16 gap-8">
      <p className="text-2xl font-medium text-primary-color">
        Top Countries in {findContinent?.name} for next holiday.
      </p>
      <ul className="flex justify-center items-center gap-8">
        {findContinent?.countries?.map((item) => (
          <NavLink to={`/country/${continentsId}/${item?.id}`}>
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
