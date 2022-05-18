function createdId(tagsList:TagsItem[]):number{
  if(tagsList.length!==0){
    let maxId = tagsList[tagsList.length-1].id
    maxId++
    return maxId
  }else{
    const maxId = 0;
    return maxId
  }
}
export default createdId