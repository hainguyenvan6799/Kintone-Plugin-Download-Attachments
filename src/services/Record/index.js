function getAppRecords(fieldCode, isGuestSpace, listIds = null) {
    let appId = kintone.app.getId();
    let url = kintone.api.url("/k/v1/records", isGuestSpace);

    let body = {
      app: appId,
      field: fieldCode,
    };

    if (listIds) {
      let listIdsInString = listIds.toString();
      body.query = `$id in (${listIdsInString})`;
      console.log("listids: ", body.query);
    } else {
      let condition = kintone.app.getQueryCondition() || "";
      let query = condition + "order by $id asc";
      body.query = query;
    }
    return kintone.api(url, "GET", body);
}

export { getAppRecords };
