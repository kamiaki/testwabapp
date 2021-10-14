import ChinaMobile from '/@/assets/logo/ChinaMobile.png'
import ChinaUnicom from '/@/assets/logo/ChinaUnicom.png'
import ChinaTelecom from '/@/assets/logo/ChinaTelecom.png'
import anxinlogo from '/@/assets/logo/anxinlogo.png'

const chinaMobileUrl = ChinaMobile
const ChinaUnicomUrl = ChinaUnicom
const ChinaTelecomUrl = ChinaTelecom
const anxinlogoUrl = anxinlogo

const line = {
    mobile: {id: 'mobile', name: '移动', targetName: '移动网络', iconUrl: chinaMobileUrl},
    unicom: {id: 'unicom', name: '联通', targetName: '联通网络', iconUrl: ChinaUnicomUrl},
    telecom: {id: 'telecom', name: '电信',targetName: '电信网络',  iconUrl: ChinaTelecomUrl},
    domain: {id: 'domain', name: '域名', targetName: '域名网络', iconUrl: anxinlogoUrl},
}

export default {line}
export {line}