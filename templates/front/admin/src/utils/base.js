const base = {
    get() {
        return {
            url : "http://localhost:8080/djangot9tw7jz0/",
            name: "djangot9tw7jz0",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Python的农产品销售系统的设计与实现"
        } 
    }
}
export default base
