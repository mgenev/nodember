'use strict';


var config = {
    app: 'public',
    dist: 'dist'
};

module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
        config: config,
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            compass: {
                files: ['<%= config.app %>/sass/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            neuter: {
                files: ['<%= config.app %>/ember/{,*/}*.js'],
                tasks: ['neuter', 'replace:sourceMap']
            },
            serverTemplates: {
                files: ['app/views/**'],
                options: {
                    livereload: true,
                }
            },
            emberTemplates: {
                files: '<%= config.app %>/ember/templates/**/*.hbs',
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
            css: {
                files: ['public/css/**'],
                options: {
                    livereload: true
                }
            }
        },
        compass: {
            options: {
                sassDir: '<%= config.app %>/sass',
                cssDir: 'public/css',
                generatedImagesDir: 'public/images/generated',
                imagesDir: 'public/img',
                javascriptsDir: 'public/ember',
                fontsDir: 'public/css/fonts',
                importPath: 'public/lib',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/sass/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: 'public/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'server.js'
            },
            options: {
                ignore: ['node_modules/**'],
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        env: {
            test: {
                NODE_ENV: 'test'
            }
        },
        mochaTest: {
            src: ['app/tests/**/*.js'],
            options: {
                reporter: 'spec',
                require: 'server.js'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        emberTemplates: {
            options: {
                templateName: function(sourceFile) {
                    var templatePath = config.app + '/ember/templates/';
                    return sourceFile.replace(templatePath, '');
                }
            },
            dist: {
                files: {
                    '<%= config.app %>/compiled-templates.js': '<%= config.app %>/ember/templates/{,*/}*.hbs'
                }
            }
        },
        neuter: {
            client: {
                options: {
                    includeSourceMap: true,
                    filepathTransform: function(filepath) {
                        return 'public/' + filepath;
                    }
                },
                src: '<%= config.app %>/ember/app.js',
                dest: '<%= config.app %>/combined-scripts.js'
            }
        },
        replace: {
            sourceMap: {
                src: '<%= config.app %>/combined-scripts.js.map', // source files array (supports minimatch)
                dest: '<%= config.app %>/combined-scripts.js.map', // destination directory or file
                replacements: [{
                    from: 'public/', // string replacement
                    to: '' 
                }]
            }
        },
        clean: {
            server: '.tmp'
        }
    });

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    //Load NPM tasks 
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-env');


    //Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    //Default task(s).
    grunt.registerTask('default', [
        'clean:server',
        'compass:server',
        'neuter:client',
        'replace:sourceMap',
        'emberTemplates',
        'concurrent'
    ]);

    //Test task.
    grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);

};
