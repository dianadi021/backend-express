const $HelperTrait = require('../Traits/HelperTrait');

class ResponseTrait extends $HelperTrait {
  constructor() {
    super();

    this.failed = "Gagal memproses data!";
    this.success = "Berhasil memproses data!";
  }

  OKE($msg = null, $datas = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.success);
    return super.ajaxJSONReturn(200, 'success', $msg, $datas);
  }

  CREATED($msg = null, $datas = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.success);
    return super.ajaxJSONReturn(201, 'success', $msg, $datas);
  }

  ACCEPTED($msg = null, $datas = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.success);
    return super.ajaxJSONReturn(202, 'success', $msg, $datas);
  }

  BAD_REQUEST($msg = null, $datas = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return super.ajaxJSONReturn(400, 'failure', $msg, $datas);
  }

  UNAUTHORIZED($msg = null, $datas = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return super.ajaxJSONReturn(401, 'failure', $msg, $datas);
  }

  FORBIDDEN($msg = null, $datas = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return super.ajaxJSONReturn(403, 'failure', $msg, $datas);
  }

  NOT_FOUND($msg = null, $datas = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return super.ajaxJSONReturn(404, 'failure', $msg, $datas);
  }

  UNPROCESS_ENTITY($msg = null, $datas = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return super.ajaxJSONReturn(422, 'failure', $msg, $datas);
  }

  TO_MANY_REQ($msg = null, $datas = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return super.ajaxJSONReturn(429, 'failure', $msg, $datas);
  }

  SERVER_ERROR($msg = null, $datas = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return super.ajaxJSONReturn(500, 'failure', $msg, $datas);
  }

  SERVER_TIMEOUT($msg = null, $datas = null) {
    $msg = (super.isValidVal($msg) ? $msg : this.failed);
    return super.ajaxJSONReturn(504, 'failure', $msg, $datas);
  }
}

module.exports = ResponseTrait;