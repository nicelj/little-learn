# webpack.config.js配置文件的全部配置项

注: 查看webpack官网文档!!!!


    var path = require('path');
    
    module.exports = {
      // click on the name of the option to get to the detailed documentation
      // click on the items with arrows to show more examples / advanced options
    
      entry: "./app/entry", // string | object | array
      entry: ["./app/entry1", "./app/entry2"],
      entry: {
        a: "./app/entry-a",
        b: ["./app/entry-b1", "./app/entry-b2"]
      },
      // Here the application starts executing
      // and webpack starts bundling
    
      output: {
        // options related to how webpack emits results
    
        path: path.resolve(__dirname, "dist"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
    
        filename: "bundle.js", // string
        filename: "[name].js", // for multiple entry points
        filename: "[chunkhash].js", // for long term caching
        // the filename template for entry chunks
    
        publicPath: "/assets/", // string
        publicPath: "",
        publicPath: "https://cdn.example.com/",
        // the url to the output directory resolved relative to the HTML page
    
        library: "MyLibrary", // string,
        // the name of the exported library
    
        libraryTarget: "umd", // universal module definition
            libraryTarget: "umd2", // universal module definition
            libraryTarget: "commonjs2", // exported with module.exports
            libraryTarget: "commonjs-module", // exports with module.exports
            libraryTarget: "commonjs", // exported as properties to exports
            libraryTarget: "amd", // defined with AMD defined method
            libraryTarget: "this", // property set on this
            libraryTarget: "var", // variable defined in root scope
            libraryTarget: "assign", // blind assignment
            libraryTarget: "window", // property set to window object
            libraryTarget: "global", // property set to global object
            libraryTarget: "jsonp", // jsonp wrapper
        // the type of the exported library
    
        /* Advanced output configuration (click to show) */
    
        pathinfo: true, // boolean
        // include useful path info about modules, exports, requests, etc. into the generated code
    
        chunkFilename: "[id].js",
        chunkFilename: "[chunkhash].js", // for long term caching
        // the filename template for additional chunks
    
        jsonpFunction: "myWebpackJsonp", // string
        // name of the JSONP function used to load chunks
    
        sourceMapFilename: "[file].map", // string
        sourceMapFilename: "sourcemaps/[file].map", // string
        // the filename template of the source map location
    
        devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string
        // the name template for modules in a devtool
    
        devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string
        // the name template for modules in a devtool (used for conflicts)
    
        umdNamedDefine: true, // boolean
        // use a named AMD module in UMD library
    
        crossOriginLoading: "use-credentials", // enum
        crossOriginLoading: "anonymous",
        crossOriginLoading: false,
        // specifies how cross origin request are issued by the runtime
    
        /* Expert output configuration (on own risk) */
      },
    
      module: {
        // configuration regarding modules
    
        rules: [
          // rules for modules (configure loaders, parser options, etc.)
    
          {
            test: /\.jsx?$/,
            include: [
              path.resolve(__dirname, "app")
            ],
            exclude: [
              path.resolve(__dirname, "app/demo-files")
            ]
            // these are matching conditions, each accepting a regular expression or string
            // test and include have the same behavior, both must be matched
            // exclude must not be matched (takes preferrence over test and include)
            // Best practices:
            // - Use RegExp only in test and for filename matching
            // - Use arrays of absolute paths in include and exclude
            // - Try to avoid exclude and prefer include
    
            issuer: { test, include, exclude },
            // conditions for the issuer (the origin of the import)
    
            enforce: "pre",
            enforce: "post",
            // flags to apply these rules, even if they are overridden (advanced option)
    
            loader: "babel-loader",
            // the loader which should be applied, it'll be resolved relative to the context
            // -loader suffix is no longer optional in webpack2 for clarity reasons
            // see webpack 1 upgrade guide
    
            options: {
              presets: ["es2015"]
            },
            // options for the loader
          },
    
          {
            test: "\.html$",
    
            use: [
              // apply multiple loaders and options
              "htmllint-loader",
              {
                loader: "html-loader",
                options: {
                  /* ... */
                }
              }
            ]
          },
    
          { oneOf: [ /* rules */ ] }
          // only use one of these nested rules
    
          { rules: [ /* rules */ ] }
          // use all of these nested rules (combine with conditions to be useful)
    
          { resource: { and: [ /* conditions */ ] } }
          // matches only if all conditions are matched
    
          { resource: { or: [ /* conditions */ ] } }
          { resource: [ /* conditions */ ] }
          // matches if any condition is matched (default for arrays)
    
          { resource: { not: /* condition */ } }
          // matches if the condition is not matched
        ],
    
        /* Advanced module configuration (click to show) */
      },
    
      resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)
    
        modules: [
          "node_modules",
          path.resolve(__dirname, "app")
        ],
        // directories where to look for modules
    
        extensions: [".js", ".json", ".jsx", ".css"],
        // extensions that are used
    
        alias: {
          // a list of module name aliases
    
          "module": "new-module",
          // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"
    
          "only-module$": "new-module",
          // alias "only-module" -> "new-module", but not "module/path/file" -> "new-module/path/file"
    
          "module": path.resolve(__dirname, "app/third/module.js"),
          // alias "module" -> "./app/third/module.js" and "module/file" results in error
          // modules aliases are imported relative to the current context
        },
        /* alternative alias syntax (click to show) */
    
        /* Advanced resolve configuration (click to show) */
      },
    
      performance: {
        hints: "warning", // enum
        hints: "error", // emit errors for perf hints
        hints: false, // turn off perf hints
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
        assetFilter: function(assetFilename) { 
          // Function predicate that provides asset filenames
          return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
      },
    
      devtool: "source-map", // enum
      devtool: "inline-source-map", // inlines SourceMap into orginal file
      devtool: "eval-source-map", // inlines SourceMap per module
      devtool: "hidden-source-map", // SourceMap without reference in original file
      devtool: "cheap-source-map", // cheap-variant of SourceMap without module mappings
      devtool: "cheap-module-source-map", // cheap-variant of SourceMap with module mappings
      devtool: "eval", // no SourceMap, but named modules. Fastest at the expense of detail. 
      // enhance debugging by adding meta info for the browser devtools
      // source-map most detailed at the expense of build speed.
    
      context: __dirname, // string (absolute path!)
      // the home directory for webpack
      // the entry and module.rules.loader option
      //   is resolved relative to this directory
    
      target: "web", // enum
      target: "webworker", // WebWorker
      target: "node", // Node.js via require
      target: "async-node", // Node.js via fs and vm
      target: "node-webkit", // nw.js
      target: "electron-main", // electron, main process
      target: "electron-renderer", // electron, renderer process
      target: (compiler) => { /* ... */ }, // custom
      // the environment in which the bundle should run
      // changes chunk loading behavior and available modules
    
      externals: ["react", /^@angular\//],
      externals: "react", // string (exact match)
      externals: /^[a-z\-]+($|\/)/, // Regex
      externals: { // object
        angular: "this angular", // this["angular"]
        react: { // UMD
          commonjs: "react",
          commonjs2: "react",
          amd: "react",
          root: "React"
        }
      },
      externals: (request) => { /* ... */ return "commonjs " + request }
      // Don't follow/bundle these modules, but request them at runtime from the environment
    
      stats: "errors-only",
      stats: { //object
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        hash: true,
        // ...
      },
      // lets you precisely control what bundle information gets displayed
    
      devServer: {
        /* TODO */
      },
    
      plugins: [
        // ...
      ],
      // list of additional plugins
    
    
      /* Advanced configuration (click to show) */
    
      resolveLoader: { /* same as resolve */ }
      // separate resolve options for loaders
    
      profile: true, // boolean
      // capture timing information
    
      bail: true, //boolean
      // fail out on the first error instead of tolerating it.
    
      cache: false, // boolean
      // disable/enable caching
    
      watch: true, // boolean
      // enables watching
    
      watchOptions: {
        aggregateTimeout: 1000, // in ms
        // aggregates multiple changes to a single rebuild
    
        poll: true,
        poll: 500, // intervall in ms
        // enables polling mode for watching
        // must be used on filesystems that doesn't notify on change
        // i. e. nfs shares
      },
    
      node: {
        /* TODO */
      },
    
      recordsPath: path.resolve(__dirname, "build/records.json"),
      recordsInputPath: path.resolve(__dirname, "build/records.json"),
      recordsOutputPath: path.resolve(__dirname, "build/records.json"),
      // TODO
    
    }