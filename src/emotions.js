/**
 * Created by liang on 2017/7/31.
 */
// let emotion_path = "/src/assets/emotion/";
let emotion_path = "https://monarchwang.oss-cn-shanghai.aliyuncs.com/emotions/";
let emotions = {

	"sina_emotion": [{
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif",
		alt: "[草泥马]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif",
		alt: "[神马]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif",
		alt: "[浮云]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c9/geili_thumb.gif",
		alt: "[给力]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f2/wg_thumb.gif",
		alt: "[围观]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/vw_thumb.gif",
		alt: "[威武]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6e/panda_thumb.gif",
		alt: "[熊猫]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/81/rabbit_thumb.gif",
		alt: "[兔子]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/otm_thumb.gif",
		alt: "[奥特曼]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/15/j_thumb.gif",
		alt: "[囧]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/hufen_thumb.gif",
		alt: "[互粉]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c4/liwu_thumb.gif",
		alt: "[礼物]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/ac/smilea_thumb.gif",
		alt: "[呵呵]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/0b/tootha_thumb.gif",
		alt: "[嘻嘻]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6a/laugh.gif",
		alt: "[哈哈]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/14/tza_thumb.gif",
		alt: "[可爱]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/af/kl_thumb.gif",
		alt: "[可怜]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/a0/kbsa_thumb.gif",
		alt: "[挖鼻屎]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f4/cj_thumb.gif",
		alt: "[吃惊]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6e/shamea_thumb.gif",
		alt: "[害羞]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c3/zy_thumb.gif",
		alt: "[挤眼]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/29/bz_thumb.gif",
		alt: "[闭嘴]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/71/bs2_thumb.gif",
		alt: "[鄙视]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6d/lovea_thumb.gif",
		alt: "[爱你]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/9d/sada_thumb.gif",
		alt: "[泪]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/19/heia_thumb.gif",
		alt: "[偷笑]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/8f/qq_thumb.gif",
		alt: "[亲亲]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/b6/sb_thumb.gif",
		alt: "[生病]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/58/mb_thumb.gif",
		alt: "[太开心]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/17/ldln_thumb.gif",
		alt: "[懒得理你]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/98/yhh_thumb.gif",
		alt: "[右哼哼]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6d/zhh_thumb.gif",
		alt: "[左哼哼]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/a6/x_thumb.gif",
		alt: "[嘘]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/af/cry.gif",
		alt: "[衰]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/73/wq_thumb.gif",
		alt: "[委屈]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/9e/t_thumb.gif",
		alt: "[吐]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f3/k_thumb.gif",
		alt: "[打哈欠]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/27/bba_thumb.gif",
		alt: "[抱抱]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7c/angrya_thumb.gif",
		alt: "[怒]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/5c/yw_thumb.gif",
		alt: "[疑问]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/a5/cza_thumb.gif",
		alt: "[馋嘴]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/88_thumb.gif",
		alt: "[拜拜]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/e9/sk_thumb.gif",
		alt: "[思考]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/24/sweata_thumb.gif",
		alt: "[汗]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7f/sleepya_thumb.gif",
		alt: "[困]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6b/sleepa_thumb.gif",
		alt: "[睡觉]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/90/money_thumb.gif",
		alt: "[钱]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/0c/sw_thumb.gif",
		alt: "[失望]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/40/cool_thumb.gif",
		alt: "[酷]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/8c/hsa_thumb.gif",
		alt: "[花心]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/49/hatea_thumb.gif",
		alt: "[哼]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/36/gza_thumb.gif",
		alt: "[鼓掌]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d9/dizzya_thumb.gif",
		alt: "[晕]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/1a/bs_thumb.gif",
		alt: "[悲伤]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/62/crazya_thumb.gif",
		alt: "[抓狂]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/91/h_thumb.gif",
		alt: "[黑线]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6d/yx_thumb.gif",
		alt: "[阴险]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/nm_thumb.gif",
		alt: "[怒骂]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/40/hearta_thumb.gif",
		alt: "[心]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/ea/unheart.gif",
		alt: "[伤心]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/58/pig.gif",
		alt: "[猪头]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d6/ok_thumb.gif",
		alt: "[ok]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d9/ye_thumb.gif",
		alt: "[耶]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d8/good_thumb.gif",
		alt: "[good]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c7/no_thumb.gif",
		alt: "[不要]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d0/z2_thumb.gif",
		alt: "[赞]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/40/come_thumb.gif",
		alt: "[来]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d8/sad_thumb.gif",
		alt: "[弱]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/91/lazu_thumb.gif",
		alt: "[蜡烛]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6a/cake.gif",
		alt: "[蛋糕]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d3/clock_thumb.gif",
		alt: "[钟]"
	}, {
		src: "https://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/1b/m_thumb.gif",
		alt: "[话筒]"
	}
	],
	"qq_motion": [{"src": emotion_path + "qq/1.gif", "alt": "哈哈1"}, {
		"src": emotion_path + "qq/2.gif",
		"alt": "哈哈2"
	}, {"src": emotion_path + "qq/3.gif", "alt": "哈哈3"}, {
		"src": emotion_path + "qq/4.gif",
		"alt": "哈哈4"
	}, {"src": emotion_path + "qq/5.gif", "alt": "哈哈5"}, {
		"src": emotion_path + "qq/6.gif",
		"alt": "哈哈6"
	}, {"src": emotion_path + "qq/7.gif", "alt": "哈哈7"}, {
		"src": emotion_path + "qq/8.gif",
		"alt": "哈哈8"
	}, {"src": emotion_path + "qq/9.gif", "alt": "哈哈9"}, {
		"src": emotion_path + "qq/10.gif",
		"alt": "哈哈10"
	}, {"src": emotion_path + "qq/11.gif", "alt": "哈哈11"}, {
		"src": emotion_path + "qq/12.gif",
		"alt": "哈哈12"
	}, {"src": emotion_path + "qq/13.gif", "alt": "哈哈13"}, {
		"src": emotion_path + "qq/14.gif",
		"alt": "哈哈14"
	}, {"src": emotion_path + "qq/15.gif", "alt": "哈哈15"}, {
		"src": emotion_path + "qq/16.gif",
		"alt": "哈哈16"
	}, {"src": emotion_path + "qq/17.gif", "alt": "哈哈17"}, {
		"src": emotion_path + "qq/18.gif",
		"alt": "哈哈18"
	}, {"src": emotion_path + "qq/19.gif", "alt": "哈哈19"}, {
		"src": emotion_path + "qq/20.gif",
		"alt": "哈哈20"
	}, {"src": emotion_path + "qq/21.gif", "alt": "哈哈21"}, {
		"src": emotion_path + "qq/22.gif",
		"alt": "哈哈22"
	}, {"src": emotion_path + "qq/23.gif", "alt": "哈哈23"}, {
		"src": emotion_path + "qq/24.gif",
		"alt": "哈哈24"
	}, {"src": emotion_path + "qq/25.gif", "alt": "哈哈25"}, {
		"src": emotion_path + "qq/26.gif",
		"alt": "哈哈26"
	}, {"src": emotion_path + "qq/27.gif", "alt": "哈哈27"}, {
		"src": emotion_path + "qq/28.gif",
		"alt": "哈哈28"
	}, {"src": emotion_path + "qq/29.gif", "alt": "哈哈29"}, {
		"src": emotion_path + "qq/30.gif",
		"alt": "哈哈30"
	}, {"src": emotion_path + "qq/31.gif", "alt": "哈哈31"}, {
		"src": emotion_path + "qq/32.gif",
		"alt": "哈哈32"
	}, {"src": emotion_path + "qq/33.gif", "alt": "哈哈33"}, {
		"src": emotion_path + "qq/34.gif",
		"alt": "哈哈34"
	}, {"src": emotion_path + "qq/35.gif", "alt": "哈哈35"}, {
		"src": emotion_path + "qq/36.gif",
		"alt": "哈哈36"
	}, {"src": emotion_path + "qq/37.gif", "alt": "哈哈37"}, {
		"src": emotion_path + "qq/38.gif",
		"alt": "哈哈38"
	}, {"src": emotion_path + "qq/39.gif", "alt": "哈哈39"}, {
		"src": emotion_path + "qq/40.gif",
		"alt": "哈哈40"
	}, {"src": emotion_path + "qq/41.gif", "alt": "哈哈41"}, {
		"src": emotion_path + "qq/42.gif",
		"alt": "哈哈42"
	}, {"src": emotion_path + "qq/43.gif", "alt": "哈哈43"}, {
		"src": emotion_path + "qq/44.gif",
		"alt": "哈哈44"
	}, {"src": emotion_path + "qq/45.gif", "alt": "哈哈45"}, {
		"src": emotion_path + "qq/46.gif",
		"alt": "哈哈46"
	}, {"src": emotion_path + "qq/47.gif", "alt": "哈哈47"}, {
		"src": emotion_path + "qq/48.gif",
		"alt": "哈哈48"
	}, {"src": emotion_path + "qq/49.gif", "alt": "哈哈49"}, {
		"src": emotion_path + "qq/50.gif",
		"alt": "哈哈50"
	}, {"src": emotion_path + "qq/51.gif", "alt": "哈哈51"}, {
		"src": emotion_path + "qq/52.gif",
		"alt": "哈哈52"
	}, {"src": emotion_path + "qq/53.gif", "alt": "哈哈53"}, {
		"src": emotion_path + "qq/54.gif",
		"alt": "哈哈54"
	}, {"src": emotion_path + "qq/55.gif", "alt": "哈哈55"}, {
		"src": emotion_path + "qq/56.gif",
		"alt": "哈哈56"
	}, {"src": emotion_path + "qq/57.gif", "alt": "哈哈57"}, {
		"src": emotion_path + "qq/58.gif",
		"alt": "哈哈58"
	}, {"src": emotion_path + "qq/59.gif", "alt": "哈哈59"}, {
		"src": emotion_path + "qq/60.gif",
		"alt": "哈哈60"
	}, {"src": emotion_path + "qq/61.gif", "alt": "哈哈61"}, {
		"src": emotion_path + "qq/62.gif",
		"alt": "哈哈62"
	}, {"src": emotion_path + "qq/63.gif", "alt": "哈哈63"}, {
		"src": emotion_path + "qq/64.gif",
		"alt": "哈哈64"
	}, {"src": emotion_path + "qq/65.gif", "alt": "哈哈65"}, {
		"src": emotion_path + "qq/66.gif",
		"alt": "哈哈66"
	}, {"src": emotion_path + "qq/67.gif", "alt": "哈哈67"}, {
		"src": emotion_path + "qq/68.gif",
		"alt": "哈哈68"
	}, {"src": emotion_path + "qq/69.gif", "alt": "哈哈69"}, {
		"src": emotion_path + "qq/70.gif",
		"alt": "哈哈70"
	}, {"src": emotion_path + "qq/71.gif", "alt": "哈哈71"}, {
		"src": emotion_path + "qq/72.gif",
		"alt": "哈哈72"
	}, {"src": emotion_path + "qq/73.gif", "alt": "哈哈73"}, {
		"src": emotion_path + "qq/74.gif",
		"alt": "哈哈74"
	}, {"src": emotion_path + "qq/75.gif", "alt": "哈哈75"}, {
		"src": emotion_path + "qq/76.gif",
		"alt": "哈哈76"
	}, {"src": emotion_path + "qq/77.gif", "alt": "哈哈77"}, {
		"src": emotion_path + "qq/78.gif",
		"alt": "哈哈78"
	}, {"src": emotion_path + "qq/79.gif", "alt": "哈哈79"}, {
		"src": emotion_path + "qq/80.gif",
		"alt": "哈哈80"
	}, {"src": emotion_path + "qq/81.gif", "alt": "哈哈81"}, {
		"src": emotion_path + "qq/82.gif",
		"alt": "哈哈82"
	}, {"src": emotion_path + "qq/83.gif", "alt": "哈哈83"}, {
		"src": emotion_path + "qq/84.gif",
		"alt": "哈哈84"
	}, {"src": emotion_path + "qq/85.gif", "alt": "哈哈85"}, {
		"src": emotion_path + "qq/86.gif",
		"alt": "哈哈86"
	}, {"src": emotion_path + "qq/87.gif", "alt": "哈哈87"}, {
		"src": emotion_path + "qq/88.gif",
		"alt": "哈哈88"
	}, {"src": emotion_path + "qq/89.gif", "alt": "哈哈89"}, {
		"src": emotion_path + "qq/90.gif",
		"alt": "哈哈90"
	}, {"src": emotion_path + "qq/91.gif", "alt": "哈哈91"}, {
		"src": emotion_path + "qq/92.gif",
		"alt": "哈哈92"
	}, {"src": emotion_path + "qq/93.gif", "alt": "哈哈93"}, {
		"src": emotion_path + "qq/94.gif",
		"alt": "哈哈94"
	}, {"src": emotion_path + "qq/95.gif", "alt": "哈哈95"}, {
		"src": emotion_path + "qq/96.gif",
		"alt": "哈哈96"
	}, {"src": emotion_path + "qq/97.gif", "alt": "哈哈97"}, {
		"src": emotion_path + "qq/98.gif",
		"alt": "哈哈98"
	}, {"src": emotion_path + "qq/99.gif", "alt": "哈哈99"}, {
		"src": emotion_path + "qq/100.gif",
		"alt": "哈哈100"
	}, {"src": emotion_path + "qq/101.gif", "alt": "哈哈101"}, {
		"src": emotion_path + "qq/102.gif",
		"alt": "哈哈102"
	}, {"src": emotion_path + "qq/103.gif", "alt": "哈哈103"}, {
		"src": emotion_path + "qq/104.gif",
		"alt": "哈哈104"
	}, {"src": emotion_path + "qq/105.gif", "alt": "哈哈105"}, {
		"src": emotion_path + "qq/106.gif",
		"alt": "哈哈106"
	}, {"src": emotion_path + "qq/107.gif", "alt": "哈哈107"}, {
		"src": emotion_path + "qq/108.gif",
		"alt": "哈哈108"
	}, {"src": emotion_path + "qq/109.gif", "alt": "哈哈109"}, {
		"src": emotion_path + "qq/110.gif",
		"alt": "哈哈110"
	}, {"src": emotion_path + "qq/111.gif", "alt": "哈哈111"}, {
		"src": emotion_path + "qq/112.gif",
		"alt": "哈哈112"
	}, {"src": emotion_path + "qq/113.gif", "alt": "哈哈113"}, {
		"src": emotion_path + "qq/114.gif",
		"alt": "哈哈114"
	}, {"src": emotion_path + "qq/115.gif", "alt": "哈哈115"}, {
		"src": emotion_path + "qq/116.gif",
		"alt": "哈哈116"
	}, {"src": emotion_path + "qq/117.gif", "alt": "哈哈117"}, {
		"src": emotion_path + "qq/118.gif",
		"alt": "哈哈118"
	}, {"src": emotion_path + "qq/119.gif", "alt": "哈哈119"}, {
		"src": emotion_path + "qq/120.gif",
		"alt": "哈哈120"
	}],
	"expression":[
		{"src":emotion_path+"expression/1.gif","alt":"得意"},
		{"src":emotion_path+"expression/2.gif","alt":"嘚瑟"},
		{"src":emotion_path+"expression/3.gif","alt":"开心"},
		{"src":emotion_path+"expression/4.gif","alt":"跳舞"}
	]
};

export default emotions