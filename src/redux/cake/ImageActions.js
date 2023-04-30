import { CLICK_IMAGE } from "./ImageTypes"


export const clickImage = (id) => {
  return {
    type: CLICK_IMAGE,
    Imageid: id
  }
}

