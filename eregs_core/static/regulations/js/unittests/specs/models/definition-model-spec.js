require('../../setup');

describe('Definition Model:', function() {
    'use strict';

    var $, Backbone, DefinitionModel, Resources;

    before(function (){
        Backbone = require('backbone');
        $ = require('jquery');
        Backbone.$ = $;
        DefinitionModel = require('../../../source/models/definition-model');
        Resources = require('../../../source/resources');
        window.APP_PREFIX = '/eregulations/';
    });

    beforeEach(function(){
        Resources.versionElements = {
            toc: $('<nav id="toc" data-toc-version="2014-20681" data-effective-date="2000-10-10"></nav>'),
        };
    });

    it('getAJAXUrl returns the correct URL endpoint with /definition supplemental path', function() {
        expect(DefinitionModel.getAJAXUrl('1005-2')).to.equal('/eregulations/partial/definition/2014-20681/2000-10-10/1005-2');

        window.APP_PREFIX = ''; // Test without a urlPrefix
        expect(DefinitionModel.getAJAXUrl('1005-2')).to.equal('/partial/definition/2014-20681/2000-10-10/1005-2');

        window.APP_PREFIX = '/eregulations/'; //Return to normal

    });
});
