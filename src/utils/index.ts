/**
 * Created by terryzh on 19/02/13.
 */

export function parseTime(time: any) {
  if (time) {
    const date = new Date(time)
    const year = date.getFullYear()
    /* 在日期格式中，月份是从0开始的，因此要加0
     * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
     * */
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    // 拼接
    return year + '年' + month + '月' + day + '日 ' + hours + ':' + minutes + ':' + seconds
  } else {
    return ''
  }
}

export function formatTime(time: any, option: any) {
  time = +time * 1000
  const d: any = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

export function debounce(func: any, wait: any, immediate: any) {
  let timeout: any
  let args: any
  let context: any
  let timestamp: any
  let result: any

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) { context = args = null }
      }
    }
  }

  return function(this: any, ...args: any[]) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) { timeout = setTimeout(later, wait) }
    if (callNow) {
      result = func.apply(context, args)
      context = args = []
    }

    return result
  }
}

export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

// 替换邮箱字符
export function regEmail(email: string) {
  if (String(email).indexOf('@') > 0) {
    const str = email.split('@')
    let _s = ''
    if (str[0].length > 3) {
      for (let i = 0; i < str[0].length - 3; i++) {
        _s += '*'
      }
    }
    const new_email: string = str[0].substr(0, 3) + _s + '@' + str[1]
    return new_email
  }
}

// 替换手机字符
export function regMobile(mobile: string) {
  if (mobile.length > 7) {
    const new_mobile = mobile.substr(0, 3) + '****' + mobile.substr(7)
    return new_mobile
  }
}
