'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('datasets', function() {

  var mockModule = require('../mock/backend-mock');
  var datasetList;

  browser.addMockModule('httpBackendMock', mockModule.httpBackendMock);

  beforeEach(function() {
    browser.get('/#/datasets');
    datasetList = element.all(by.repeater('dataset in datasets'));
  });


  it('should render datasets when user navigates to /datasets', function() {
    expect(element.all(by.css('.ng-binding')).first().getText()).
      toMatch(/\d+ conjuntos de datos/);
  });

  it('should list datasets', function() {
    expect(datasetList.count()).toBeGreaterThan(0);
  });

  it('root should redirect to datasets', function() {
    browser.get('/');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '#/conjuntos');
  });

  it('should search datasets when the user press enter in the search box', function() {
    var search = element(by.css('.search>input'));
    search.sendKeys('licencias', protractor.Key.ENTER);
    expect(datasetList.count()).toBeGreaterThan(0);
  });

  it('should filter datasets when the user selects a goverment type', function() {
    element.all(by.repeater('type in govTypes')).get(0).click();
    expect(datasetList.count()).toBeGreaterThan(0);
  });

  it('should link to dataset\'s detailed information', function() {
    // Click on a dataset link
    element.all(by.css('.dataset-item')).first().click();
    // Find a download link
    var content = element(by.css('[ng-view]')).getText();
    expect(content).toMatch(/Datos y recursos/);
  });

});
