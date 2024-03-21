<?php

namespace Database\Seeders;

use App\Models\Products;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {

    /**
     * Seed the application's database.
     */
    public function run() {
        Products::factory()->count( 5 )->create();
    }

}
