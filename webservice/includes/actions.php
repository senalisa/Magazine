<?php
/**
 * @return array
 */
function getCities()
{
    return [
        [
            "id" => 1,
            "city" => "Barcelona",
            "country" => "Spain",
        ],
        [
            "id" => 2,
            "city" => "Paris",
            "country" => "France",
        ],
        [
            "id" => 3,
            "city" => "Amsterdam",
            "country" => "The Netherlands",
        ],
        [
            "id" => 4,
            "city" => "Istanbul",
            "country" => "Turkey",
        ],
        [
            "id" => 5,
            "city" => "New York",
            "country" => "United States",
        ],
        [
            "id" => 6,
            "city" => "Tokyo",
            "country" => "Japan",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getCitiesDetails($id)
{
    $tags = [
        1 => [
            "info" => "Barcelona is a really beautiful and popular city in Spain...",
            "tags" => ['FC Barcelona', 'Sagrada Familia', 'Park Guell']
        ],
        2 => [
            "info" => "Paris, also knows as the city of love, is in France...",
            "tags" => ['Eiffel Tower', 'Louvre Museum', 'Palace of Versailles']
        ],
        3 => [
            "info" => "Amsterdam is very famous for...",
            "tags" => ['Canals', 'Van Gogh Museum', 'Rijksmuseum']
        ],
        4 => [
            "info" => "Istanbul, the city in both Asia and Europe...",
            "tags" => ['The Blue Mosque', 'Galata Tower', 'Grand Bazaar']
        ],
        5 => [
            "info" => "New york is a famous city with a night life...",
            "tags" => ['Times Square', 'Empire State Building', 'Cental Park']
        ],
        6 => [
            "info" => "Tokyo is the worlds largest metropolis...",
            "tags" => ['Temples', 'Tokyo Tower', 'Gardens']
        ],
    ];

    return $tags[$id];
}