const encryption = function (str) {
    let temp = [];//存放str变成int类型数组的临时媒介
    for (let i = 0; i < str.length; i++) {
        temp.push(str[i].charCodeAt() + 1);
    }
    //去除左右两边的方括号;
    let encryptionData = JSON.stringify(temp);
    //释放变量;
    temp = null;
    encryptionData = encryptionData.replace("[", "");
    encryptionData = encryptionData.replace("]", "");
    return encryptionData;
};

export default {encryption}
export {encryption}