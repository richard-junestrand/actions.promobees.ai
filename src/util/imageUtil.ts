import { ElementFont, ElementSource, ElementType } from "../section/template";
import axios from 'axios'
import jimp from 'jimp';
import { urlVal } from "./dataUtil";
import { intVal } from "./numUtil";
import { customError } from "./errorUtil";
import { ActionOutputErrorOrData } from "../handler";
import { eleHolderVal } from "../section/template/util";

const imageHolderVal = (w: any, h: any) => `https://placehold.co/${intVal(w, 0)}x${intVal(h, 0)}.png`

const addImage = async (intl: any, section: string, image: any, ele: any) => {
  const val=ele.source === ElementSource.Fixed ? ele.value : imageHolderVal(ele.width, ele.height)
  const url = urlVal(val)
  if (!!url) {
    return await axios.get(url, { responseType: 'arraybuffer' })
      .then(async r => {
        const buffer = Buffer.from(r.data, "utf-8");
        const img = await jimp.read(buffer);
        const imgw = intVal(ele.width) || 0;
        const imgh = intVal(ele.height) || 0;
        if (imgw > 0 && imgh > 0) {
          img.resize(imgw, imgh)
        }
        image.composite(img, ele.x, ele.y);
      }).catch(async er => {console.log(url)
        console.log(er)
        return await customError(intl, 500020, section, [ele.name])
      })
  }
  return null
}

const fontVal = (val: any) => {
  switch (val) {
    case ElementFont.Font_Sans_8_Black:
      return jimp.FONT_SANS_8_BLACK
    case ElementFont.Font_Sans_10_Black:
      return jimp.FONT_SANS_10_BLACK
    case ElementFont.Font_Sans_12_Black:
      return jimp.FONT_SANS_12_BLACK
    case ElementFont.Font_Sans_14_Black:
      return jimp.FONT_SANS_14_BLACK
    case ElementFont.Font_Sans_16_Black:
      return jimp.FONT_SANS_16_BLACK
    case ElementFont.Font_Sans_32_Black:
      return jimp.FONT_SANS_32_BLACK
    case ElementFont.Font_Sans_64_Black:
      return jimp.FONT_SANS_64_BLACK
    case ElementFont.Font_Sans_128_Black:
      return jimp.FONT_SANS_128_BLACK
    case ElementFont.Font_Sans_8_White:
      return jimp.FONT_SANS_8_WHITE
    case ElementFont.Font_Sans_16_White:
      return jimp.FONT_SANS_8_BLACK
    case ElementFont.Font_Sans_32_White:
      return jimp.FONT_SANS_32_WHITE
    case ElementFont.Font_Sans_64_White:
      return jimp.FONT_SANS_64_WHITE
    case ElementFont.Font_Sans_128_White:
      return jimp.FONT_SANS_128_WHITE
  }
  return null
}

const addText = async (intl: any, section: any, image: any, ele: any) => {
  try {
    const val = eleHolderVal(ele)
    if (!!val) {
      const font = fontVal(ele.font)
      if (font) {
        image.print(await jimp.loadFont(font), intVal(ele.x) || 0, intVal(ele.y) || 0, val);
      }
    }
    return null
  } catch (err) {
    return await customError(intl, 500020, section, [ele.name])
  }

}

const addShape = async (intl: any, section: any, image: any, ele: any) => {
  return await new Promise((resolve, reject) => {
    new jimp(intVal(ele.width) || 0, intVal(ele.height) || 0, ele.background_color, (err, shape) => {
      if (err) {
        reject(err)
      } else {
        resolve(shape)
      }
    })
  }).then(shape => {
    image.composite(shape, intVal(ele.x) || 0, intVal(ele.y) || 0);
    return null
  }).catch(async err => {
    return await customError(intl, 500020, section, [ele.name])
  })
}

export async function generateImagePreview(intl, section, spec: any): Promise<ActionOutputErrorOrData<any>> {
  const w = intVal(spec?.width) || 0;
  const h = intVal(spec?.height) || 0;
  if (w === 0 || h === 0) {
    return { error: await customError(intl, 500000, section) }
  }
  //
  const errOrImage: any = await new Promise((resolve, reject) => {
    new jimp(w, h, spec.background_color, (err, image) => {
      if (err) {
        reject(err)
      } else {
        resolve({ data: image })
      }
    })
  }).catch(async err => ({ error: await customError(intl, 500010, section) }))
  if (errOrImage.error) {
    return errOrImage
  }
  //
  const image = errOrImage.data;
  let err
  for (const ele of spec.elements) {
    switch (ele.type) {
      case ElementType.Image:
        err = await addImage(intl, section, image, ele)
        if (err) {
          return { error: err }
        }
        break
      case ElementType.Shape:
        err = await addShape(intl, section, image, ele)
        if (err) {
          return { error: err }
        }
        break
      case ElementType.Text:
        err = await addText(intl, section, image, ele)
        if (err) {
          return { error: err }
        }
        break
    }
  }
  let buffer = await image.getBufferAsync(jimp.MIME_PNG);
  return { data: buffer };//.toString('base64')
}