 
// var mountFolder = function (connect, dir) {
//     return connect.static(require('path').resolve(dir));
// };

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-env');

    // configurable paths
    var yeomanConfig = {
        app: 'public',
        dist: 'dist'
    };
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            compass: {
                files: ['<%= yeoman.app %>/sass/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            neuter: {
                files: ['<%= yeoman.app %>/ember/{,*/}*.js'],
                tasks: ['neuter']
            },
            serverTemplates: {
                files: ['app/views/**'],
                options: {
                    livereload: true,
                }
            },
            emberTemplates: {
                files: '<%= yeoman.app %>/templates/**/*.hbs',
                tasks: ['emberTemplates'],
                options: {
                    livereload: true,
                }
            },
            js: {
                files: ['public/js/**', 'app/**/*.js'],
                // tasks: ['jshint'],
                options: {
                    livereload: true,
                }
            },
            html: {
                files: ['public/views/**'],
                options: {
                    livereload: true,
                }
            },
            sass: {
                files: ['public/css/**']
            },
            css: {
                files: ['public/css/**'],
                options: {
                    livereload: true
                }
            },
            css2: {
                files: ['.tmp/styles/**'],
                options: {
                    livereload: true
                }
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/sass',
                //cssDir: 'public/css',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: 'public/img',
                javascriptsDir: 'public/ember',
                // fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: 'public/lib',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/sass/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: 'dist/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        // jshint: {
        //     all: ['gruntfile.js', 'public/js/**/*.js', 'test/**/*.js', 'app/**/*.js']
        // },
        nodemon: {
            dev: {
                options: {
                    file: 'server.js',
                    args: [],
                    ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
                    watchedExtensions: ['js'],
                    watchedFolders: ['app', 'config'],
                    debug: true,
                    delayTime: 1,
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
            logConcurrentOutput: true
            },
            server: [
                'emberTemplates',
                'compass:server'
            ],
            test: [
                'emberTemplates',
                'compass'
            ],
            dist: [
                'emberTemplates',
                'compass:dist',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },
        // mochaTest: {
        //     options: {
        //         reporter: 'spec'
        //     },
        //     src: ['test/**/*.js']
        // },
        // mocha: {
        //     all: {
        //         options: {
        //             run: true,
        //             urls: ['http://localhost:<%= connect.options.port %>/index.html']
        //         }
        //     }
        // },
        env: {
            test: {
                NODE_ENV: 'test'
            }
        },
        // 
        yeoman: yeomanConfig,        
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= yeoman.dist %>/styles/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/*'
                    ]
                }]
            }
        },
        // concurrent: {
        //     server: [
        //         'emberTemplates',
        //         'compass:server'
        //     ],
        //     test: [
        //         'emberTemplates',
        //         'compass'
        //     ],
        //     dist: [
        //         'emberTemplates',
        //         'compass:dist',
        //         'imagemin',
        //         'svgmin',
        //         'htmlmin'
        //     ]
        // },
        emberTemplates: {
            options: {
                templateName: function (sourceFile) {
                    var templatePath = yeomanConfig.app + '/templates/';
                    return sourceFile.replace(templatePath, '');
                }
            },
            dist: {
                files: {
                    '.tmp/scripts/compiled-templates.js': '<%= yeoman.app %>/templates/{,*/}*.hbs'
                }
            }
        },
        neuter: {
            app: {
                options: {
                    filepathTransform: function (filepath) {
                        return 'public/' + filepath;
                    }
                },
                src: '<%= yeoman.app %>/ember/app.js',
                dest: '.tmp/scripts/combined-scripts.js'
            }
        }
    });
    
    // MEAN tasks and options
    //Making grunt default to force in order not to break the project.
    grunt.option('force', true);
    //Default task(s).
    // grunt.registerTask('default', [ 'concurrent']);
    //Test task.
    // grunt.registerTask('test', ['env:test', 'mochaTest']);

    // Generator Ember 
        grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'neuter:app',
            'concurrent',
            'watch'
        ]);
    });

    // grunt.registerTask('test', [
    //     'clean:server',
    //     'concurrent:test',
    //     'connect:test',
    //     'neuter:app',
    //     'mocha'
    // ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'neuter:app',
        // 'concat',
        'cssmin',
        // 'uglify',
        'copy',
        'rev',
        'usemin'
    ]);

    //Default MEAN task(s).
    grunt.registerTask('default', [ 'concurrent']);

    //Default Generator Ember task(s).
    // grunt.registerTask('default', [
    //     'jshint',
    //     // 'test',
    //     'build'
    // ]);
};

/*        
Previous tasks part of Mean 
===========================
  watch  Run predefined tasks whenever watched files change.            
       compass  Compile Sass to CSS using Compass *                            
     mochaTest  Run node unit tests with Mocha *                               
       nodemon  Runs a nodemon monitor of your node.js server. *               
    concurrent  Run grunt tasks concurrently *                                 
           env  Specify an ENV configuration for future tasks in the chain *   
       default  Alias for "concurrent" task.                                   
          test  Alias for "env:test", "mochaTest" tasks. 

Tasks from Yeoman's generator ember
===================================
          copy  Copy files. *                                                
          concat  Concatenate files. *                                         
          coffee  Compile CoffeeScript files into JavaScript *                 
          uglify  Minify files with UglifyJS. *                                
         compass  Compile Sass to CSS using Compass *                          
          jshint  Validate files with JSHint. *                                
          cssmin  Minify CSS files *                                           
         connect  Start a connect web server. *                                
           clean  Clean files and folders. *                                   
         htmlmin  Minify HTML *                                                
        imagemin  Minify PNG and JPEG images *                                 
           watch  Run predefined tasks whenever watched files change.          
             rev  Prefix static asset file names with a content hash *         
          usemin  Replaces references to non-minified scripts / stylesheets *  
   useminPrepare  Using HTML markup as the primary source of information *     
           mocha  Run Mocha unit tests in a headless PhantomJS instance. *     
            open  Open urls and files from a grunt task *                      
          svgmin  Minify SVG *                                                 
      concurrent  Run grunt tasks concurrently *                               
  emberTemplates  Compile Handlebars templates for Ember. *                    
 ember_templates  Compile Handlebars templates for Ember. [DEPRECATED: please  
                  use `emberTemplates` instead] *                              
          neuter  Concatenate files in the order you require *                 
          server  Custom task.                                                 
            test  Alias for "clean:server", "concurrent:test", "connect:test", 
                  "neuter:app", "mocha" tasks.                                 
           build  Alias for "clean:dist", "useminPrepare", "concurrent:dist",  
                  "neuter:app", "concat", "cssmin", "uglify", "copy", "rev",   
                  "usemin" tasks.                                              
         default  Alias for "jshint", "test", "build" tasks.        
*/


