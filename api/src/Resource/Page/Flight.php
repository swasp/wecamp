<?php
namespace swasp\api\Resource\Page;

use BEAR\Resource\ResourceObject;
use Koriym\HttpConstants\StatusCode;

class Flight extends ResourceObject
{
    public function onGet(string $flightnumber = '') : ResourceObject
    {
        $flight = $this->getFlight($flightnumber);

        if ($flight === null) {
            $this->code = StatusCode::NOT_FOUND;
        }

        $this['flight'] = $flight;

        return $this;
    }

    private function getFlight($flightNumber)
    {
        $flights = [
            'KL123' => [
                'from' => 'AMS',
                'to' => 'MAN',
                'equipment' => 'KLM_Airbus_A330-300.jpg'
            ],
            'KL124' => [
                'from' => 'MAN',
                'to' => 'AMS',
                'equipment' => 'KLM_Boeing_737-800.jpg'
            ],
            'KL789' => [
                'from' => 'AMS',
                'to' => 'FRA',
                'equipment' => 'KLM_Embraer_ERJ-175.jpg'
            ],
            'KL987' => [
                'from' => 'FRA',
                'to' => 'AMS',
                'equipment' => 'KLM_Fokker_70.jpg'
            ],
        ];

        return $flights[strtoupper($flightNumber)] ?? null;
    }
}
