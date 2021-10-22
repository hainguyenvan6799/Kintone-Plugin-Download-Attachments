function getAppRecords(listIds = null) {
  const appId = kintone.app.getId();
  const url = kintone.api.url('/k/v1/records');

  const body = {
    app: appId,
  };

  if (listIds) {
    const listIdsInString = listIds.toString();
    body.query = `$id in (${listIdsInString})`;
  } else {
    const condition = kintone.app.getQueryCondition() || '';
    const query = condition + 'order by $id asc';
    body.query = query;
  }
  return kintone.api(url, 'GET', body);
}

export {getAppRecords};
