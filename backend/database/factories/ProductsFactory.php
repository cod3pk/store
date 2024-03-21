<?php

namespace Database\Factories;

use App\Models\Products;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductsFactory extends Factory {

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Products::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition() {
        return [
            'Product_name' => $this->faker->name,
            'Category'     => $this->faker->word,
            'Brand'        => $this->faker->company,
            'Unit'         => $this->faker->randomNumber(),
            'Stock'        => $this->faker->randomNumber(),
            'Price'        => $this->faker->randomFloat( 2, 0, 1000 ),
        ];
    }

}
