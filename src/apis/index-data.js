import {indexURL} from '../commons/ajaxURLdata'
export default {
    /**
     * 获取首页轮播图图片数据
     * @param calb
     */
    getSliderImg(calb){
      fetch(indexURL).then(res=> {
        res.json().then(data => {
          calb(data)
        })
      })
    },
  }
  