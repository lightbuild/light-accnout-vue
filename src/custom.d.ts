interface TagsItem {
  name:string,
  id:number
}

interface RecordItem {
  tags: TagsItem[],
  notes: string,
  type: string,
  amount: number,
  createAt?:data
}

