import React, { useContext, useState } from "react";
import { useEffect } from "react";
import ResturantsFinder from "../apis/ResturantsFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RestaurantList(): JSX.Element {
  const [resturants, setResturants] = useState<resturant[]>([]);

  const history = useNavigate();

  interface resturant {
    id: string;
    name: string;
    location: string;
    price_range: string;
  }

  const baseURL = "http://localhost:5000/";

  useEffect(() => {
    fetch(baseURL + "resturants") //fetch does get requests by default
      .then((response) => response.json())
      .then((jsonBody) => {
        /*: toDo[]*/
        const fetchedData = jsonBody; //need to use the property 'data' then 'toDoList'
        setResturants(fetchedData);
        console.log(fetchedData);
      });
  }, [resturants]);

  const handleDelete = (e: any, id: any) => {
    e.stopPropagation();
    try {
      const response = axios.delete(baseURL + "resturants/" + `${id}`);
      setResturants(
        resturants.filter((resturants) => {
          return resturants.id !== id;
        })
      );
    } catch (error) {
      console.log("failed to delete...");
    }
  };

  // const [resturants, setResturants] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await ResturantsFinder.get("/");
  //       console.log(response);
  //       setResturants(response.data)
  //     } catch (err) {
  //       console.log("error");
  //     }
  //   };

  //   fetchData();
  // }, []);
  const handleUpdate = (e: any, id: any) => {
    e.stopPropagation();
    history(`/resturants/${id}/update`);
  };

  const handleResturantSelect = (id: any) => {
    history(`/resturants/${id}`);
  };
  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary"></tr>
          <th scope="col"> Description</th>
          <th scope="col"> Due Date</th>
        </thead>

        <tbody>
          {resturants &&
            resturants.map((resturant) => {
              return (
                <tr
                  onClick={() => handleResturantSelect(resturant.id)}
                  key={resturant.id}
                >
                  <td>{resturant.name}</td>
                  <td>{resturant.location}</td>

                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, resturant.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, resturant.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
