<?php
namespace swasp\api\Resource\Page;

use BEAR\Resource\ResourceObject;
use Koriym\HttpConstants\StatusCode;

class Myflights extends ResourceObject
{
    public function onGet() : ResourceObject
    {
        $flights = $this->getMyFlights();

        $this['flights'] = $flights;

        return $this;
    }

    private function getMyFlights()
    {
        $flights =  [
        [
            "number" => "KL123",
            "seats" => [
              [
                  "row" => 13,
                  "col" => "A",
                  "status" => "accepted",
                  "requested" => [
                      "row" => 23,
                      "col" => "F",
                  ],
              ], [
                  "row" => 16,
                  "col" => "F",
                  "status" => "up for grab"
              ]
            ]
        ],[
            "number" => "KL987",
            "seats" => [
                [
                    "row" => 17,
                    "col" => "C",
                    "status" => "pending",
                    "requested" => [
                        "row" => 1,
                        "col" => "C",
                    ],
                ], [
                    "row" => 25,
                    "col" => "D",
                    "status" => "accepted",
                    "message" => "changed to 5B",
                    "requested" => [
                        "row" => 1,
                        "col" => "A",
                    ],
                ], [
                    "row" => 32,
                    "col" => "C",
                    "status" => "rejected",
                    "requested" => [
                        "row" => 1,
                        "col" => "B",
                    ],
                ]
            ]
          ]
        ];

        return $flights;
    }
}
