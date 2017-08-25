<?php
namespace swasp\api\Resource\Page;

use BEAR\Resource\ResourceObject;

class Location extends ResourceObject
{
    public function onGet(string $abbreviation = '') : ResourceObject
    {
        $this['location'] = $this->getLocation($abbreviation);

        return $this;
    }

    private function getLocation($abbreviation)
    {
        $locations = [
            'AMS' => [
                'name' => 'Amsterdam Airport Schiphol',
                'country' => 'The Netherlands',
            ],
            'MAN' => [
                'name' => 'Manchester',
                'country' => 'United Kingdom',
            ],
            'FRA' => [
                'name' => 'Frankfurt',
                'country' => 'Germany',
            ],
            'TXL' => [
                'name' => 'Berlin',
                'country' => 'Germany',
            ],
        ];
        return $locations[strtoupper($abbreviation)];
    }
}
