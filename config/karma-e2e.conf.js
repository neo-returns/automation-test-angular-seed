module.exports = function(config){
    config.set({


    basePath : '../',

    files : [
        'test/e2e/**/*.js'
    ],

    autoWatch : false,

    browsers : ['PhantomJS'],

    frameworks: ['ng-scenario'],

    singleRun : true,

    proxies : {
      '/': 'http://localhost:8000/'
    },

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-scenario',
            'karma-phantomjs-launcher',
            'karma-threshold-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/e2e.xml',
      suite: 'e2e'
    },
	
	reporters: ['progress', 'threshold'],
  			
    // the configure thresholds
    thresholdReporter: {
      statements: 90,
      branches: 60,
      functions: 85,
      lines: 90
    }  
    
})}

