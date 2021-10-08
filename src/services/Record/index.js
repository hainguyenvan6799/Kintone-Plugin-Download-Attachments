function getAppRecords(fieldCode, isGuestSpace, listIds = null) {
  var appId = kintone.app.getId();
  var url = kintone.api.url("/k/v1/records", isGuestSpace);

  var body = {
    app: appId,
    field: fieldCode,
  };

  if (listIds) {
    var listIdsInString = listIds.toString();
    body.query = `$id in (${listIdsInString})`;
    console.log("listids: ", body.query);
  } else {
    var condition = kintone.app.getQueryCondition() || "";
    var query = condition + "order by $id asc";
    body.query = query;
  }
  return kintone.api(url, "GET", body);
}

export { getAppRecords };
