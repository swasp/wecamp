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
            "number" => "AA100",
            "seats" => [
              [
                  "row" => 13,
                  "col" => "A",
                  "status" => "accepted"
              ], [
                  "row" => 16,
                  "col" => "F",
                  "status" => "up for grab"
              ]
            ]
        ],[
            "number" => "BB200",
            "seats" => [
                [
                    "row" => 17,
                    "col" => "C",
                    "status" => "pending"
                ], [
                    "row" => 25,
                    "col" => "D",
                    "status" => "accepted",
                    "message" => "changed to 5B"
                ]
            ]
          ]
        ];

        return $flights;
    }
}
