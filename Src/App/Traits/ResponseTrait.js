const $HelperTrait = require('../Traits/HelperTrait');

class ResponseTrait extends $HelperTrait {
  constructor() {
    super();

    this.status = {
      200: "OK",
      201: "Created",
      202: "Accepted",
      400: "Bad Request",
      401: "Unauthorized",
      403: "Forbidden",
      404: "Not Found",
      422: "Unprocessable Entity",
      429: "Too Many Requests",
      500: "Internal Server Error",
      504: "Gateway Timeout"
    }
  }

  OKE(res, $msg, $datas = []) {
    $msg = super.getVarValue($msg, null, this.status[200]);
    return res.status(200).json(super.ajaxJSONReturn(200, "success", $msg, $datas));
  }

  CREATED(res, $msg, $datas = []) {
    $msg = super.getVarValue($msg, null, this.status[201]);
    return res.status(201).json(super.ajaxJSONReturn(201, "success", $msg, $datas));
  }

  ACCEPTED(res, $msg, $datas = []) {
    $msg = super.getVarValue($msg, null, this.status[202]);
    return res.status(202).json(super.ajaxJSONReturn(202, "success", $msg, $datas));
  }

  BAD_REQUEST(res, $msg, $datas = []) {
    $msg = super.getVarValue($msg, null, this.status[400]);
    return res.status(400).json(super.ajaxJSONReturn(400, "failed", $msg, $datas));
  }

  UNAUTHORIZED(res, $msg, $datas = []) {
    $msg = super.getVarValue($msg, null, this.status[401]);
    return res.status(401).json(super.ajaxJSONReturn(401, "failed", $msg, $datas));
  }

  FORBIDDEN(res, $msg, $datas = []) {
    $msg = super.getVarValue($msg, null, this.status[403]);
    return res.status(403).json(super.ajaxJSONReturn(403, "failed", $msg, $datas));
  }

  NOT_FOUND(res, $msg, $datas = []) {
    $msg = super.getVarValue($msg, null, this.status[404]);
    return res.status(404).json(super.ajaxJSONReturn(404, "failed", $msg, $datas));
  }

  UNPROCESS_ENTITY(res, $msg, $datas = []) {
    $msg = super.getVarValue($msg, null, this.status[422]);
    return res.status(422).json(super.ajaxJSONReturn(422, "failed", $msg, $datas));
  }

  TO_MANY_REQ(res, $msg, $datas = []) {
    $msg = super.getVarValue($msg, null, this.status[429]);
    return res.status(429).json(super.ajaxJSONReturn(429, "failed", $msg, $datas));
  }

  SERVER_ERROR(res, $msg, $datas = []) {
    $msg = super.getVarValue($msg, null, this.status[500]);
    return res.status(500).json(super.ajaxJSONReturn(500, "failure", $msg, $datas));
  }

  SERVER_TIMEOUT(res, $msg, $datas = []) {
    $msg = super.getVarValue($msg, null, this.status[504]);
    return res.status(504).json(super.ajaxJSONReturn(504, "failure", $msg, $datas));
  }
}

module.exports = ResponseTrait;