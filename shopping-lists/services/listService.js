import { executeQuery } from "../database/database.js";

const create = async (name) => {
  await executeQuery("INSERT INTO shopping_lists (name) VALUES ($name);", {
    name: name,
  });
};

const findAllLists = async () => {
  let result = await executeQuery(
    "SELECT * FROM shopping_lists WHERE active ORDER BY name;",
  );
  return result.rows;
};

const findById = async (id) => {
  let result = await executeQuery(
    "SELECT * FROM shopping_lists WHERE id = $id;",
    {
      id: id,
    },
  );

  if (result.rows && result.rows.length > 0) {
    return result.rows[0];
  }

  return { id: 0, name: "Unknown" };
};

const deactivateList = async (id) => {
  await executeQuery(
    "UPDATE shopping_lists SET active = false WHERE id = $id;",
    {
      id: id,
    },
  );
};

const countLists = async () => {
  const rows = await executeQuery(
    "SELECT COUNT(*) AS count FROM shopping_lists;",
  );
  return rows.rows[0].count;
};

export { countLists, create, deactivateList, findAllLists, findById };
