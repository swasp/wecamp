<?php
namespace swasp\api\Resource\Page;

use BEAR\Resource\ResourceObject;

class Flight extends ResourceObject
{
    public function onGet(string $flightnumber = '') : ResourceObject
    {
        $this['flight'] = $this->getFlight($flightnumber);

        if ($this['flight'] === null) {
            $this->code = 404;
        }

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
