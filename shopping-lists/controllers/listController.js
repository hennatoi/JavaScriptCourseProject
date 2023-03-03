import { renderFile } from "../deps.js";
import * as listService from "../services/listService.js";
import * as itemService from "../services/itemService.js";
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addList = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");

  await listService.create(name);

  return requestUtils.redirectTo("/lists");
};

const deactivateList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");

  await listService.deactivateList(urlParts[2]);

  return requestUtils.redirectTo("/lists");
};

const viewLists = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");

  const data = {
    lists: await listService.findAllLists(),
    deactivate: await listService.deactivateList(urlParts[2]),
  };

  return new Response(await renderFile("lists.eta", data), responseDetails);
};

const viewList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");

  const data = {
    list: await listService.findById(urlParts[2]),
    items: await itemService.findItem(urlParts[2]),
    // collect: await itemService.collectItem(urlParts[2]),
    collected: await itemService.findCollected(urlParts[2]),
    notCollected: await itemService.findNotCollected(urlParts[2]),
  };

  return new Response(await renderFile("list.eta", data), responseDetails);
};

const viewHome = async (request) => {
  const data = {
    listcount: await listService.countLists(),
    itemcount: await itemService.countItems(),
  };
  return new Response(await renderFile("home.eta", data), responseDetails);
};

export { addList, deactivateList, viewHome, viewList, viewLists };
