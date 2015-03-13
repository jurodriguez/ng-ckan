'use strict';

exports.httpBackendMock = function() {

  angular.module('httpBackendMock', ['ngMockE2E', 'ngCkanApp'])
    .run(function($httpBackend) {

      var datasets = {
        success: true,
        result: {
          count: 1,
          results: [
            {
                "id": "13ee44c8-9c17-41d0-a632-7316a9fea716",
                "resources": [
                    {
                        "id": "232ddcbc-89ec-40e4-9225-755d58146fc9",
                        "size": "3459549",
                        "state": "active",
                        "description": "Encuesta Nacional de satisfacción a usuarios del servicio de guardería del IMSS, Julio de 2010",
                        "format": "CSV",
                        "name": "Guarderías 2010",
                        "created": "2015-02-09T22:57:48.565298",
                        "url": "http://datos.imss.gob.mx/sites/default/files/Base Guarderías Mayo 10_Final _portal.csv",
                    },
                ],
                "tags": [
                    {
                        "vocabulary_id": null,
                        "display_name": "Satisfacción general con el servicio",
                        "name": "Satisfacción general con el servicio",
                        "revision_timestamp": "2014-09-03T05:45:10.193263",
                        "state": "active",
                        "id": "addd595d-d637-4136-8918-9a565c5be1fe"
                    }
                ],
                "organization": {
                    "description": "El IMSS, es la institución con mayor presencia en la atención a la salud y en la protección social de los mexicanos desde su fundación en 1943, para ello, combina la investigación y la práctica médica, con la administración de los recursos para el retiro de sus asegurados, para brindar tranquilidad y estabilidad a los trabajadores y sus familias, ante cualquiera de los riesgos especificados en la Ley del Seguro Social.\r\n\r\nHoy en día, más de la mitad de la población mexicana, tiene algo que ver con el Instituto, hasta ahora, la más grande en su género en América Latina.",
                    "title": "IMSS",
                    "name": "imss",
                    "is_organization": true,
                    "state": "active",
                    "image_url": "http://upload.wikimedia.org/wikipedia/commons/f/f4/IMSS.jpg",
                    "type": "organization",
                    "id": "294968f3-05a3-436d-89f6-7f4e107d39cb"
                },
                "gov_type": [
                    "Federal"
                ],
                "name": "encuesta-nacional-de-satisfaccion-a-usuarios-del-servicio-de-guarderia-del-imss",
                "notes": "Encuesta que permite captar la percepción de los derechohabientes usuarios del servicio de guardería del IMSS.",
                "title": "Encuesta Nacional de satisfacción a usuarios del servicio de guardería del IMSS.",
            }
          ]
        }
      };

      $httpBackend.whenGET('http://catalogo.datos.gob.mx/api/3/action/package_search?q=&rows=10&start=0')
        .respond(function(method, url, data) {
          return [200, datasets, {}];
        });

      $httpBackend.whenGET('http://catalogo.datos.gob.mx/api/3/action/package_search?q=licencias&rows=10&start=0')
        .respond(function(method, url, data) {
          return [200, datasets, {}];
      });

      $httpBackend.whenGET('http://catalogo.datos.gob.mx/api/3/action/package_search?q=+vocab_gov_types:Federal&rows=10&start=0')
        .respond(function(method, url, data) {
          return [200, datasets, {}];
      });

      $httpBackend.whenGET(/.*/).passThrough();
    });
}
