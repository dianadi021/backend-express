const $HelperTrait = require('../Traits/HelperTrait');

class ResponseTrait extends $HelperTrait {
  constructor() {
    super();

    this.failed = "Gagal memproses data!";
    this.success = "Berhasil memproses data!";
  }

  OKE($res, $datas = null, $msg = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.success);
    return (super.isValidVal($datas) ? $res.status(200).json({ status: 200, message: $msg, datas: $datas }) : $res.status(200).json({ status: 200, message: $msg }));
  }

  CREATED($res, $datas = null, $msg = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.success);
    return (super.isValidVal($datas) ? $res.status(201).json({ status: 201, message: $msg, datas: $datas }) : $res.status(201).json({ status: 201, message: $msg }));
  }

  ACCEPTED($res, $datas = null, $msg = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.success);
    return (super.isValidVal($datas) ? $res.status(202).json({ status: 202, message: $msg, datas: $datas }) : $res.status(202).json({ status: 202, message: $msg }));
  }

  BAD_REQUEST($res, $datas = null, $msg = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return (super.isValidVal($datas) ? $res.status(400).json({ status: 400, message: $msg, datas: $datas }) : $res.status(400).json({ status: 400, message: $msg }));
  }

  UNAUTHORIZED($res, $datas = null, $msg = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return (super.isValidVal($datas) ? $res.status(401).json({ status: 401, message: $msg, datas: $datas }) : $res.status(401).json({ status: 401, message: $msg }));
  }

  FORBIDDEN($res, $datas = null, $msg = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return (super.isValidVal($datas) ? $res.status(403).json({ status: 403, message: $msg, datas: $datas }) : $res.status(403).json({ status: 403, message: $msg }));
  }

  NOT_FOUND($res, $datas = null, $msg = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return (super.isValidVal($datas) ? $res.status(404).json({ status: 404, message: $msg, datas: $datas }) : $res.status(404).json({ status: 404, message: $msg }));
  }

  UNPROCESS_ENTITY($res, $datas = null, $msg = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return (super.isValidVal($datas) ? $res.status(422).json({ status: 422, message: $msg, datas: $datas }) : $res.status(422).json({ status: 422, message: $msg }));
  }

  TO_MANY_REQ($res, $datas = null, $msg = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return (super.isValidVal($datas) ? $res.status(429).json({ status: 429, message: $msg, datas: $datas }) : $res.status(429).json({ status: 429, message: $msg }));
  }

  SERVER_ERROR($res, $datas = null, $msg = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return (super.isValidVal($datas) ? $res.status(500).json({ status: 500, message: $msg, datas: $datas }) : $res.status(500).json({ status: 500, message: $msg }));
  }

  SERVER_TIMEOUT($res, $datas = null, $msg = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return (super.isValidVal($datas) ? $res.status(504).json({ status: 504, message: $msg, datas: $datas }) : $res.status(504).json({ status: 504, message: $msg }));
  }
}

module.exports = ResponseTrait;