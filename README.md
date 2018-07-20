# user    
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

    // Install dependency package
    npm install

    // 启动start
    npm start
    
    // 跑测试用例test
    npm test
    
# Catalog
    ├── .babelrc 
    ├── README.md
    ├── __mocks__ // Some resources that require mock 
    ├── package.json 
    ├── build // Compiling file configuration
    │   ├── webpack.base.config.js //webpack base config
    │   ├── webpack.config.js // local debug configuration 
    │   ├── webpack.dev.config.js //Webpack test environment configuration, extract CSS, debug
    │   └── webpack.pro.config.js //Compress resources, not debug  
    └── src 
        ├── base // Components out of business
        ├── template // template
        ├── views //Business components
        └── index.js // App entrance
