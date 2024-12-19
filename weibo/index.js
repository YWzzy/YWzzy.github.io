new Vue({
    el: "#myWeibo", // el不要是最外面的id_name，应该是html: ''里的div的id
    data: function () {
        return {
            content: [],
            classOption: {
                singleHeight: 30,
            },
        };
    },
    created() {
        this.getWeiboList();
    },
    methods: {
        // 请求开源api, 获取历史上的今天数据
        getWeiboList() {
            fetch("https://tenapi.cn/resou/", {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    this.content = data.list;
                })
                .catch((err) => {
                    console.log("err", err);
                });
        },
    },
});<script type="text&#x2F;javascript" src="https://unpkg.com/kity@2.0.4/dist/kity.min.js"></script><script type="text&#x2F;javascript" src="https://unpkg.com/kityminder-core@1.4.50/dist/kityminder.core.min.js"></script><script defer="true" type="text&#x2F;javascript" src="https://unpkg.com/hexo-simple-mindmap@0.8.0/dist/mindmap.min.js"></script><link rel="stylesheet" type="text&#x2F;css" href="https://unpkg.com/hexo-simple-mindmap@0.8.0/dist/mindmap.min.css">