# user    
    基于react的用户增删查改
    Using react to improve and delete users' additions and deletions

# Fetures
    React √
    jest √
    enzyme √
    ES6 support √
    webpack √

# Start & Development
    // clone git
    git clone https://github.com/jean0218/user.git

    // 安装依赖包Install dependency package
    npm install

    // 启动start
    npm start
    
    // 跑测试用例test
    npm test
    
# Catalog
    ├── .babelrc 
    ├── README.md
    ├── __mocks__ // Some resources that require mock 一些需要mock的资源
    ├── package.json 
    ├── build // 编译文件配置Compiling file configuration
    │   ├── webpack.base.config.js //webpack base config
    │   ├── webpack.config.js // webpack本地调试配置local debug configuration 
    │   ├── webpack.dev.config.js //webpack测试环境配置,提取了css,可调试Webpack test environment configuration, extract CSS, debug
    │   └── webpack.pro.config.js //压缩资源，不可调试Compress resources, not debug  
    └── src // 源文件
        ├── base // 脱离业务的组件
        ├── template //html模板文件
        ├── views //业务组件
        └── index.js //app入口
