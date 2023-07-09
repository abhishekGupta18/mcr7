import { useDataContext } from "../Context/DataContext";
import { NavLink } from "react-router-dom";
export const Home = () => {
  const { data } = useDataContext();
  return (
    <div className="flex flex-col items-center my-16 gap-8">
      <p className="text-3xl font-medium">Welcome To Trip Advisor</p>
      <p className="text-2xl font-medium text-primary-color">
        Top Continents for next holiday
      </p>
      <ul className="flex justify-center items-center gap-8">
        {data?.continents?.map((item) => (
          <NavLink to={`/continents/${item?.id}`}>
            {" "}
            <li>
              <img
                src={item?.image}
                className="w-[300px] h-[300px] rounded-[1rem]"
              />
              <p className=" mt-[-2rem] ml-8 text-white-color text-xl font-medium">
                {item?.name}
              </p>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
