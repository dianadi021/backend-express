const $ResponseTrait = require('../../Traits/ResponseTrait.js');

class RouterInterfaces extends $ResponseTrait {
  constructor($Service) {
    super();

    const { Router } = require("express");
    this.$_Router = new Router();

    this.$_Service = $Service;
  }

  SetRouter() {
    try {
      const $Router = this.$_Router;
      const $Service = this.$_Service;

      const $IDS = ":id";
      const section_control = `control`;
      const create_data = `${section_control}/create`;
      const update_data = `${section_control}/update/${$IDS}`;
      const update_filter = `/${section_control}/filter/update`;
      const delete_data = `${section_control}/delete/${$IDS}`;
      const delete_filter = `${section_control}/filter/delete`;

      $Router.post(create_data, async (req, res) => {
        return await $Service.CreateData(req, res).then((result) => super.CREATED(res, null, result)).catch((err) => super.SERVER_ERROR(res, err));
      });

      $Router.get("/", async (req, res) => {
        return await $Service.GetData(req, res).then((result) => super.OKE(res, null, result)).catch((err) => super.SERVER_ERROR(res, err));
      });

      $Router.get("/filter", async (req, res) => {
        return await $Service.GetDataByFilter(req, res).then((result) => super.OKE(res, null, result)).catch((err) => super.SERVER_ERROR(res, err));
      });

      $Router.put(update_data, async (req, res) => {
        return await $Service.UpdateDataByID(req, res).then((result) => super.OKE(res, null, result)).catch((err) => super.SERVER_ERROR(res, err));
      });

      $Router.put(update_filter, async (req, res) => {
        return await $Service.UpdateDataByFilter(req, res).then((result) => super.OKE(res, null, result)).catch((err) => super.SERVER_ERROR(res, err));
      });

      $Router.delete(delete_data, async (req, res) => {
        return await $Service.DeleteDataByID(req, res).then((result) => super.OKE(res, null, result)).catch((err) => super.SERVER_ERROR(res, err));
      });

      $Router.delete(delete_filter, async (req, res) => {
        return await $Service.DeleteDataByFilter(req, res).then((result) => super.OKE(res, null, result)).catch((err) => super.SERVER_ERROR(res, err));
      });

      return $Router;
    } catch ($err) {
      console.error(`Router Interface error! Catch:`, $err);
      return $err;
    }
  }
}

module.exports = RouterInterfaces;