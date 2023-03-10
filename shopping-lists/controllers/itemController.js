import * as itemService from "../services/itemService.js";
import * as requestUtils from "../utils/requestUtils.js";

const addItem = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");

  const formData = await request.formData();
  const name = formData.get("name");

  await itemService.createItem(`${urlParts[2]}`, name);

  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

const collectItem = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");

  console.log(urlParts[2]);
  console.log(urlParts[3]);
  console.log(urlParts[4]);
  console.log(urlParts[5]);

  await itemService.collectItem(`${urlParts[4]}`);

  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

export { addItem, collectItem };
