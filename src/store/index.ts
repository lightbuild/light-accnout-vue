import Vue from 'vue';
import Vuex from 'vuex';
import {cloneDeep} from 'lodash';
import router from '@/router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagsList: [] as TagsItem[],
    currentTag:{} as TagsItem,
  },
  mutations: {
    saveTag(state) {
      const tagsList2 = cloneDeep(state.tagsList);
      window.localStorage.setItem('tagsList', JSON.stringify(tagsList2));
    },
    fetchTag(state) {
      state.tagsList = JSON.parse(window.localStorage.getItem('tagsList') || '[]');
    },
    createTag(state, maxId) {
      const value = prompt('请输入标签名');
      const nameList = state.tagsList.map(e => e.name);
      if (value) {
        if (nameList?.includes(value)) {
          alert('标签名重复了');
          return;
        } else {
          state.tagsList.push({name: value, id: maxId});
          store.commit('saveTag')
        }
      }
    },
    removeTag(state,id:number){
      const index = state.tagsList.findIndex(item=>item.id===id);
      if(index != -1){
        state.tagsList.splice(index,1);
        store.commit('saveTag');
        router.back();
      } else{
        window.alert('删除失败了')
      }
    },
    getCurrentTag(state,currentId:number){
      state.currentTag = <TagsItem>state.tagsList.find(item => item.id === currentId)
    },
    updateTag(state,payload:{id:number,newName:string}){
      const {id,newName} = payload
      const oldName = cloneDeep(state.currentTag.name)
      if(newName){
        if(state.tagsList.find(item => item.name === newName)){
          state.currentTag.name = oldName
          return window.alert('标签名重复了');
        }else{
          const tag = state.tagsList.find(item => item.id===id)
          tag!.name = newName
          store.commit('saveTag')
        }
      }else {
        return 'note find'
      }
    },
    saveRecord(state, record) {
      const record2 = cloneDeep(record);
      state.recordList.push(record2);
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchRecord(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    }
  },
  actions: {},
  modules: {}
});

export default store;
