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
                tasks: ['neuter']
            },
            serverTemplates: {
                files: ['app/views/**'],
                options: {
                    livereload: true,
                }
            },
            emberTemplates: {
                files: '<%= config.app %>/templates/**/*.hbs',
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
        nodemon: {
            dev: {
                script: 'server.js'
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
                    var templatePath = config.app + '/templates/';
                    return sourceFile.replace(templatePath, '');
                }
            },
            dist: {
                files: {
                    '.tmp/scripts/compiled-templates.js': '<%= config.app %>/templates/{,*/}*.hbs'
                }
            }
        },
        neuter: {
            app: {
                options: {
                    filepathTransform: function (filepath) {
                        return 'public/' + filepath;
                    },
                    includeSourceMap: true
                },
                includeSourceMap: true,
                src: '<%= config.app %>/ember/app.js',
                dest: '.tmp/scripts/combined-scripts.js'
            }
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
        'neuter:app',
        'emberTemplates',
        'concurrent'
    ]);

    //Test task.
    grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);

};
