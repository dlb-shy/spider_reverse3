function stringToHex(str) {
    let hex = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i).toString(16); // 获取字符的Unicode值，并将其转换为16进制字符串
        hex += charCode.padStart(2, "0"); // 如果字符的16进制数只有1位，则在前面补零，使其变为两位
    }
    return hex;
}

function hexToString(hex) {
    let str = "";
    for (let i = 0; i < hex.length; i += 2) {
        let charCode = parseInt(hex.substr(i, 2), 16); // 获取每两个字符组成的16进制数，并将其转换为十进制数
        str += String.fromCharCode(charCode); // 将十进制数转换成对应的字符，并拼接到字符串中
    }
    return str;
}



function base64Encode(str) {
    let buffer = Buffer.from(str); // 将字符串转换为Buffer对象
    return buffer.toString('base64'); // 编码为base64字符串并返回
}



function des(_str) {
    var spfunction1 = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756];
    var spfunction2 = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344];
    var spfunction3 = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584];
    var spfunction4 = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928];
    var spfunction5 = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080];
    var spfunction6 = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312];
    var spfunction7 = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154];
    var spfunction8 = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696];
    var keys = [187050025,472920585,186915882,876157969,255199502,806945584,220596020,958210835,757275681,940378667,489892883,705504304,354103316,688857884,890312192,219096591,622400037,254088489,907618332,52759587,907877143,53870614,839463457,389417746,975774727,372382245,437136414,909246726,168694017,473575703,52697872,1010440969];//des_createKeys (key);
    // let enStr = checkLength(base64Encode(_str));
    var looping = [0, 32, 2];
    var iterations = keys.length == 32 ? 3 : 9;
    var m = 0
    var tempresult = "";
    var enStr = base64Encode(_str);
    var len = enStr.length;
    //var L = 32 == i.length ? 3 : 9;
    while (m < len) {
        d = enStr.charCodeAt(m++) << 24 | enStr.charCodeAt(m++) << 16 | enStr.charCodeAt(m++) << 8 | enStr.charCodeAt(m++);
        h = enStr.charCodeAt(m++) << 24 | enStr.charCodeAt(m++) << 16 | enStr.charCodeAt(m++) << 8 | enStr.charCodeAt(m++);
        d ^= (c = 252645135 & (d >>> 4 ^ h)) << 4;
        d ^= (c = 65535 & (d >>> 16 ^ (h ^= c))) << 16;
        d ^= c = 858993459 & ((h ^= c) >>> 2 ^ d);
        d ^= c = 16711935 & ((h ^= c << 2) >>> 8 ^ d);
        left = (d ^= (c = 1431655765 & (d >>> 1 ^ (h ^= c << 8))) << 1) << 1 | d >>> 31;
        right = (h ^= c) << 1 | h >>> 31;
        for (j=0; j<iterations; j+=3) {
          endloop = looping[j+1];
          loopinc = looping[j+2];
          //now go through and perform the encryption or decryption 0+2
          for (i=looping[j]; i!=endloop; i+=loopinc) { //for efficiency
            right1 = right ^ keys[i];
            right2 = ((right >>> 4) | (right << 28)) ^ keys[i+1];
            //the result is attained by passing these bytes through the S selection functions
            temp = left;
            left = right;
            right = temp ^ (spfunction2[(right1 >>> 24) & 0x3f] | spfunction4[(right1 >>> 16) & 0x3f]
              | spfunction6[(right1 >>> 8) & 0x3f] | spfunction8[right1 & 0x3f]
              | spfunction1[(right2 >>> 24) & 0x3f] | spfunction3[(right2 >>> 16) & 0x3f]
              | spfunction5[(right2 >>> 8) & 0x3f] | spfunction7[right2 & 0x3f]);
          }
          temp = left; left = right; right = temp; //unreverse left and right
        }
    left = ((left >>> 1) | (left << 31));
    right = ((right >>> 1) | (right << 31));
    //now perform IP-1, which is IP in the opposite direction
    temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);
    temp = ((right >>> 8) ^ left) & 0x00ff00ff; left ^= temp; right ^= (temp << 8);
    temp = ((right >>> 2) ^ left) & 0x33333333; left ^= temp; right ^= (temp << 2);
    temp = ((left >>> 16) ^ right) & 0x0000ffff; right ^= temp; left ^= (temp << 16);
    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f; right ^= temp; left ^= (temp << 4);
    tempresult += String.fromCharCode ((left>>>24), ((left>>>16) & 0xff), ((left>>>8) & 0xff), (left & 0xff), (right>>>24), ((right>>>16) & 0xff), ((right>>>8) & 0xff), (right & 0xff));

    };

    return stringToHex(tempresult)

}

//x1 是url去掉域名的MD5
// x2 是环境检测可固定
// x3 是cookie->a1 的值 可有可无
// x4 是时间戳 X-t 就是此值
//get->x1 md5(url=/data/sem_sdk) == ad8cdf1c752642088073c5f67a0cfc78
//post->x1: md5(url=/api/sns/web/v1/feed{"source_note_id":"642934cb000000001203fd14"})
function Decrypt(x1,a1){
    let x4 = Date.now();
    let txt = 'x1='+x1+';x2=0|0|0;x3='+a1+';x4='+x4+';'
    let payload = des(txt);
    let XYW = '{"signSvn":"51","signType":"x1","payload":"'+payload+'"}'
    X_d = {
        'x-s': 'XYM_'+ base64Encode(XYW),
        'x-t': x4+''};
    return X_d
}


s_ = Decrypt('9028505230622691ac98fc938f4df25f','190e8738bc5mily8lgurte9tj61wab3ajybx3no3n90001365283')
console.log(s_)
