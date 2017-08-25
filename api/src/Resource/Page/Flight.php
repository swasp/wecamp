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

    private function getFlight($number, $date = null)
    {
        $date = (new \DateTimeImmutable($date))->format('d.m.Y');
        $flights = [
            'KL123' => [
                'number' => 'KL123',
                'date' => $date,
                'from' => 'AMS',
                'to' => 'MAN',
                'equipment' => 'KLM_Airbus_A330-300.jpg'
            ],
            'KL124' => [
                'number' => 'KL124',
                'date' => $date,
                'from' => 'MAN',
                'to' => 'AMS',
                'equipment' => 'KLM_Boeing_737-800.jpg'
            ],
            'KL789' => [
                'number' => 'KL789',
                'date' => $date,
                'from' => 'AMS',
                'to' => 'FRA',
                'equipment' => 'KLM_Embraer_ERJ-175.jpg'
            ],
            'KL987' => [
                'number' => 'KL987',
                'date' => $date,
                'from' => 'FRA',
                'to' => 'AMS',
                'equipment' => 'KLM_Fokker_70.jpg'
            ],
        ];

        return $flights[strtoupper($number)] ?? null;
    }
}
