/**
 * Created by liang on 2017/7/31.
 */
// let emotion_path = "/src/assets/emotion/";
let emotion_path = "https://monarchwang.oss-cn-shanghai.aliyuncs.com/emotions/";
let emotions = {

	"sina_emotion": [{
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif",
		value: "[草泥马]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif",
		value: "[神马]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif",
		value: "[浮云]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c9/geili_thumb.gif",
		value: "[给力]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f2/wg_thumb.gif",
		value: "[围观]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/vw_thumb.gif",
		value: "[威武]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6e/panda_thumb.gif",
		value: "[熊猫]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/81/rabbit_thumb.gif",
		value: "[兔子]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/otm_thumb.gif",
		value: "[奥特曼]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/15/j_thumb.gif",
		value: "[囧]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/hufen_thumb.gif",
		value: "[互粉]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c4/liwu_thumb.gif",
		value: "[礼物]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/ac/smilea_thumb.gif",
		value: "[呵呵]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/0b/tootha_thumb.gif",
		value: "[嘻嘻]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6a/laugh.gif",
		value: "[哈哈]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/14/tza_thumb.gif",
		value: "[可爱]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/af/kl_thumb.gif",
		value: "[可怜]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/a0/kbsa_thumb.gif",
		value: "[挖鼻屎]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f4/cj_thumb.gif",
		value: "[吃惊]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6e/shamea_thumb.gif",
		value: "[害羞]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c3/zy_thumb.gif",
		value: "[挤眼]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/29/bz_thumb.gif",
		value: "[闭嘴]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/71/bs2_thumb.gif",
		value: "[鄙视]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6d/lovea_thumb.gif",
		value: "[爱你]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/9d/sada_thumb.gif",
		value: "[泪]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/19/heia_thumb.gif",
		value: "[偷笑]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/8f/qq_thumb.gif",
		value: "[亲亲]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/b6/sb_thumb.gif",
		value: "[生病]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/58/mb_thumb.gif",
		value: "[太开心]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/17/ldln_thumb.gif",
		value: "[懒得理你]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/98/yhh_thumb.gif",
		value: "[右哼哼]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6d/zhh_thumb.gif",
		value: "[左哼哼]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/a6/x_thumb.gif",
		value: "[嘘]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/af/cry.gif",
		value: "[衰]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/73/wq_thumb.gif",
		value: "[委屈]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/9e/t_thumb.gif",
		value: "[吐]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f3/k_thumb.gif",
		value: "[打哈欠]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/27/bba_thumb.gif",
		value: "[抱抱]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7c/angrya_thumb.gif",
		value: "[怒]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/5c/yw_thumb.gif",
		value: "[疑问]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/a5/cza_thumb.gif",
		value: "[馋嘴]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/88_thumb.gif",
		value: "[拜拜]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/e9/sk_thumb.gif",
		value: "[思考]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/24/sweata_thumb.gif",
		value: "[汗]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7f/sleepya_thumb.gif",
		value: "[困]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6b/sleepa_thumb.gif",
		value: "[睡觉]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/90/money_thumb.gif",
		value: "[钱]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/0c/sw_thumb.gif",
		value: "[失望]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/40/cool_thumb.gif",
		value: "[酷]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/8c/hsa_thumb.gif",
		value: "[花心]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/49/hatea_thumb.gif",
		value: "[哼]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/36/gza_thumb.gif",
		value: "[鼓掌]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d9/dizzya_thumb.gif",
		value: "[晕]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/1a/bs_thumb.gif",
		value: "[悲伤]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/62/crazya_thumb.gif",
		value: "[抓狂]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/91/h_thumb.gif",
		value: "[黑线]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6d/yx_thumb.gif",
		value: "[阴险]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/nm_thumb.gif",
		value: "[怒骂]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/40/hearta_thumb.gif",
		value: "[心]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/ea/unheart.gif",
		value: "[伤心]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/58/pig.gif",
		value: "[猪头]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d6/ok_thumb.gif",
		value: "[ok]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d9/ye_thumb.gif",
		value: "[耶]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d8/good_thumb.gif",
		value: "[good]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c7/no_thumb.gif",
		value: "[不要]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d0/z2_thumb.gif",
		value: "[赞]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/40/come_thumb.gif",
		value: "[来]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d8/sad_thumb.gif",
		value: "[弱]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/91/lazu_thumb.gif",
		value: "[蜡烛]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6a/cake.gif",
		value: "[蛋糕]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d3/clock_thumb.gif",
		value: "[钟]"
	}, {
		icon: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/1b/m_thumb.gif",
		value: "[话筒]"
	}
	],
	"qq_motion": [{"icon": emotion_path + "qq/1.gif", "value": "哈哈1"}, {
		"icon": emotion_path + "qq/2.gif",
		"value": "哈哈2"
	}, {"icon": emotion_path + "qq/3.gif", "value": "哈哈3"}, {
		"icon": emotion_path + "qq/4.gif",
		"value": "哈哈4"
	}, {"icon": emotion_path + "qq/5.gif", "value": "哈哈5"}, {
		"icon": emotion_path + "qq/6.gif",
		"value": "哈哈6"
	}, {"icon": emotion_path + "qq/7.gif", "value": "哈哈7"}, {
		"icon": emotion_path + "qq/8.gif",
		"value": "哈哈8"
	}, {"icon": emotion_path + "qq/9.gif", "value": "哈哈9"}, {
		"icon": emotion_path + "qq/10.gif",
		"value": "哈哈10"
	}, {"icon": emotion_path + "qq/11.gif", "value": "哈哈11"}, {
		"icon": emotion_path + "qq/12.gif",
		"value": "哈哈12"
	}, {"icon": emotion_path + "qq/13.gif", "value": "哈哈13"}, {
		"icon": emotion_path + "qq/14.gif",
		"value": "哈哈14"
	}, {"icon": emotion_path + "qq/15.gif", "value": "哈哈15"}, {
		"icon": emotion_path + "qq/16.gif",
		"value": "哈哈16"
	}, {"icon": emotion_path + "qq/17.gif", "value": "哈哈17"}, {
		"icon": emotion_path + "qq/18.gif",
		"value": "哈哈18"
	}, {"icon": emotion_path + "qq/19.gif", "value": "哈哈19"}, {
		"icon": emotion_path + "qq/20.gif",
		"value": "哈哈20"
	}, {"icon": emotion_path + "qq/21.gif", "value": "哈哈21"}, {
		"icon": emotion_path + "qq/22.gif",
		"value": "哈哈22"
	}, {"icon": emotion_path + "qq/23.gif", "value": "哈哈23"}, {
		"icon": emotion_path + "qq/24.gif",
		"value": "哈哈24"
	}, {"icon": emotion_path + "qq/25.gif", "value": "哈哈25"}, {
		"icon": emotion_path + "qq/26.gif",
		"value": "哈哈26"
	}, {"icon": emotion_path + "qq/27.gif", "value": "哈哈27"}, {
		"icon": emotion_path + "qq/28.gif",
		"value": "哈哈28"
	}, {"icon": emotion_path + "qq/29.gif", "value": "哈哈29"}, {
		"icon": emotion_path + "qq/30.gif",
		"value": "哈哈30"
	}, {"icon": emotion_path + "qq/31.gif", "value": "哈哈31"}, {
		"icon": emotion_path + "qq/32.gif",
		"value": "哈哈32"
	}, {"icon": emotion_path + "qq/33.gif", "value": "哈哈33"}, {
		"icon": emotion_path + "qq/34.gif",
		"value": "哈哈34"
	}, {"icon": emotion_path + "qq/35.gif", "value": "哈哈35"}, {
		"icon": emotion_path + "qq/36.gif",
		"value": "哈哈36"
	}, {"icon": emotion_path + "qq/37.gif", "value": "哈哈37"}, {
		"icon": emotion_path + "qq/38.gif",
		"value": "哈哈38"
	}, {"icon": emotion_path + "qq/39.gif", "value": "哈哈39"}, {
		"icon": emotion_path + "qq/40.gif",
		"value": "哈哈40"
	}, {"icon": emotion_path + "qq/41.gif", "value": "哈哈41"}, {
		"icon": emotion_path + "qq/42.gif",
		"value": "哈哈42"
	}, {"icon": emotion_path + "qq/43.gif", "value": "哈哈43"}, {
		"icon": emotion_path + "qq/44.gif",
		"value": "哈哈44"
	}, {"icon": emotion_path + "qq/45.gif", "value": "哈哈45"}, {
		"icon": emotion_path + "qq/46.gif",
		"value": "哈哈46"
	}, {"icon": emotion_path + "qq/47.gif", "value": "哈哈47"}, {
		"icon": emotion_path + "qq/48.gif",
		"value": "哈哈48"
	}, {"icon": emotion_path + "qq/49.gif", "value": "哈哈49"}, {
		"icon": emotion_path + "qq/50.gif",
		"value": "哈哈50"
	}, {"icon": emotion_path + "qq/51.gif", "value": "哈哈51"}, {
		"icon": emotion_path + "qq/52.gif",
		"value": "哈哈52"
	}, {"icon": emotion_path + "qq/53.gif", "value": "哈哈53"}, {
		"icon": emotion_path + "qq/54.gif",
		"value": "哈哈54"
	}, {"icon": emotion_path + "qq/55.gif", "value": "哈哈55"}, {
		"icon": emotion_path + "qq/56.gif",
		"value": "哈哈56"
	}, {"icon": emotion_path + "qq/57.gif", "value": "哈哈57"}, {
		"icon": emotion_path + "qq/58.gif",
		"value": "哈哈58"
	}, {"icon": emotion_path + "qq/59.gif", "value": "哈哈59"}, {
		"icon": emotion_path + "qq/60.gif",
		"value": "哈哈60"
	}, {"icon": emotion_path + "qq/61.gif", "value": "哈哈61"}, {
		"icon": emotion_path + "qq/62.gif",
		"value": "哈哈62"
	}, {"icon": emotion_path + "qq/63.gif", "value": "哈哈63"}, {
		"icon": emotion_path + "qq/64.gif",
		"value": "哈哈64"
	}, {"icon": emotion_path + "qq/65.gif", "value": "哈哈65"}, {
		"icon": emotion_path + "qq/66.gif",
		"value": "哈哈66"
	}, {"icon": emotion_path + "qq/67.gif", "value": "哈哈67"}, {
		"icon": emotion_path + "qq/68.gif",
		"value": "哈哈68"
	}, {"icon": emotion_path + "qq/69.gif", "value": "哈哈69"}, {
		"icon": emotion_path + "qq/70.gif",
		"value": "哈哈70"
	}, {"icon": emotion_path + "qq/71.gif", "value": "哈哈71"}, {
		"icon": emotion_path + "qq/72.gif",
		"value": "哈哈72"
	}, {"icon": emotion_path + "qq/73.gif", "value": "哈哈73"}, {
		"icon": emotion_path + "qq/74.gif",
		"value": "哈哈74"
	}, {"icon": emotion_path + "qq/75.gif", "value": "哈哈75"}, {
		"icon": emotion_path + "qq/76.gif",
		"value": "哈哈76"
	}, {"icon": emotion_path + "qq/77.gif", "value": "哈哈77"}, {
		"icon": emotion_path + "qq/78.gif",
		"value": "哈哈78"
	}, {"icon": emotion_path + "qq/79.gif", "value": "哈哈79"}, {
		"icon": emotion_path + "qq/80.gif",
		"value": "哈哈80"
	}, {"icon": emotion_path + "qq/81.gif", "value": "哈哈81"}, {
		"icon": emotion_path + "qq/82.gif",
		"value": "哈哈82"
	}, {"icon": emotion_path + "qq/83.gif", "value": "哈哈83"}, {
		"icon": emotion_path + "qq/84.gif",
		"value": "哈哈84"
	}, {"icon": emotion_path + "qq/85.gif", "value": "哈哈85"}, {
		"icon": emotion_path + "qq/86.gif",
		"value": "哈哈86"
	}, {"icon": emotion_path + "qq/87.gif", "value": "哈哈87"}, {
		"icon": emotion_path + "qq/88.gif",
		"value": "哈哈88"
	}, {"icon": emotion_path + "qq/89.gif", "value": "哈哈89"}, {
		"icon": emotion_path + "qq/90.gif",
		"value": "哈哈90"
	}, {"icon": emotion_path + "qq/91.gif", "value": "哈哈91"}, {
		"icon": emotion_path + "qq/92.gif",
		"value": "哈哈92"
	}, {"icon": emotion_path + "qq/93.gif", "value": "哈哈93"}, {
		"icon": emotion_path + "qq/94.gif",
		"value": "哈哈94"
	}, {"icon": emotion_path + "qq/95.gif", "value": "哈哈95"}, {
		"icon": emotion_path + "qq/96.gif",
		"value": "哈哈96"
	}, {"icon": emotion_path + "qq/97.gif", "value": "哈哈97"}, {
		"icon": emotion_path + "qq/98.gif",
		"value": "哈哈98"
	}, {"icon": emotion_path + "qq/99.gif", "value": "哈哈99"}, {
		"icon": emotion_path + "qq/100.gif",
		"value": "哈哈100"
	}, {"icon": emotion_path + "qq/101.gif", "value": "哈哈101"}, {
		"icon": emotion_path + "qq/102.gif",
		"value": "哈哈102"
	}, {"icon": emotion_path + "qq/103.gif", "value": "哈哈103"}, {
		"icon": emotion_path + "qq/104.gif",
		"value": "哈哈104"
	}, {"icon": emotion_path + "qq/105.gif", "value": "哈哈105"}, {
		"icon": emotion_path + "qq/106.gif",
		"value": "哈哈106"
	}, {"icon": emotion_path + "qq/107.gif", "value": "哈哈107"}, {
		"icon": emotion_path + "qq/108.gif",
		"value": "哈哈108"
	}, {"icon": emotion_path + "qq/109.gif", "value": "哈哈109"}, {
		"icon": emotion_path + "qq/110.gif",
		"value": "哈哈110"
	}, {"icon": emotion_path + "qq/111.gif", "value": "哈哈111"}, {
		"icon": emotion_path + "qq/112.gif",
		"value": "哈哈112"
	}, {"icon": emotion_path + "qq/113.gif", "value": "哈哈113"}, {
		"icon": emotion_path + "qq/114.gif",
		"value": "哈哈114"
	}, {"icon": emotion_path + "qq/115.gif", "value": "哈哈115"}, {
		"icon": emotion_path + "qq/116.gif",
		"value": "哈哈116"
	}, {"icon": emotion_path + "qq/117.gif", "value": "哈哈117"}, {
		"icon": emotion_path + "qq/118.gif",
		"value": "哈哈118"
	}, {"icon": emotion_path + "qq/119.gif", "value": "哈哈119"}, {
		"icon": emotion_path + "qq/120.gif",
		"value": "哈哈120"
	}],
	"expression":[
		{"icon":emotion_path+"expression/1.gif","value":"得意"},
		{"icon":emotion_path+"expression/2.gif","value":"得意"},
		{"icon":emotion_path+"expression/3.gif","value":"得意"},
		{"icon":emotion_path+"expression/4.gif","value":"得意"}
	]
};

export default emotions