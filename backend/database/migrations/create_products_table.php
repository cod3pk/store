<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::connection( 'mongodb' )
              ->create( 'Products', function ( Blueprint $collection ) {
                  $collection->string( 'Product_name' );
                  $collection->string( 'Category' );
                  $collection->string( 'Brand' );
                  $collection->integer( 'Unit' );
                  $collection->integer( 'Stock' );
                  $collection->float( 'Price' );
                  $collection->timestamps();
              } );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::connection( 'mongodb' )->dropIfExists( 'Products' );
    }

};
