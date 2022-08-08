import React, { useEffect } from "react";
import { Layout } from "./Components/Layout";
import { Loading } from "./Components/Loading";
import { Table } from "./Components/Table";
import { useAppSelector } from "./hooks/redux";
import { useActions } from "./hooks/useAction";
import { Error } from "./Components/Error";

function App() {
  const { users, error, loading } = useAppSelector(
    (state) => state.rootReducer.user
  );
  const { fetchUsers } = useActions();
  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (error.length) {
    return <Error error={error} />;
  }

  return (
    <Layout>
      <Table users={users} />
    </Layout>
  );
}

export default App;
