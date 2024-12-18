import { Button } from "@/components/ui/button";
import {
  increment,
  decrement,
  setValue,
} from "@/features/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { useGetUsersQuery } from "@/services/users/usersApiSlice";
import { User } from "@/interfaces/interfaces";

const Home = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { data: users, error, isLoading, isSuccess } = useGetUsersQuery();

  return (
    <>
      <h1 className="text-5xl text-center font-bold my-10">
        Home
      </h1>
      <div className="flex gap-4 justify-center items-center">
        <h1>Counter: {count}</h1>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button variant={"destructive"} onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button variant={"secondary"} onClick={() => dispatch(setValue(10))}>
          Set to 10
        </Button>
      </div>
      <div>
        <h1 className="text-3xl text-center font-bold my-6">Users List</h1>

        {isLoading && <p>Loading...</p>}
        {isSuccess && (
          <div className="flex flex-wrap gap-4 justify-center">
            {users?.map((user: User) => (
              <div key={user.id} className="border p-4 rounded shadow-md w-[300px]">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>Username: {user.username}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <h3>Address:</h3>
                <p>
                  {user.address.street}, {user.address.suite}
                </p>
                <p>
                  {user.address.city}, {user.address.zipcode}
                </p>
                <p>
                  Geo: {user.address.geo.lat}, {user.address.geo.lng}
                </p>
                <h3>Company:</h3>
                <p>{user.company.name}</p>
                <p>Catch Phrase: {user.company.catchPhrase}</p>
                <p>BS: {user.company.bs}</p>
              </div>
            ))}
          </div>
        )}
        {error && (
          <p>
            Error:
            {(error as { message: string })?.message || "Failed to load users"}
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
