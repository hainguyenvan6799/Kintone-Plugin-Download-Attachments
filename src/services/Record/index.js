// function getAppRecords(fieldCode, isGuestSpace, listIds = null) {
//   const appId = kintone.app.getId();
//   const url = kintone.api.url('/k/v1/records', isGuestSpace);

//   const body = {
//     app: appId,
//     field: fieldCode,
//   };

//   if (listIds) {
//     const listIdsInString = listIds.toString();
//     body.query = `$id in (${listIdsInString})`;
//     console.log('listids: ', body.query);
//   } else {
//     const condition = kintone.app.getQueryCondition() || '';
//     const query = condition + 'order by $id asc';
//     body.query = query;
//   }
//   return kintone.api(url, 'GET', body);
// }

function getAppRecords(listIds = null) {
  const appId = kintone.app.getId();
  const url = kintone.api.url('/k/v1/records');

  const body = {
    app: appId,
  };

  if (listIds) {
    const listIdsInString = listIds.toString();
    body.query = `$id in (${listIdsInString})`;
    console.log('listids: ', body.query);
  } else {
    const condition = kintone.app.getQueryCondition() || '';
    const query = condition + 'order by $id asc';
    body.query = query;
  }
  return kintone.api(url, 'GET', body);
}

export {getAppRecords};
