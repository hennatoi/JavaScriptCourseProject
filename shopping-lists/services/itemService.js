import { executeQuery } from "../database/database.js";

const createItem = async (shopping_list_id, name) => {
  await executeQuery(
    "INSERT INTO shopping_list_items (shopping_list_id, name) VALUES ($listId, $name);",
    {
      listId: shopping_list_id,
      name: name,
    },
  );
};

const findItem = async (shopping_list_id) => {
  let result = await executeQuery(
    "SELECT * FROM shopping_list_items WHERE shopping_list_id = $listId AND NOT collected ORDER BY name;",
    {
      listId: shopping_list_id,
    },
  );
  return result.rows;
};

const findItems = async () => {
  let result = await executeQuery(
    "SELECT * FROM shopping_list_items;",
  );
  return result.rows;
};

const collectItem = async (id) => {
  let result = await executeQuery(
    "UPDATE shopping_list_items SET collected = true WHERE id = $id;",
    {
      id: id,
    },
  );
  // return result.rows;  <-- DO I NEED THIS???
};

const findCollected = async (shopping_list_id) => {
  let result = await executeQuery(
    "SELECT * FROM shopping_list_items WHERE shopping_list_id = $listId AND collected = true ORDER BY name;",
    {
      listId: shopping_list_id,
    },
  );
  return result.rows;
};

const findNotCollected = async (shopping_list_id) => {
  let result = await executeQuery(
    "SELECT * FROM shopping_list_items WHERE shopping_list_id = $listId AND collected = false ORDER BY name;",
    {
      listId: shopping_list_id,
    },
  );
  return result.rows;
};

const countItems = async () => {
  let rows = await executeQuery(
    "SELECT COUNT(*) AS count FROM shopping_list_items;",
  );
  // const rows = await sql`SELECT COUNT(*) AS count FROM addresses`;
  return rows.rows[0].count;
};

export {
  collectItem,
  countItems,
  createItem,
  findCollected,
  findItem,
  findItems,
  findNotCollected,
};
